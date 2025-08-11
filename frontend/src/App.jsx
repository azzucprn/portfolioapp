import './index.css'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-800">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-24">
        <section id="projects" className="scroll-mt-20">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <p className="mt-2 text-slate-600">Add your projects here.</p>
        </section>

        <section id="contact" className="scroll-mt-20">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-2 text-slate-600">Add your contact details here.</p>
        </section>
      </main>
    </div>
  )
}
