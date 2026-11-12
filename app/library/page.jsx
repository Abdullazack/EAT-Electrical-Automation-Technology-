import Link from 'next/link';
import { Search } from 'lucide-react';
import ResourceCard from '@/components/ResourceCard';
import { createClient } from '@/lib/supabase/server';

export const metadata = { title: 'Library' };

const CATEGORIES = [
  'Formative assessments',
  'CATs',
  'Assignments',
  'Previous promotion exams',
  'Learning documents',
  'Videos and links',
];

// The column that stores a resource's category is confirmed when we inspect the
// resources table. Until then we accept the likely names.
function typeOf(r) {
  return r.resource_type ?? r.type ?? r.category ?? '';
}

export default async function LibraryPage({ searchParams }) {
  const { type = '', q = '' } = await searchParams;

  const supabase = await createClient();
  const { data, error } = await supabase.from('resources').select('*');

  let resources = (data ?? []).filter((r) => r.is_published !== false);

  if (type) resources = resources.filter((r) => typeOf(r) === type);
  if (q) {
    const needle = q.toLowerCase();
    resources = resources.filter((r) =>
      `${r.title ?? ''} ${r.description ?? ''}`.toLowerCase().includes(needle)
    );
  }

  return (
    <div className="container page">
      <h1>Library</h1>
      <p className="muted">
        Browse freely. You only need a free account to open or download the full material.
      </p>

      <form className="search" action="/library" method="get">
        {type && <input type="hidden" name="type" value={type} />}
        <label className="sr-only" htmlFor="q">Search the library</label>
        <input id="q" name="q" defaultValue={q} placeholder="Search by title or topic" />
        <button type="submit" className="btn" aria-label="Search">
          <Search size={18} />
        </button>
      </form>

      <div className="chips">
        <Link href="/library" className={!type ? 'active' : ''}>All</Link>
        {CATEGORIES.map((c) => (
          <Link
            key={c}
            href={`/library?type=${encodeURIComponent(c)}`}
            className={type === c ? 'active' : ''}
          >
            {c}
          </Link>
        ))}
      </div>

      {error && (
        <p className="msg error" role="alert">
          The library could not be loaded. Please try again shortly.
        </p>
      )}

      {!error && resources.length === 0 && (
        <p className="empty">
          No resources match yet. New materials appear here as soon as they are published.
        </p>
      )}

      <div className="grid">
        {resources.map((r) => (
          <ResourceCard key={r.id} resource={r} type={typeOf(r)} />
        ))}
      </div>
    </div>
  );
}
