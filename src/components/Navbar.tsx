import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Company Logo / Name */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-primary tracking-tight">
            Zeroots <span className="text-accent">Technology</span>
          </span>
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-textSecondary">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/vahan-vitals" className="hover:text-primary transition-colors">Vahan Vitals</Link>
          <Link href="/india-on-wheels" className="hover:text-primary transition-colors">India on Wheels</Link>
        </div>

        {/* User Portal / Login Button */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-bold text-primary hover:text-accent transition-colors">
            Login
          </Link>
          <Link href="/sponsors" className="hidden md:block bg-primary text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-secondary transition-colors">
            Partner With Us
          </Link>
        </div>

      </div>
    </nav>
  );
}