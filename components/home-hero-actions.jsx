import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function HomeHeroActions() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="actions">
      <Link href="/library" className="btn">Browse the library</Link>
      {!user && (
        <Link href="/signup" className="btn btn-ghost">Create a free account</Link>
      )}
    </div>
  );
}