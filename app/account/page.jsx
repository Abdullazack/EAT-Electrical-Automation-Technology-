import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export const metadata = { title: 'My account' };

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Middleware already redirects visitors; this is a second, server-side check.
  if (!user) redirect('/login?next=/account');

  const joined = new Date(user.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="container page narrow">
      <h1>My account</h1>
      <dl className="details">
        <dt>Name</dt>
        <dd>{user.user_metadata?.full_name || 'Not provided'}</dd>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Member since</dt>
        <dd>{joined}</dd>
      </dl>
      <form action="/auth/signout" method="post">
        <button type="submit" className="btn btn-ghost">Sign out</button>
      </form>
    </div>
  );
}
