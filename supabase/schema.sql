-- Bhaume waitlist table
-- Run this in the Supabase SQL Editor (Project > SQL Editor > New query)

create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  role text not null check (role in ('buyer', 'seller', 'both')),
  created_at timestamp with time zone default now()
);

-- Index for fast lookups by email (already covered by unique constraint,
-- kept explicit for clarity + query planning)
create index if not exists waitlist_email_idx on public.waitlist (email);

-- Row Level Security
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (public signup form) but no reads/updates/deletes
-- from the client. All reads happen via the Supabase dashboard or a
-- service-role key on the server.
create policy "Anyone can join the waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Explicitly deny select/update/delete for anon/authenticated roles
-- (no policy = no access, this is just documentation of intent)
