'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-slate-800 items-center justify-center">
      <h1 className="text-white text-2xl">
        Hello , my name is ilia and i am
        <span> </span>
        <span className="text-red-400">
          <Typewriter
            words={['programer', 'frontend developer', 'gym member', 'men!']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorColor="red"
          />
        </span>
      </h1>
    </div>
  );
}
