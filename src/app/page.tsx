export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          AI study workspace for medical students
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Turn medical lectures into flashcards, MCQs, and smart summaries.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Upload your lecture PDF and generate bilingual Arabic/English study
          material designed for medical students — cleaner than Anki and more
          useful for studying than a basic chatbot.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Upload lecture
          </button>

          <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
            View demo
          </button>
        </div>

        <div className="mt-16 grid w-full gap-4 text-left sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Flashcards</h2>
            <p className="mt-3 text-slate-400">
              Generate Anki-style cards from lecture slides automatically.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Medical MCQs</h2>
            <p className="mt-3 text-slate-400">
              Create exam-style questions with explanations and sources.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Arabic + English</h2>
            <p className="mt-3 text-slate-400">
              Explain medical topics in Arabic while keeping key terms in English.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}