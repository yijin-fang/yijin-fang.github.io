import type { Metadata } from 'next';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { publications } from '../site-data';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Publications by Yijin Fang on cognitive development, exploration, curiosity, and learning.',
};

function HighlightedAuthors({ authors }: { authors: string }) {
  return authors.split(/(Fang, Y\.)/g).map((part, index) =>
    part === 'Fang, Y.'
      ? <strong key={index}>{part}</strong>
      : <span key={index}>{part}</span>
  );
}

export default function PublicationsPage() {
  return (
    <main>
      <SiteHeader active="publications" />
      <div className="content-shell publications-page">
        <div className="publication-sections">
          {Object.entries(publications).map(([section, items]) => (
            <section className="publication-section" key={section}>
              <h2>{section}</h2>
              <ol>
                {items.map((item, index) => (
                  <li key={`${item.year}-${index}`}>
                    <span className="publication-year">{item.year}</span>
                    <p>
                      <HighlightedAuthors authors={item.authors} />{' '}
                      {item.year !== '—'
                        ? `(${item.year}). `
                        : section === 'Under review'
                          ? '(under review). '
                          : '(manuscript in preparation). '}
                      {item.title}{' '}
                      {item.venue && (
                        <>
                          {item.venuePrefix}<em>{item.venue}</em>
                          {item.volume && <>, <em>{item.volume}</em>{item.issue && `(${item.issue})`}</>}
                          {item.pages && `, ${item.pages}`}.
                        </>
                      )}
                    </p>
                    {section === 'Published' && (item.pdf ? (
                      <a className="paper-link" href={item.pdf} target="_blank" rel="noreferrer" aria-label={`Open PDF for ${item.title}`}>[pdf]</a>
                    ) : (
                      <span className="paper-link disabled" title="Add this paper's PDF path in app/site-data.ts">[pdf]</span>
                    ))}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
