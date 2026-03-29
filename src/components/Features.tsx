import React from 'react';

const features = [
  {
    name: 'Automated Arbitrage',
    description: 'Learn how to snipe Polymarket trades with zero manual intervention using Python scripts and OpenClaw agents.',
  },
  {
    name: 'High-Velocity Wealth',
    description: 'Our methods prioritize speed-to-money, ensuring you see returns within the first 24 hours of execution.',
  },
  {
    name: 'Turnkey Operations',
    description: 'We provide the codebase and standard operating procedures (SOPs). You just plug in your API keys and go.',
  },
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy Faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to automate your income
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stop trading time for money. Our eBook agency blueprint sets up an automated sales funnel that converts 24/7.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    {/* Placeholder for SVG icon */}
                    <div className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
