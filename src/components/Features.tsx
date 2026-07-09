const features = [
  { title: '[Feature 1]', description: '[Short description of what this does or why it matters]' },
  { title: '[Feature 2]', description: '[Short description of what this does or why it matters]' },
  { title: '[Feature 3]', description: '[Short description of what this does or why it matters]' },
  { title: '[Feature 4]', description: '[Short description of what this does or why it matters]' },
  { title: '[Feature 5]', description: '[Short description of what this does or why it matters]' },
  { title: '[Feature 6]', description: '[Short description of what this does or why it matters]' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            [Section Headline]
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            [Section sub-copy]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-gray-100 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
