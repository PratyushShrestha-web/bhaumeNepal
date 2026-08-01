"use server";

import { getSupabaseClient } from "@/lib/supabase";

export type WaitlistRole = "buyer" | "seller" | "both";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server Action: validates and inserts a new row into the `waitlist` table.
 * Called directly from the client form via useActionState / a form action.
 */
export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const role = String(formData.get("role") || "") as WaitlistRole;

  if (!name || name.length < 2) {
    return { status: "error", message: "Please enter your full name." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!["buyer", "seller", "both"].includes(role)) {
    return { status: "error", message: "Please select a role." };
  }

  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from("waitlist")
      .insert({ name, email, role });

    if (error) {
      // Unique violation on email
      if (error.code === "23505") {
        return {
          status: "error",
          message: "This email is already on the waitlist.",
        };
      }
      console.error("Supabase insert error:", error.message);
      return {
        status: "error",
        message: "Something went wrong. Please try again.",
      };
    }

    return { status: "success", message: "You're on the list! 🎉" };
  } catch (err) {
    console.error("Waitlist submission failed:", err);
    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
}
