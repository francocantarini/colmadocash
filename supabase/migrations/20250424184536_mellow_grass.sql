/*
  # Create Contact Table

  1. New Table
    - `contact`
      - `id` (uuid, primary key, auto-generated)
      - `fullName` (text, not null, max 100 chars)
      - `email` (text, not null, email format validation)
      - `phone` (text, null, max 20 chars)
      - `subject` (text, not null, max 200 chars)
      - `message` (text, not null, max 2000 chars)
      - `created_at` (timestamptz, auto-generated)

  2. Indexes
    - Email index for efficient lookups
    - Full name index for search optimization
    - Created at index for chronological sorting

  3. Security
    - Enable RLS
    - Add policy for public inserts
    - Add policy for admin reads
*/

-- Create the contact table
CREATE TABLE IF NOT EXISTS contact (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraints for field validation
ALTER TABLE contact
  ADD CONSTRAINT contact_full_name_check CHECK (char_length(full_name) <= 100),
  ADD CONSTRAINT contact_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT contact_phone_number_check CHECK (phone_number IS NULL OR char_length(phone_number) <= 20),
  ADD CONSTRAINT contact_subject_check CHECK (char_length(subject) <= 200),
  ADD CONSTRAINT contact_message_check CHECK (char_length(message) <= 2000);

-- Create indexes
CREATE INDEX IF NOT EXISTS contact_email_idx ON contact(email);
CREATE INDEX IF NOT EXISTS contact_full_name_idx ON contact(full_name);
CREATE INDEX IF NOT EXISTS contact_created_at_idx ON contact(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow anyone to submit contact form"
  ON contact
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow admins to view contact submissions"
  ON contact
  FOR SELECT
  TO authenticated
  USING ((auth.jwt() ->> 'role'::text) = 'admin'::text);