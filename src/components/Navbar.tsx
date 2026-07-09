export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">Vitality</span>
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
          <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
        </ul>
        <a
          href="#cta"
          className="text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
