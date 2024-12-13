import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#010810] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/10 to-[#FF3366]/10 opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="mb-8">
            {console.log('Image path:', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ag0CqeiB48s3rLD7a07hMMIqkv12kp.png')}
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ag0CqeiB48s3rLD7a07hMMIqkv12kp.png"
              alt="EXOM AI" 
              className="h-32 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
            Fusing AI and Analytics at the Speed of Memory
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg mt-4">
            The Only Asian Company Specializing in In-Memory AI+Data Computation
          </p>
          <Button className="bg-[#0066FF] text-white hover:bg-[#0055DD] border border-[#0066FF]/50">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

