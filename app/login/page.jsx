import Link from 'next/link';
import AuthForm from '@/components/AuthForm';
import { safeNext } from '@/lib/safeNext';

export const metadata = { title: 'Log in' };

export default async function LoginPage({ searchParams }) {
  const sp = await searchParams;
  const next = safeNext(sp.next);

  return (
    <div className="container page auth-wrap">
      <h1>Log in</h1>
      {sp.error === 'confirmation' && (
        <p className="msg error" role="alert">
          That confirmation link did not work. Log in, or create your account again.
        </p>
      )}
      <AuthForm mode="login" next={next} />
      <p className="muted">
        New here? <Link href={`/signup?next=${encodeURIComponent(next)}`}>Create a free account</Link>
      </p>
    </div>
  );
}
