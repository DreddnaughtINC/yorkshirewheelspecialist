"use client";

import React, { useEffect, useState } from 'react';
import { X, Check } from 'lucide-react';

const CookiePreferences: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState<boolean>(() => {
    try {
      return localStorage.getItem('cookies_analytics') === 'true';
    } catch {
      return false;
    }
  });
  const [marketing, setMarketing] = useState<boolean>(() => {
    try {
      return localStorage.getItem('cookies_marketing') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // expose a global helper so other scripts can open the modal
    (window as any).displayPreferenceModal = () => setOpen(true);
    return () => {
      try {
        // clean up only if it's the function we added
        if ((window as any).displayPreferenceModal) delete (window as any).displayPreferenceModal;
      } catch {}
    };
  }, []);

  const save = () => {
    try {
      localStorage.setItem('cookies_analytics', analytics ? 'true' : 'false');
      localStorage.setItem('cookies_marketing', marketing ? 'true' : 'false');
    } catch {}
    setOpen(false);
    // optionally you could fire analytics enable/disable logic here
    window.location.reload();
  };

  const acceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    try {
      localStorage.setItem('cookies_analytics', 'true');
      localStorage.setItem('cookies_marketing', 'true');
    } catch {}
    setOpen(false);
    window.location.reload();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">Cookie preferences</h3>
            <p className="text-sm text-gray-600 mt-1">Control which cookies we use on this site. You can change these at any time.</p>
          </div>
          <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setOpen(false)} aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div>
              <div className="font-medium">Essential cookies</div>
              <div className="text-sm text-gray-600">Necessary for site functionality and security. Always active.</div>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center h-8 w-16 rounded-full bg-gray-100 text-xs">Enabled</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div>
              <div className="font-medium">Analytics cookies</div>
              <div className="text-sm text-gray-600">Help us improve the site (e.g., Google Analytics).</div>
            </div>
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="h-4 w-4" />
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div>
              <div className="font-medium">Marketing cookies</div>
              <div className="text-sm text-gray-600">Used to show relevant offers or ads.</div>
            </div>
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="h-4 w-4" />
            </label>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button className="px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200" onClick={() => setOpen(false)}>Cancel</button>
          <button className="px-4 py-2 rounded-md text-sm bg-yellow-400 text-black hover:bg-yellow-300" onClick={acceptAll}>Accept all</button>
          <button className="px-4 py-2 rounded-md text-sm bg-green-600 text-white hover:bg-green-700" onClick={save}><Check className="w-4 h-4 mr-2 inline-block" /> Save preferences</button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;
