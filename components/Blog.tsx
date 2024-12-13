import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "The Future of AI+Data Processing",
    excerpt: "Explore how ExomAI is revolutionizing the AI+Data landscape with our cutting-edge solutions.",
    date: "2024-12-01",
  },
  {
    title: "Optimizing Performance with In-Memory Databases",
    excerpt: "Learn how our in-memory database technology is setting new standards in data processing speed.",
    date: "2024-11-15",
  },
  {
    title: "AI Solutions for Businesses of All Sizes",
    excerpt: "Discover how ExomAI's flexible solutions can benefit companies from startups to enterprises.",
    date: "2024-11-01",
  }
]

export default function Blog() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#020B16]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Latest from Our Blog</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-[#041325] border-[#0066FF]/20">
              <CardHeader>
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-[#0066FF] mb-2">{post.title}</CardTitle>
                <p className="text-gray-300 text-sm mb-2">{post.excerpt}</p>
                <p className="text-gray-400 text-xs">{post.date}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" passHref>
            <Button variant="outline">View All Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

