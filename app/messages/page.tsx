import type { Metadata } from 'next';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { MessageComposer } from './MessageComposer';

export const metadata: Metadata = {
  title: 'Leave a message',
  description: 'Share a message with Yijin Fang.',
};

export default function MessagesPage() {
  return (
    <main className="messages-page">
      <SiteHeader active="messages" />
      <div className="content-shell message-shell">
        <header className="message-page-intro">
          <p className="eyebrow">Let&apos;s exchange ideas</p>
          <p>Thoughts, examples, questions, and different perspectives are all welcome.</p>
        </header>

        <section className="general-message-section" aria-label="General message">
          <MessageComposer />
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
