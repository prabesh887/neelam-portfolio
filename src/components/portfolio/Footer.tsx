import { Terminal, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between items-center">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-lg">Neelam G.</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Senior Full Stack Engineer</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground text-xs sm:text-sm order-3 sm:order-2">
            <p>© {new Date().getFullYear()} Neelam G. All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-glow-rose fill-glow-rose" /> and passion
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-4 sm:gap-6 order-2 sm:order-3">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
