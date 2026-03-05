"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Loader2 } from "lucide-react"

type Status = "idle" | "submitting" | "success" | "error"

export function OyreefLanding() {
  const [status, setStatus] = useState<Status>("idle")
  const [errMsg, setErrMsg] = useState("")
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  })

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <Image src="/logo.png" alt="Oyreef" fill className="object-cover" />
            </div>
            <span className="text-lg font-semibold">Oyreef</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-900">
            <a href="#projects" className="hover:text-emerald-700 transition">
              Projects
            </a>
            <a href="#approach" className="hover:text-emerald-700 transition">
              Approach
            </a>
            <a href="#impact" className="hover:text-emerald-700 transition">
              Impact
            </a>
            <a href="#contact" className="hover:text-emerald-700 transition">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20" aria-label="Hero">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl font-bold leading-tight">
              Reef Restoration +<span className="text-emerald-600"> Autonomous Monitoring</span>
            </h1>

            <p className="mt-6 text-lg text-gray-900">
              Oyreef develops an integrated reef restoration and autonomous monitoring platform built around ReefLink — a
              modular eco-reef structure designed for rapid biocolonization and scalable deployment in degraded
              nutrient-rich waters.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition flex items-center gap-2"
              >
                Contact Us <ArrowRight size={18} />
              </a>

              <a href="#projects" className="px-6 py-3 border rounded-full hover:bg-gray-100 transition">
                View Projects
              </a>
            </div>
          </motion.div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
              alt="Ocean and shoreline"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

     {/* Projects */}
<section id="projects" className="py-20">
  <div className="max-w-6xl mx-auto px-8">
    <div className="bg-white border rounded-3xl p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-10">Active Sites</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <a
          href="/projects/dumaguete"
          className="border rounded-2xl p-6 shadow-sm bg-white block hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold">Dumaguete, Philippines</h3>
          <p className="mt-3 text-gray-900">
            Reef restoration pilot using phased ReefLink deployment, baseline eDNA surveys and repeatable 360° autonomous
            monitoring.
          </p>
          <p className="mt-4 text-sm text-emerald-700 font-medium">View project →</p>
        </a>

        <a
          href="/projects/hoi-ha"
          className="border rounded-2xl p-6 shadow-sm bg-white block hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold">Hoi Ha, Hong Kong (WWF Site)</h3>
          <p className="mt-3 text-gray-900">
            Controlled restoration zone validating biodiversity uplift using AI-assisted species detection and eDNA
            metabarcoding.
          </p>
          <p className="mt-4 text-sm text-emerald-700 font-medium">View project →</p>
        </a>
      </div>
    </div>
  </div>
</section>

