export default function Footer() {
  return (
    <footer className="py-12 border-t border-brand-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="/" className="font-serif text-xl font-bold text-brand-heading tracking-tight">
              Make It <span className="text-brand-accent-hover">Shine</span>
            </a>
            <p className="mt-2 text-sm text-brand-text">
              Premium interior and furniture cleaning services.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-brand-accent-hover transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent-hover transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-accent-hover transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-brand-text">
            © {new Date().getFullYear()} Make It Shine. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
