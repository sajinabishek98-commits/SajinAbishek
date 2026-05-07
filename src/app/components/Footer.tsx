export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2026 Sajin Abishek. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:sajinabishek98@gmail.com"
              className="text-gray-400 hover:text-[#7dd3fc] transition-colors"
            >
              Email
            </a>
            <a
              href="tel:6379416577"
              className="text-gray-400 hover:text-[#7dd3fc] transition-colors"
            >
              Phone
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
