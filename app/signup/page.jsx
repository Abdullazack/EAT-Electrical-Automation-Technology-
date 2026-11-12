import Link from 'next/link';
import AuthForm from '@/components/AuthForm';
import { safeNext } from '@/lib/safeNext';

export const metadata = { title: 'Create account' };

export default async function SignupPage({ searchParams }) {
  const sp = await searchParams;
  const next = safeNext(sp.next);

  return (
    <div className="container page auth-wrap">
      <h1>Create your free account</h1>
      <AuthForm mode="signup" next={next} />
      <p className="muted">
        Already registered? <Link href={`/login?next=${encodeURIComponent(next)}`}>Log in</Link>
      </p>
    </div>
  );
}
