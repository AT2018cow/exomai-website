import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActionPlan() {
  const plans = [
    {
      title: "Technical Iteration",
      description: "Optimize ExomMind database capabilities and ExomDirect GPU direct fastpath technology."
    },
    {
      title: "Market Expansion",
      description: "Focus on expanding into Southeast Asia and the Middle East, targeting early adopters."
    },
    {
      title: "Brand Building",
      description: "Enhance brand awareness through successful case studies and marketing campaigns."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Action Plan</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{plan.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

