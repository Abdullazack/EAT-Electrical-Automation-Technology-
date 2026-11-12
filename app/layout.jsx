import './globals.css';
import { Chakra_Petch, IBM_Plex_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoBackground from '@/components/VideoBackground';
import { createClient } from '@/lib/supabase/server';

const heading = Chakra_Petch({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const metadata = {
  title: {
    default: 'Electrical Automation Technology',
    template: '%s | Electrical Automation Technology',
  },
  description:
    'Learning resources, assessments and practical projects for the Electrical Automation Technology program.',
};

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <VideoBackground />
        <Navbar user={user ? { email: user.email } : null} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
