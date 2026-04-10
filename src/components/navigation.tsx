"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hasSectionSignal, setHasSectionSignal] = useState(false);

  const syncHash = (sectionId: string | null) => {
    if (typeof window === "undefined" || pathname !== "/") {
      return;
    }

    const baseUrl = `${window.location.pathname}${window.location.search}`;
    const nextUrl = sectionId ? `${baseUrl}#${sectionId}` : baseUrl;
    window.history.replaceState(null, "", nextUrl);
  };

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection(null);
    syncHash(null);
  };

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    fallbackPath: string,
  ) => {
    event.preventDefault();

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
    <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 md:gap-8 bg-canvas/90 backdrop-blur-md border border-ink/10 px-6 md:px-8 py-4 rounded-full blueprint text-[10px] md:text-xs tracking-widest uppercase shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] w-max max-w-[90vw]">
      <Link href="/" onClick={scrollToTop} className="hover:text-accent transition-colors font-bold whitespace-nowrap">
        Sai Subhash Yeniganti
      </Link>
      <div className="w-[1px] h-3 bg-ink/20 hidden md:block"></div>
      <div className="hidden md:flex items-center gap-8">
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
      <div className="w-[1px] h-3 bg-ink/20 hidden md:block"></div>
      <a
        href="/#contact"
        onClick={(event) => scrollToSection(event, "contact", "/#contact")}
        className="group inline-flex items-center gap-2 whitespace-nowrap"
      >
        <span className={`border px-4 py-2 rounded-full transition-all duration-500 group-hover:bg-accent group-hover:text-canvas group-hover:border-accent ${isLetsTalkActive ? "bg-accent text-canvas border-accent" : "border-ink/20"}`}>
          LET'S TALK ↗
        </span>
      </a>
    </nav>
  );
}
