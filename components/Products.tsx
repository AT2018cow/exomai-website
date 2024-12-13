import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Products() {
  const products = [
    {
      name: "ExomMind",
      description: "A distributed in-memory database integrating OLAP analytics and vector data processing, enhanced with built-in large language model capabilities."
    },
    {
      name: "ExomDirect",
      description: "An acceleration card that enables a direct fastpath between GPU, memory, and storage for optimized AI performance."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#041325]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Our Core Products</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product, index) => (
            <Card key={index} className="bg-[#020B16] border-[#0066FF]/20">
              <CardHeader>
                <CardTitle className="text-[#0066FF]">{product.name}<sup className="text-xs ml-1">TM</sup></CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

