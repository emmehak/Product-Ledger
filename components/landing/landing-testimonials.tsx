'use client'

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LandingTestimonials() {
  return (
    <motion.section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don&apos;t just take our word for it. Here&apos;s what businesses using Product Ledger have to say.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "John Doe",
              title: "CEO, TechCorp",
              initials: "JD",
              quote:
                "Product Ledger has transformed how we manage our finances. The overdue management feature alone has saved us thousands.",
            },
            {
              name: "Jane Smith",
              title: "CFO, Retail Solutions",
              initials: "JS",
              quote:
                "The real-time data management has been a game-changer for our inventory tracking. We always know exactly what we have in stock.",
            },
            {
              name: "Robert Johnson",
              title: "Owner, Johnson Manufacturing",
              initials: "RJ",
              quote:
                "As a small business owner, I needed something simple yet powerful. Product Ledger is exactly that - easy to use but with all the features I need.",
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 hover:bg-background/80 hover:border-primary/20 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="transition-transform duration-300 group-hover:scale-110">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="transition-colors duration-300 group-hover:text-primary/70">
                      {testimonial.title}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                &quot;{testimonial.quote}&quot;
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
