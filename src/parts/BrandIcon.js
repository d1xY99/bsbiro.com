/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable  */

import React from 'react';
import Button from '../elements/Button';

import logo from '../assets/images/logo.png'; 

export default function BrandIcon() {
  return (
    <Button className="" type="link" href="/">
      <span className="flex items-center gap-4">
        <img
          src={logo}
          alt="Logo"
          className="h-[72px] w-[72px] object-contain" 
        />
        <p className="text-theme-light-blue text-4xl font-medium">
          BS
          <span className="text-theme-light-blue"> Biro</span>
        </p>
      </span>
    </Button>
  );
}