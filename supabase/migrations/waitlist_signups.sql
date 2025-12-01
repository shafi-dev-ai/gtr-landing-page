-- Enable pgcrypto for gen_random_uuid (Supabase usually ships with this enabled)
create extension if not exists "pgcrypto";

-- Waitlist signups table
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.waitlist_signups enable row level security;

-- Allow inserts from the anon/public key
create policy "Allow anonymous inserts" on public.waitlist_signups
  for insert
  to anon
  with check (true);

-- (Optional) tighten other privileges
revoke all on public.waitlist_signups from anon, authenticated;
grant insert on public.waitlist_signups to anon;
