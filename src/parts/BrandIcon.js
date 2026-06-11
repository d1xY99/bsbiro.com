import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function BrandIcon() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-accent-cyan/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={logo}
          alt="BS Biro logo"
          className="relative h-16 w-16 object-contain"
        />
      </div>
      <p className="font-display text-3xl font-bold text-white tracking-tight">
        BS
        <span className="text-gradient"> Biro</span>
      </p>
    </Link>
  );
}
