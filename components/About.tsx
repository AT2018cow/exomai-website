export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#020B16]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Our Positioning</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-2 bg-[#041325] p-6 rounded-lg border border-[#0066FF]/20">
            <h3 className="text-xl font-bold text-[#0066FF]">Leading In-Memory AI+Data Innovation</h3>
            <p className="text-gray-300">
              We specialize in multimodal distributed in-memory databases and GPU direct computation technology, redefining performance and efficiency in AI-driven data processing.
            </p>
          </div>
          <div className="space-y-2 bg-[#041325] p-6 rounded-lg border border-[#0066FF]/20">
            <h3 className="text-xl font-bold text-[#0066FF]">Providing High-Performance, Easy-to-Use AI Solutions</h3>
            <p className="text-gray-300">
              We provide flexible AI storage and computation solutions for businesses of all sizes, enabling seamless integration, rapid deployment, and agile responses to business needs across cloud and on-premises environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

