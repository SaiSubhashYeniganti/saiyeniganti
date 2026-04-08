export function Footer() {
  return (
    <footer className="border-t border-border mt-24 md:mt-32">
      <div className="mx-auto max-w-[72rem] px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-stone">
              Sai Subhash Yeniganti
            </p>
            <p className="mt-2 text-sm text-stone">
              Product leader. AI-first builder.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/subhashyeniganti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone hover:text-sage"
            >
              LinkedIn
            </a>
            <a
              href="mailto:saisubhash.yeniganti@gmail.com"
              className="text-sm text-stone hover:text-sage"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
