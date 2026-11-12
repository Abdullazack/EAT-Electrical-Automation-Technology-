import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function ResourceCard({ resource, type }) {
  return (
    <Link href={`/resource/${resource.id}`} className="resource-card">
      {type && <span className="badge">{type}</span>}
      <h3>{resource.title || 'Untitled resource'}</h3>
      {resource.description && <p>{resource.description}</p>}
      <span className="card-foot">
        <Lock size={14} aria-hidden="true" /> Full material needs a free account
      </span>
    </Link>
  );
}
