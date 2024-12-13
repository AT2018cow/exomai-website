import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Team() {
  const team = [
    {
      name: "Emily Yi",
      role: "Visionary leader in AI business growth",
      description: "Blending strategic expertise with technical proficiency",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "Ray Huetter",
      role: "Pioneer in distributed in-memory AI+Data",
      description: "With breakthrough patents and leadership of a world-class R&D team",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "Vincent Lai",
      role: "Expert in global AI adoption and marketing",
      description: "With a proven record of driving market expansion",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "Sean Song",
      role: "Expert in AI infrastructure and cloud-native platforms",
      description: "Experience as the leading architect behind several world's largest projects",
      image: "/placeholder.svg?height=100&width=100"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Team</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {team.map((member, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

