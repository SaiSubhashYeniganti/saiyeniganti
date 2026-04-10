"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hasSectionSignal, setHasSectionSignal] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const syncHash = (sectionId: string | null) => {
    if (typeof window === "undefined" || pathname !== "/") {
      return;
    }

    const baseUrl = `${window.location.pathname}${window.location.search}`;
    const nextUrl = sectionId ? `${baseUrl}#${sectionId}` : baseUrl;
    window.history.replaceState(null, "", nextUrl);
  };

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      closeMenu();
      return;
    }
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection(null);
    syncHash(null);
    closeMenu();
  };

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    fallbackPath: string,
  ) => {
    event.preventDefault();
    closeMenu();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      syncHash(sectionId);
      return;
    }

    router.push(fallbackPath);
  };

  useEffect(() => {
    // Only run IntersectionObserver on the homepage where the sections exist
    if (pathname !== "/") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setActiveSection(null);
      setHasSectionSignal(false);
      return;
    }

    const sections = ["builds", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        setHasSectionSignal(true);
        setActiveSection((prevActive) => {
          let nextActive = prevActive;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              nextActive = entry.target.id;
            } else if (nextActive === entry.target.id) {
              nextActive = null;
            }
          });
          return nextActive;
        });
      },
      {
        // Trigger when the section takes up at least 30% of the viewport,
        // or when it passes the middle of the screen.
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0,
      }
    );

    // Give the DOM a tiny bit of time to render the elements if coming from another route
    const timeoutId = setTimeout(() => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/" || !hasSectionSignal) {
      return;
    }
    syncHash(activeSection);
  }, [activeSection, hasSectionSignal, pathname]);

  // Determine active states
  const isSoloBuildsActive = 
    pathname.startsWith("/builds") || (pathname === "/" && activeSection === "builds");
  
  const isCareerArcActive = pathname === "/experience";
  
  const isLetsTalkActive = pathname === "/" && activeSection === "contact";

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-12 left-1/2 -translate-x-1/2 z-50 items-center gap-6 md:gap-8 bg-canvas/90 backdrop-blur-md border border-ink/10 px-6 md:px-8 py-4 rounded-full blueprint text-[10px] md:text-xs tracking-widest uppercase shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] w-max max-w-[90vw]">
        <Link href="/" onClick={scrollToTop} className="hover:text-accent transition-colors font-bold whitespace-nowrap">
          Sai Subhash Yeniganti
        </Link>
        <div className="w-[1px] h-3 bg-ink/20"></div>
        <div className="flex items-center gap-8">
          <Link 
            href="/#builds" 
            onClick={(event) => scrollToSection(event, "builds", "/#builds")}
            className={`transition-colors ${isSoloBuildsActive ? "text-accent" : "hover:text-accent"}`}
          >
            Solo Builds
          </Link>
          <Link 
            href="/experience" 
            className={`transition-colors ${isCareerArcActive ? "text-accent" : "hover:text-accent"}`}
          >
            Career Arc
          </Link>
        </div>
        <div className="w-[1px] h-3 bg-ink/20"></div>
        <Link
          href="/#contact"
          onClick={(event) => scrollToSection(event, "contact", "/#contact")}
          className="group inline-flex items-center gap-2 whitespace-nowrap"
        >
          <span className={`border px-4 py-2 rounded-full transition-all duration-500 group-hover:bg-accent group-hover:text-canvas group-hover:border-accent ${isLetsTalkActive ? "bg-accent text-canvas border-accent" : "border-ink/20"}`}>
            LET&apos;S TALK ↗
          </span>
        </Link>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className="flex md:hidden fixed top-0 left-0 right-0 z-[60] items-center justify-between px-6 py-6 bg-gradient-to-b from-canvas/90 to-transparent backdrop-blur-sm pointer-events-auto">
        <Link href="/" onClick={scrollToTop} className="blueprint text-[10px] tracking-widest uppercase font-bold text-ink">
          Sai Subhash Yeniganti
        </Link>
        <button 
          onClick={toggleMenu}
          className="p-2 -mr-2 flex flex-col justify-center gap-[5px] w-10 h-10 group"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`w-6 h-[1.5px] bg-ink transition-transform duration-500 origin-right ${isMenuOpen ? '-rotate-45 -translate-y-[2px]' : 'group-hover:w-full'}`}></span>
          <span className={`w-4 h-[1.5px] bg-ink transition-all duration-500 origin-right ml-auto ${isMenuOpen ? 'rotate-45 translate-y-[2px] w-6' : 'group-hover:w-full'}`}></span>
        </button>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div 
        className={`fixed inset-0 z-[55] bg-canvas/95 backdrop-blur-xl flex flex-col justify-center px-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex flex-col gap-10">
          <Link 
            href="/" 
            onClick={scrollToTop}
            className={`text-4xl tracking-tight transition-all duration-500 delay-100 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Home.
          </Link>
          <Link 
            href="/#builds" 
            onClick={(event) => scrollToSection(event, "builds", "/#builds")}
            className={`text-4xl tracking-tight transition-all duration-500 delay-200 flex items-center gap-4 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isSoloBuildsActive ? "text-accent" : ""}`}
          >
            Solo Builds.
          </Link>
          <Link 
            href="/experience" 
            onClick={closeMenu}
            className={`text-4xl tracking-tight transition-all duration-500 delay-300 flex items-center gap-4 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isCareerArcActive ? "text-accent" : ""}`}
          >
            Career Arc.
          </Link>
          <div className={`h-[1px] w-12 bg-ink/10 my-2 transition-all duration-500 delay-400 ${isMenuOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} origin-left`}></div>
          <Link
            href="/#contact"
            onClick={(event) => scrollToSection(event, "contact", "/#contact")}
            className={`text-4xl tracking-tight transition-all duration-500 delay-500 flex items-center gap-4 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isLetsTalkActive ? "text-accent" : ""}`}
          >
            Let&apos;s Talk ↗
          </Link>
        </div>
      </div>
    </>
  );
}
