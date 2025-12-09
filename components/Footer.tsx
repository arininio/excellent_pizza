export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center font-body text-white/60">
          <p>&copy; {new Date().getFullYear()} Excellent Pizza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

