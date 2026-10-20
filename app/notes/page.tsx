import type { Metadata } from 'next';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { notes } from './notes-data';

export const metadata: Metadata = {
  title: 'Notes',
};

export default function NotesPage() {
  return (
    <main className="notes-page">
      <SiteHeader active="notes" />

      <div className="content-shell notes-shell">
        <header className="page-intro notes-intro">
          <p>
            <strong>Things I write along the way:</strong> Occasional notes on learning and ideas that are still taking shape.
          </p>
        </header>
        <ol className="notes-directory" aria-label="Notes directory">
          {notes.map((note) => (
            <li key={note.pdf}>
              <a className="note-index-link" href={note.pdf} target="_blank" rel="noreferrer">
                <time dateTime={note.date}>{note.displayDate}</time>
                <span className="note-index-copy">
                  <span className="note-index-title">{note.title}</span>
                  <span className="note-index-summary">{note.summary}</span>
                </span>
                <span className="note-index-format" aria-hidden="true">PDF ↗</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <SiteFooter />
    </main>
  );
}
