export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white border-b border-gray-100">
      <div className="font-bold text-xl text-gray-900">EbookAgency</div>
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
        <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Get the Book
      </button>
    </header>
  );
}
