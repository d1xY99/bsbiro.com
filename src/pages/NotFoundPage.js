import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="relative flex flex-col w-full h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-accent-cyan/10 blur-3xl animate-pulse-glow" />

      <h1 className="relative font-display text-[8rem] sm:text-[12rem] font-bold leading-none text-gradient">
        404
      </h1>
      <p className="relative text-slate-400 text-xl text-center mb-10">
        Stranica koju tražite ne postoji.
      </p>
      <Link to="/" className="relative btn-primary">
        Nazad na početnu
      </Link>
    </div>
  );
}
