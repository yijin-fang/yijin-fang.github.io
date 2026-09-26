'use client';

import { GitFork, GraduationCap, Mail, MapPin } from 'lucide-react';
import { profile } from '../site-data';

export function ProfileSidebar() {
  const profileLinks = [
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
    { label: 'Google Scholar', href: profile.googleScholar, icon: GraduationCap },
    { label: 'GitHub', href: profile.github, icon: GitFork },
  ];

  return (
    <aside className="profile-card" aria-label="Profile">
      {profile.photo ? (
        <img className="profile-photo" src={profile.photo} alt={`Portrait of ${profile.name}`} />
      ) : (
        <div className="portrait-placeholder" role="img" aria-label={`Portrait placeholder for ${profile.name}`}>
          <span>YF</span>
          <small>portrait</small>
        </div>
      )}
      <h1>{profile.name}</h1>
      <p className="profile-role">{profile.role}</p>
      <p className="profile-affiliation">{profile.institution}</p>
      <div className="profile-links">
        <div className="profile-detail">
          <MapPin aria-hidden="true" />
          <span>{profile.location}</span>
        </div>
        {profileLinks.map((item) => {
          const Icon = item.icon;
          return item.href ? (
            <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          ) : (
            <span key={item.label} className="profile-link-disabled" title="Add this URL in app/site-data.ts">
              <Icon aria-hidden="true" />
              <span>{item.label}</span>
            </span>
          );
        })}
      </div>
      <a className="message-invitation" href="/messages#general">
        <span>Any messages are welcome!</span>
        <span aria-hidden="true">›››</span>
      </a>
    </aside>
  );
}
