"use client";

import { motion } from "framer-motion";
export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-48 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}>
          <h1 className="text-5xl md:text-8xl tracking-tight leading-[0.9] text-ink mb-16">
            10+ years of<br/>
            <span className="italic text-ink-muted">building</span> things.
          </h1>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.3, duration: 1 } }
        }} className="space-y-32">
          
          <div className="border-t border-ink/10 pt-16 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3">
              <div className="blueprint text-xs text-ink-muted mb-3">2016 — 2019</div>
              <h2 className="text-3xl text-ink">Staff Engineer</h2>
              <div className="text-lg text-ink-muted mt-1">National Instruments</div>
            </div>
            <div className="w-full md:w-2/3 text-lg font-sans text-ink-muted leading-relaxed">
              <p>
                I started by writing code. I spent three years at National Instruments building signal processing algorithms for 4G and 5G test and measurement systems. Companies like Qualcomm and Verizon used what I built to validate their chipsets. It taught me how complex systems actually work under the surface, and that turned out to be the most useful thing I could have learned before moving into product.
              </p>
            </div>
          </div>

          <div className="border-t border-ink/10 pt-16 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3">
              <div className="blueprint text-xs text-ink-muted mb-3">2019 — 2020</div>
              <h2 className="text-3xl text-ink">MBA</h2>
              <div className="text-lg text-ink-muted mt-1">Indian School of Business</div>
            </div>
            <div className="w-full md:w-2/3 text-lg font-sans text-ink-muted leading-relaxed">
              <p>
                After three years of deep engineering, I wanted the business and strategy layer. ISB is ranked Global #12 per Financial Times. This is where I made the shift from engineer to product.
              </p>
            </div>
          </div>

          <div className="border-t border-ink/10 pt-16 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3">
              <div className="blueprint text-xs text-ink-muted mb-3">2020 — 2021</div>
              <h2 className="text-3xl text-ink">Product Manager</h2>
              <div className="text-lg text-ink-muted mt-1">HCL Technologies</div>
            </div>
            <div className="w-full md:w-2/3 text-lg font-sans text-ink-muted leading-relaxed">
              <p>
                My first product role. At HCL, I owned a B2B SaaS platform that managed 9M+ network devices across 10+ countries for customers like AT&amp;T, Vodafone, and Shaw. Enterprise scale and long sales cycles, the kind of environment where you learn to think in systems and stakeholders. It gave me the foundation for everything that came after.
              </p>
            </div>
          </div>

          <div className="border-t border-ink/10 pt-16 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3">
              <div className="blueprint text-xs text-ink-muted mb-3">2022 — 2023</div>
              <h2 className="text-3xl text-ink">Head of Product</h2>
              <div className="text-lg text-ink-muted mt-1">Bulls and Apes Project</div>
            </div>
            <div className="w-full md:w-2/3 text-lg font-sans text-ink-muted leading-relaxed">
              <p>
                Then the opposite of enterprise. Bulls and Apes Project was a US-based blockchain gaming startup. I joined as founding team and built the product division from nothing. I led a 20+ person cross-functional team, designed a gaming ecosystem around 23,000+ digital assets, and shipped Ethereum's first customizable 3D avatar platform. The whole thing did $8M in cumulative revenue. No playbook for any of it.
              </p>
            </div>
          </div>

          <div className="border-t border-ink/10 pt-16 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3">
              <div className="blueprint text-xs text-ink-muted mb-3">2024 — 2026</div>
              <h2 className="text-3xl text-ink">Head of Product</h2>
              <div className="text-lg text-ink-muted mt-1">KEY Difference</div>
            </div>
            <div className="w-full md:w-2/3 text-lg font-sans text-ink-muted leading-relaxed space-y-6">
              <p>
                After doing 0-to-1 for one startup, I did it for 25 at the same time. KEY Difference is a Dubai-based Web3 accelerator and venture studio. I built and ran the entire go-to-market program from scratch: how we select startups, how we support founders, how the accelerator operates. Portfolio startups reached 100K+ users and $10M+ in platform transactions.
              </p>
              <p>
                While there, I noticed nobody in the org was building with AI. So I did it myself as a proof of concept: a news aggregator app, built solo and shipped to the Play Store. That was the start of the solo building.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </main>
  );
}
