export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-indigo-600">GhostInk Agency</div>
        <ul className="flex space-x-6 font-semibold text-gray-600">
          <li><a href="#services" className="hover:text-indigo-600 transition">Services</a></li>
          <li><a href="#portfolio" className="hover:text-indigo-600 transition">Portfolio</a></li>
          <li><a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a></li>
        </ul>
        <a href="#contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          We Write, Design, and Publish Your Next Bestselling Ebook.
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          From concept to Amazon Kindle dominance. Let our expert ghostwriters and cover designers bring your vision to life.
        </p>
        <a href="#contact" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:bg-indigo-700 transition">
          Claim Your Free Consultation
        </a>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border rounded-xl hover:shadow-md transition">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold mb-2">Expert Ghostwriting</h3>
              <p className="text-gray-600">Engaging, well-researched content tailored to your voice and target audience.</p>
            </div>
            <div className="p-8 border rounded-xl hover:shadow-md transition">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Stunning Cover Design</h3>
              <p className="text-gray-600">Eye-catching, high-converting covers optimized for Amazon and Apple Books.</p>
            </div>
            <div className="p-8 border rounded-xl hover:shadow-md transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Publishing &amp; Marketing</h3>
              <p className="text-gray-600">End-to-end formatting, KDP setup, and launch strategies to hit #1.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8 mt-20">
        <p>&copy; 2026 GhostInk Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}