import Link from 'next/link';

type PageName = 'home' | 'publications' | 'cv' | 'messages';

export function SiteHeader({ active }: { active: PageName }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/">Yijin&apos;s Homepage</Link>
        <nav aria-label="Primary navigation">
          <Link className={active === 'publications' ? 'active' : ''} href="/publications">Publications</Link>
          <a className={active === 'cv' ? 'active' : ''} href="/CV_Yijin_Fang.pdf">CV</a>
        </nav>
      </div>
    </header>
  );
}
