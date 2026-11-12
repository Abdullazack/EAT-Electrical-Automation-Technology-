import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Lock } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';

export default async function ResourcePage({ params }) {
  const { id } = await params;

  const supabase = await createClient();
  const { data: resource } = await supabase
    .from('resources')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (!resource) notFound();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="container page narrow">
      <Link href="/library">← Back to the library</Link>
      <h1>{resource.title || 'Untitled resource'}</h1>
      {resource.description && <p>{resource.description}</p>}

      {user ? (
        <div className="notice">
          <h2>You are signed in</h2>
          <p>
            Secure downloads for this material are added in Stage 4, once the private file
            storage is set up.
          </p>
        </div>
      ) : (
        <div className="notice">
          <h2><Lock size={18} aria-hidden="true" /> Full material is for registered students</h2>
          <p>Registration is free and takes a minute.</p>
          <div className="actions">
            <Link href={`/signup?next=${encodeURIComponent(`/resource/${id}`)}`} className="btn">
              Create free account
            </Link>
            <Link href={`/login?next=${encodeURIComponent(`/resource/${id}`)}`} className="btn btn-ghost">
              Log in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
