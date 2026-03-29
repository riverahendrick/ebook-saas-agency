import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          The 24-Hour AI Wealth Engine
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Unlock the secrets of digital wealth generation with our premium eBook. 
          Learn how to leverage AI, Polymarket, and automated systems to build 
          a robust income stream in record time.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#purchase"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get the Blueprint Now
          </a>
          <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
