import { CheckCircle } from 'lucide-react'

export default function Values() {
  const values = [
    "Unmatched Performance Boost: We deliver performance 5x faster than Spark-based solutions and 10x faster than Clickhouse-based solutions, enabling real-time processing, cost efficiency, and smooth interaction experiences.",
    "Multimodal AI+Data Platform: Our proprietary database combines the analytical power of OLAP with advanced vector processing, all within a fully in-memory architecture, delivering high performance for both analytical and AI-driven workloads.",
    "Simplified AI Solution Development: Our low-code options empower enterprises to rapidly deploy AI, swiftly adapt to evolving needs, and accelerate market expansion."
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#020B16]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Our Values</h2>
        <ul className="space-y-4">
          {values.map((value, index) => (
            <li key={index} className="flex items-start space-x-2 bg-[#041325] p-6 rounded-lg border border-[#0066FF]/20">
              <CheckCircle className="w-6 h-6 text-[#0066FF] flex-shrink-0 mt-1" />
              <p className="text-gray-300">{value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

