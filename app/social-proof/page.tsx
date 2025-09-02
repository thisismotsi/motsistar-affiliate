export default function SocialProofPage() {
  const testimonials = [
    {
      name: "Sarah K.",
      feedback:
        "I found exactly what I needed thanks to Motsistar’s curated picks. Honest and reliable!",
    },
    {
      name: "James L.",
      feedback:
        "The recommendations saved me hours of searching. Every product I bought has been top quality.",
    },
    {
      name: "Maya R.",
      feedback:
        "I trust Motsistar because they only promote what they’d actually use. Refreshing honesty online!",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">What People Say</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 shadow-glow"
          >
            <p className="italic">“{t.feedback}”</p>
            <p className="mt-4 font-semibold">— {t.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg">
          Join hundreds of readers who rely on Motsistar for honest reviews and
          smart shopping advice.
        </p>
      </div>
    </div>
  );
}
