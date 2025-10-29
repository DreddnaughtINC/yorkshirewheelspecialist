"use client";

import React from 'react';
import OpenCookieSettingsButton from './OpenCookieSettingsButton';

const CmpAvailableBadge: React.FC = () => {
  const available = typeof window !== 'undefined' && !!(window as any).displayPreferenceModal;
  return (
    <span
      className={
        'ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs ' +
        (available ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800')
      }
      aria-live="polite"
    >
      {available ? 'Settings ready' : 'Settings unavailable'}
    </span>
  );
};

type Props = {
  acceptClass?: string;
  rejectClass?: string;
  settingsClass?: string;
};

const CookieActions: React.FC<Props> = ({ acceptClass, rejectClass, settingsClass }) => {
  const acceptAll = () => {
    try {
      (window as any).acceptAllConsent && (window as any).acceptAllConsent();
      (window as any).displayPreferenceModal && (window as any).displayPreferenceModal();
    } catch {}
  };

  const rejectNonEssential = () => {
    try {
      (window as any).rejectNonEssentialConsent && (window as any).rejectNonEssentialConsent();
      (window as any).displayPreferenceModal && (window as any).displayPreferenceModal();
    } catch {}
  };

  return (
    <div className="flex items-center gap-3">
      <button type="button" onClick={acceptAll} className={acceptClass || 'btn btn-primary rounded-2xl'}>
        Accept all cookies
      </button>

      <button type="button" onClick={rejectNonEssential} className={rejectClass || 'btn btn-secondary rounded-2xl'}>
        Reject non‑essential
      </button>

      <OpenCookieSettingsButton className={settingsClass || 'btn rounded-2xl bg-transparent border text-foreground hover:bg-[var(--color-muted)]'} />

      <CmpAvailableBadge />
    </div>
  );
};

export default CookieActions;
