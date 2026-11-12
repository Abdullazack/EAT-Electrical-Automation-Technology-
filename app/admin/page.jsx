import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export const metadata = { title: 'Administration' };

// Placeholder. The real administrator dashboard and its server-side role check
// are built in Stage 5. For now this page only requires a signed-in user and
// offers no admin actions.
export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login?next=/admin');

  return (
    <div className="container page narrow">
      <h1>Administration</h1>
      <p className="muted">The administrator tools are not available yet.</p>
    </div>
  );
}
