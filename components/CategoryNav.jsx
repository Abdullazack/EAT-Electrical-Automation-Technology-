'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

// "type" must match the category names stored in the resources table.
const ITEMS = [
  { label: 'All resources', type: '' },
  { label: 'Formative assessments', type: 'Formative assessments' },
  { label: 'CATs', type: 'CATs' },
  { label: 'Assignments', type: 'Assignments' },
  { label: 'Previous promotion exams', type: 'Previous promotion exams' },
  { label: 'Learning documents', type: 'Learning documents' },
  { label: 'Videos and links', type: 'Videos and links' },
];

export default function CategoryNav() {
  const pathname = usePathname();
  const params = useSearchParams();
  const current = params.get('type') ?? '';
  const onLibrary = pathname === '/library';

  return (
    <nav className="subnav" aria-label="Resource categories">
      <div className="container subnav-list">
        {ITEMS.map((item) => {
          const href = item.type
            ? `/library?type=${encodeURIComponent(item.type)}`
            : '/library';
          const active = onLibrary && current === item.type;
          return (
            <Link key={item.label} href={href} aria-current={active ? 'page' : undefined}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}