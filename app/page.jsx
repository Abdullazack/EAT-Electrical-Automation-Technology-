import Link from 'next/link';
import {
  ClipboardCheck,
  Timer,
  PenLine,
  Archive,
  BookOpen,
  PlayCircle,
} from 'lucide-react';

const KINDS = [
  { icon: ClipboardCheck, title: 'Formative assessments', text: 'Check your understanding as you learn.' },
  { icon: Timer, title: 'CATs', text: 'Continuous assessment tests to practise with.' },
  { icon: PenLine, title: 'Assignments', text: 'Practical and written tasks from your modules.' },
  { icon: Archive, title: 'Previous promotion exams', text: 'Past papers to prepare for end-of-term exams.' },
  { icon: BookOpen, title: 'Learning documents', text: 'Notes and reference material for each topic.' },
  { icon: PlayCircle, title: 'Videos and links', text: 'Recommended videos and outside learning resources.' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Welcome to Electrical Automation Technology</h1>
          <p className="subtitle">
            Your gateway to advanced learning and innovation in Electrical Automation
          </p>
          <div className="actions">
            <Link href="/library" className="btn">Browse the library</Link>
            <Link href="/signup" className="btn btn-ghost">Create a free account</Link>
          </div>

          <svg className="trace" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true">
            <path
              pathLength="1"
              d="M0 100 H110 L140 50 H250 L280 110 H390 L420 30 H600"
              fill="none"
              strokeWidth="2"
            />
            <circle cx="140" cy="50" r="4" />
            <circle cx="280" cy="110" r="4" />
            <circle cx="420" cy="30" r="4" />
          </svg>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What you will find</h2>
          <ul className="kinds">
            {KINDS.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon size={22} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How access works</h2>
          <div className="access">
            <div>
              <h3>Open to everyone</h3>
              <ul>
                <li>Read about the program</li>
                <li>Browse the library and its categories</li>
                <li>See resource titles and descriptions</li>
                <li>Explore projects, contact and subscription details</li>
              </ul>
            </div>
            <div>
              <h3>With a free account</h3>
              <ul>
                <li>Open full learning documents</li>
                <li>Download examination papers</li>
                <li>Use complete CAT materials</li>
                <li>Manage your account details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <h2>Projects</h2>
          <p className="muted">
            Practical electrical and automation projects will appear here as the program
            publishes them.
          </p>
        </div>
      </section>
    </>
  );
}
