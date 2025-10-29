"use client";

import React from 'react';

const OpenCookieSettingsButton: React.FC<{ className?: string }> = ({ className }) => {
  const open = () => {
    try {
      (window as any).displayPreferenceModal && (window as any).displayPreferenceModal();
    } catch {}
  };

  return (
    <button onClick={open} className={className || 'text-sm underline text-gray-700'}>
      Cookie Settings
    </button>
  );
};

export default OpenCookieSettingsButton;
