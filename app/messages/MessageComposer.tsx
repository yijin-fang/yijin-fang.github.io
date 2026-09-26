'use client';

import { FormEvent, useState } from 'react';
import { profile } from '../site-data';

export function MessageComposer() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const honeypot = String(formData.get('_honey') || '');

    if (honeypot) return;

    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'A message from your personal website',
          _template: 'table',
          _captcha: 'false',
          _honey: honeypot,
          source: 'Yijin Fang personal website',
          topic: 'General message',
          message: message.trim(),
          page: window.location.href,
        }),
      });
      const result = await response.json() as { success?: boolean | string };

      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error('Form submission failed');
      }

      setMessage('');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const messageId = 'general-message';

  return (
    <article className="message-card" id="general">
      <h2>Any messages are welcome!</h2>
      <form onSubmit={sendMessage}>
        <textarea
          id={messageId}
          name="message"
          aria-label="Your message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          placeholder="Feel free to leave your idea or message here…"
          rows={6}
          required
        />
        <input
          className="message-honeypot"
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="message-submit-row">
          <div className="message-submit-copy">
            <p>Sent securely through FormSubmit to Yijin&apos;s email. No email app will open.</p>
            <p className={`message-status message-status-${status}`} role="status" aria-live="polite">
              {status === 'sent' && 'Thank you — your message has been submitted.'}
              {status === 'error' && 'The message could not be sent. Your text is still here, so you can try again.'}
            </p>
          </div>
          <button type="submit" disabled={status === 'sending' || !message.trim()}>
            {status === 'sending' ? 'Sending…' : 'Send message'} <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </article>
  );
}
