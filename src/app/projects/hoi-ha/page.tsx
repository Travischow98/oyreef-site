import Image from "next/image"
import Link from "next/link"

export default function HoiHaProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      {/* Top bar */}
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-900">Project</div>
            <h1 className="text-2xl font-bold">Hoi Ha, Hong Kong (WWF Site)</h1>
          </div>

          <Link
            href="/#projects"
            className="px-4 py-2 rounded-full border hover:bg-white transition"
          >
            ← Back
          </Link>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-8 py-10">
        {/* Hero image */}
        <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
          <div className="relative h-[260px] md:h-[380px]">
            <Image
              src="/hoi-ha.png"
              alt="Hoi Ha site"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            <p className="text-gray-900">
              Controlled restoration zone validating biodiversity uplift using AI-assisted species detection and eDNA
              metabarcoding.
            </p>
          </div>
        </div>

        {/* Content sections */}
        <div className="mt-10 grid gap-6">
          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Problem context</h2>
            <p className="mt-3 text-gray-900 leading-relaxed">
              Hoi Ha is a high-value conservation area where localized stressors (sedimentation, coastal pressure, and
              ecological fragmentation) can reduce reef resilience. This project focuses on controlled intervention and
              scientific validation rather than “blind” deployment.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Deployment method</h2>
            <p className="mt-3 text-gray-900 leading-relaxed">
              ReefLink units are introduced within a defined restoration zone with careful placement to minimize
              disturbance and maximize habitat function. The approach emphasizes modularity, retrieval/maintenance, and
              repeatable positioning for long-term comparison.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Monitoring framework</h2>
            <ul className="mt-3 text-gray-900 leading-relaxed list-disc pl-5 space-y-2">
              <li>Fixed-station imagery (repeatable framing) for before/after comparisons</li>
              <li>AI models for species detection, counts, and size-class estimation</li>
              <li>eDNA metabarcoding to validate cryptic biodiversity changes</li>
              <li>Time-series reporting aligned to ecological recovery indicators</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Expected outcomes</h2>
            <ul className="mt-3 text-gray-900 leading-relaxed list-disc pl-5 space-y-2">
              <li>Quantifiable biodiversity recovery verified by AI + eDNA agreement</li>
              <li>Improved reef-associated fish presence and trophic recruitment signals</li>
              <li>Evidence base for scaling restoration within similar HK coastal sites</li>
              <li>A conservative, science-first deployment template for protected areas</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-900 text-sm">
        © {new Date().getFullYear()} Oyreef. All rights reserved.
      </footer>
    </main>
  )
}