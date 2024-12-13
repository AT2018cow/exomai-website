export default function MarketPotential() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#041325] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/10 to-[#FF3366]/10 opacity-50" />
      <div className="container relative px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Market Potential</h2>
        <div className="bg-[#020B16] p-8 rounded-lg border border-[#0066FF]/20">
          <p className="text-xl text-center text-gray-300">
            The AI market in Asia is projected to grow at a CAGR of 28.58% from 2024 to 2030, reaching USD 298 billion by 2030.
          </p>
          <p className="text-sm text-center mt-4 text-[#0066FF]">
            Source: www.statista.com/outlook/tmo/artificial-intelligence/asia
          </p>
        </div>
      </div>
    </section>
  )
}

