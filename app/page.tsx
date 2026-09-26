import { ProfileSidebar } from './components/ProfileSidebar';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader active="home" />

      <div className="page-shell">
        <ProfileSidebar />

        <section className="home-content">
          <p>
            <strong><span style={{ fontSize: '24px' }}>Hi! I am Yijin.</span></strong>
          </p>
          <p> 
            I am a PhD candidate in the 
            {' '}<a className="inline-link" href="https://www.tsinghuakidlab.com/en/" target="_blank" rel="noreferrer">
              Child Cognition Center (CCC Lab)
            </a>, under the mentorship of
            {' '}<a className="inline-link" href="https://scholar.google.com/citations?user=QQwKkLgAAAAJ&hl=zh-CN&oi=ao" target="_blank" rel="noreferrer">
              Dr. Stella Christie
            </a>. I am studying how exploration is influenced by what individuals have already known and what they believe they know.
            I also work with 
            {' '}<a className="inline-link" href="https://scholar.google.com/citations?user=cIHoQIIAAAAJ&hl=zh-CN&oi=ao" target="_blank" rel="noreferrer">
              Dr. Yisi Zhang
            </a>. I have visited the
            {' '}<a className="inline-link" href="https://www.kiddlab.com/" target="_blank" rel="noreferrer">
              Kidd Lab
            </a> at UC Berkeley in 2025 Fall and worked with
            {' '}<a className="inline-link" href="https://psychology.berkeley.edu/people/celeste-kidd" target="_blank" rel="noreferrer">
              Dr. Celeste Kidd
            </a>.
          </p>
          <p>
            My research focuses on <strong>Exploration</strong>, which is a fundamental but key way through which humans learn about themselves, others, 
            and the environments in which they live. I have strong interest in finding the answers of when and why 
            individuals are motivated to explore what they do not yet know or are uncertain about in distinct contexts.
            I want to continue exploring:
          </p>
          <ul className="research-questions">
            <li>How exploration strategies interact with individual experience, social contexts, and cultures;</li>
            <li>What shapes curiosity and learning agency in different domains;</li>
            {/* <li>Do individuals who love to make plans have low tolerance for uncertainty and a decreased exploration preference?</li> */}
          </ul>
          <p>
            In the long term, I aim to contribute to theories of exploration, curiosity, and learning agency in human development.
          </p>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
