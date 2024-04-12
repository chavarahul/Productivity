'use client'
import React, { useState, useEffect } from 'react';
import MainPage from './components/Mainpage';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Tech from './components/Tech';
import { motion } from 'framer-motion';
import Cursor from './components/Cursor';
export default function Home() {

  return (
    <>
      <Navbar />
      <main className="relative h-screen w-screen overflow-hidden">
          <Preloader />
      </main>
    </>
  );
}
