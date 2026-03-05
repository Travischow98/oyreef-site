import Image from "next/image"
import Link from "next/link"

export default function DumagueteProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Top bar */}
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-900">Project</div>
            <h1 className="text-2xl font-bold">Dumaguete, Philippines</h1>
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
          <div className="bg-slate-100 flex items-center justify-center py-10">
            <Image
              src="/dumaguete.png"
              alt="Dumaguete reef site"
              width={600}
              height={400}
              className="rounded-3xl shadow-md object-contain"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            <p className="text-gray-900">
              Reef restoration pilot using phased ReefLink deployment, baseline eDNA surveys, and repeatable 360°
              autonomous monitoring.
            </p>
          </div>
        </div>

        {/* Content sections */}
        <div className="mt-10 grid gap-6">
          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Problem context</h2>
            <p className="mt-3 text-gray-900 leading-relaxed">
              Nearshore reef systems in nutrient-rich waters can experience reduced structural complexity and biodiversity
              due to chronic stressors (sedimentation, eutrophication, and episodic disturbance). This project establishes
              a repeatable baseline and deploys modular habitat structures to accelerate settlement and recovery.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Deployment method</h2>
            <p className="mt-3 text-gray-900 leading-relaxed">
              ReefLink units are deployed in a staged sequence to maximize early biocolonization. Units are conditioned in
              the photic zone to encourage settlement, then positioned to support habitat transfer and benthic substrate
              regeneration. Deployment is designed for scalable replication across similar coastal sites.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Monitoring framework</h2>
            <ul className="mt-3 text-gray-900 leading-relaxed list-disc pl-5 space-y-2">
              <li>Drop-camera transects + diver validation to define baseline communities</li>
              <li>Repeatable 360° imagery at fixed coordinates for time-series comparison</li>
              <li>eDNA metabarcoding to capture cryptic taxa and validate biodiversity signals</li>
              <li>AI-assisted species detection to track abundance and recruitment metrics</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Expected outcomes</h2>
            <ul className="mt-3 text-gray-900 leading-relaxed list-disc pl-5 space-y-2">
              <li>Increased habitat complexity and settlement rates on ReefLink structures</li>
              <li>Measurable biodiversity uplift verified by AI + eDNA cross-validation</li>
              <li>Higher fish presence and juvenile recruitment around restored microhabitats</li>
              <li>A replicable monitoring protocol suitable for scale-out deployments</li>
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