{/* Impact Metrics */}
<section id="impact" className="py-20">
  <div className="max-w-6xl mx-auto px-8">
    <div className="bg-white border rounded-3xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold">Impact Metrics</h2>
          <p className="mt-2 text-gray-900 max-w-2xl">
            Our value is measurable. Oyreef combines reef restoration with repeatable monitoring to quantify ecological uplift.
          </p>
        </div>

        <div className="text-sm text-gray-900">
          *Indicative metrics — tuned per site baseline and deployment design.
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Carbon */}
        <div className="border rounded-2xl p-6 bg-slate-50 shadow-sm">
          <div className="text-sm text-gray-900">Carbon Accumulation Potential</div>
          <div className="mt-3 flex items-end gap-2">
            <div className="text-3xl font-bold">+12–35%</div>
            <div className="text-sm text-gray-900 mb-1">yr</div>
          </div>
          <p className="mt-3 text-gray-900 text-sm leading-relaxed">
            Increased benthic biomass and carbonate accretion via rapid biocolonization on ReefLink surfaces.
          </p>
        </div>

        {/* Fishery */}
        <div className="border rounded-2xl p-6 bg-slate-50 shadow-sm">
          <div className="text-sm text-gray-900">Fishery Enhancement</div>
          <div className="mt-3 flex items-end gap-2">
            <div className="text-3xl font-bold">1.4–2.1×</div>
            <div className="text-sm text-gray-900 mb-1">CPUE</div>
          </div>
          <p className="mt-3 text-gray-900 text-sm leading-relaxed">
            Habitat complexity increases shelter and recruitment, supporting local fish assemblages and yield proxies.
          </p>
        </div>

        {/* Biodiversity */}
        <div className="border rounded-2xl p-6 bg-slate-50 shadow-sm">
          <div className="text-sm text-gray-900">Biodiversity Recovery</div>
          <div className="mt-3 flex items-end gap-2">
            <div className="text-3xl font-bold">+18–45%</div>
            <div className="text-sm text-gray-900 mb-1">richness</div>
          </div>
          <p className="mt-3 text-gray-900 text-sm leading-relaxed">
            Time-series monitoring tracks taxa return, trophic recruitment, and community stabilization.
          </p>
        </div>

        {/* AI + eDNA */}
        <div className="border rounded-2xl p-6 bg-slate-50 shadow-sm">
          <div className="text-sm text-gray-900">AI + eDNA Validation</div>
          <div className="mt-3 flex items-end gap-2">
            <div className="text-3xl font-bold">≥90%</div>
            <div className="text-sm text-gray-900 mb-1">agreement</div>
          </div>
          <p className="mt-3 text-gray-900 text-sm leading-relaxed">
            Cross-validation between AI vision counts and eDNA detections to reduce false positives/negatives.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Technical Approach */}
      <section id="approach" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-white border rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-10">Technical Approach</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-2xl p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold">Site Selection & Baseline Characterization</h3>
                <p className="mt-3 text-gray-900 leading-relaxed">
                  Candidate sites will be screened using depth, hydrodynamics, sedimentation profiles, and aquaculture
                  pressure. Drop-camera transects and diver validation will define baseline communities, followed by eDNA
                  sampling to characterize cryptic taxa and microfaunal diversity.
                </p>
              </div>

              <div className="border rounded-2xl p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold">Two-Phase Deployment Strategy</h3>
                <p className="mt-3 text-gray-900 leading-relaxed">
                  Reef units are first cultivated in the photic zone (0–5 m), accelerating settlement and early
                  succession via turbulence and larval flux. Once biomass accumulates, units will be lowered to the
                  benthos to trigger habitat transfer and substrate regeneration. Time-series surveys track recolonization,
                  trophic recruitment, sediment interactions, and structural persistence.
                </p>
              </div>

              <div className="border rounded-2xl p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold">Autonomous Monitoring — Ocean Hummingbird System</h3>
                <p className="mt-3 text-gray-900 leading-relaxed">
                  A floating grid-based robotic camera carrier moves along an XY-grid platform on the surface and lowers a
                  360° camera at predefined coordinates for repeatable, non-fouling observation. The system is modular and
                  scalable, enabling broader coverage by increasing grid span or adding units.
                </p>
              </div>

              <div className="border rounded-2xl p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold">AI-eDNA Monitoring Pipeline</h3>
                <p className="mt-3 text-gray-900 leading-relaxed">
                  All imagery feeds into custom AI models for species detection, abundance estimation, size-class
                  distribution, and behavior metrics. eDNA metabarcoding detects cryptic taxa and validates biodiversity
                  uplift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-white border rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">Impact Metrics</h2>
                <p className="mt-3 text-gray-900 max-w-2xl leading-relaxed">
                  Oyreef’s value is measurable. We track ecological recovery and validate outcomes using repeatable
                  monitoring + AI vision + eDNA.
                </p>
              </div>

              <div className="text-sm text-gray-900">
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Metrics shown are initial targets (placeholder)
                </span>
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border p-6 bg-slate-50">
                <div className="text-sm font-medium text-gray-900">Carbon Accumulation Potential</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="text-4xl font-bold text-gray-900">+18%</div>
                  <div className="text-sm text-gray-900">YoY</div>
                </div>
                <p className="mt-3 text-sm text-gray-900 leading-relaxed">
                  Estimated increase in benthic carbon retention via habitat complexity + biogenic accretion.
                </p>
              </div>

              <div className="rounded-2xl border p-6 bg-slate-50">
                <div className="text-sm font-medium text-gray-900">Fishery Enhancement</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="text-4xl font-bold text-gray-900">2.4×</div>
                  <div className="text-sm text-gray-900">biomass</div>
                </div>
                <p className="mt-3 text-sm text-gray-900 leading-relaxed">
                  Expected uplift in local fish biomass from shelter + feeding habitat creation.
                </p>
              </div>

              <div className="rounded-2xl border p-6 bg-slate-50">
                <div className="text-sm font-medium text-gray-900">Biodiversity Recovery</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="text-4xl font-bold text-gray-900">+35</div>
                  <div className="text-sm text-gray-900">species</div>
                </div>
                <p className="mt-3 text-sm text-gray-900 leading-relaxed">
                  Increase in detected taxa across time-series surveys (macrofauna + cryptic taxa).
                </p>
              </div>

              <div className="rounded-2xl border p-6 bg-slate-50">
                <div className="text-sm font-medium text-gray-900">AI + eDNA Validation</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="text-4xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-900">coverage</div>
                </div>
                <p className="mt-3 text-sm text-gray-900 leading-relaxed">
                  Multi-sensor validation: 360° imagery + species detection + eDNA metabarcoding.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              <p className="text-xs text-gray-900">
                Note: Replace placeholders with measured baselines after the first deployment cycle.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition"
              >
                Ask for a pilot proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-white border rounded-3xl p-8 shadow-sm grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="mt-4 text-gray-900 leading-relaxed">
                Tell us about your site, partnership interest, or deployment needs. We’ll reply within 1–2 business days.
              </p>

              <div className="mt-8 space-y-3 text-gray-900">
                <div>
                  <span className="font-semibold">Email:</span> smartfishery.hk@gmail.com
                </div>
                <div>
                  <span className="font-semibold">Locations:</span> Hong Kong • Philippines
                </div>
              </div>

              <div className="mt-8">
                <a href="#top" className="text-emerald-700 hover:text-emerald-800 underline underline-offset-4">
                  Back to top
                </a>
              </div>
            </div>

            {/* Form Card (submits to your Next.js API: /api/contact) */}
            <div className="border rounded-2xl p-6 shadow-sm bg-slate-50 relative overflow-hidden">
              {status !== "success" ? (
                <form
                  className="grid gap-4"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setErrMsg("")
                    setStatus("submitting")

                    try {
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(fields),
                      })
                      const data = await res.json()

                      if (!data?.ok) {
                        setStatus("error")
                        setErrMsg(data?.error || `Submit failed (status ${data?.status || res.status})`)
                        return
                      }

                      setStatus("success")
                      setFields({ name: "", email: "", message: "" })
                    } catch (err: any) {
                      setStatus("error")
                      setErrMsg(err?.message || "Submit failed")
                    }
                  }}
                >
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input
                      className="mt-1 w-full rounded-xl border px-3 py-2"
                      placeholder="Your name"
                      required
                      value={fields.name}
                      disabled={status === "submitting"}
                      onChange={(e) => setFields((s) => ({ ...s, name: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-xl border px-3 py-2"
                      placeholder="you@email.com"
                      required
                      value={fields.email}
                      disabled={status === "submitting"}
                      onChange={(e) => setFields((s) => ({ ...s, email: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      className="mt-1 w-full rounded-xl border px-3 py-2 min-h-[120px]"
                      placeholder="How can we help?"
                      required
                      value={fields.message}
                      disabled={status === "submitting"}
                      onChange={(e) => setFields((s) => ({ ...s, message: e.target.value }))}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {status === "error" && errMsg && <p className="text-sm text-red-600">{errMsg}</p>}
                </form>
              ) : (
                <div className="min-h-[340px] flex flex-col items-center justify-center text-center">
                  <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">
                    ✅
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">Thanks — we got it.</h3>
                  <p className="mt-2 text-gray-900 max-w-sm">We’ll reply within 1–2 business days.</p>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle")
                      setErrMsg("")
                    }}
                    className="mt-6 px-6 py-3 rounded-full border hover:bg-white transition"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-900 text-sm">
        © {new Date().getFullYear()} Oyreef. All rights reserved.
      </footer>
    </div>
  )
}