export default function Footer() {
  return (
    <footer className="w-full py-6 bg-[#020B16] text-gray-300 border-t border-[#0066FF]/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-4">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ag0CqeiB48s3rLD7a07hMMIqkv12kp.png"
              alt="EXOM AI" 
              className="h-8 w-auto"
            />
            <p>&copy; 2024 eXomAI Limited. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#0066FF]">Privacy Policy</a>
            <a href="#" className="hover:text-[#0066FF]">Terms of Service</a>
            <a href="#" className="hover:text-[#0066FF]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

