import React from 'react';
import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Root() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-200">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
