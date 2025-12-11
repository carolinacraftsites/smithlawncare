import { BadgeCheck, Clock, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <BadgeCheck className="mr-2 h-4 w-4" />
              Established 2010
            </div>
            
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl font-serif">
              A Decade of Excellence in Asheville
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Smith Lawn and Landscape Maintenance was founded by Chris Smith in 2010 with a simple mission: to provide high-quality, reliable landscape services to the Asheville community.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a passion for the outdoors has grown into a trusted local business known for our attention to detail and professional approach. Whether it's weekly maintenance or seasonal cleanups, we treat every property as if it were our own.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col gap-2 rounded-lg border p-4 bg-muted/20">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="font-semibold">Local & Trusted</span>
                <span className="text-sm text-muted-foreground">Proudly serving Asheville, NC and surrounding areas.</span>
              </div>
              <div className="flex flex-col gap-2 rounded-lg border p-4 bg-muted/20">
                <Clock className="h-6 w-6 text-primary" />
                <span className="font-semibold">Reliable Service</span>
                <span className="text-sm text-muted-foreground">Mon - Sun: 7am - 4pm<br/>Consistently on time.</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl bg-muted">
             {/* Abstract pattern or placeholder for owner photo if we had one, using a generated nature shot for now */}
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
               {/* Using a pattern or texture here would be nice, but simple is okay for now */}
               <div className="text-center p-8">
                 <h3 className="text-2xl font-serif font-bold text-primary mb-2">Chris Smith</h3>
                 <p className="text-muted-foreground">Owner & Operator</p>
                 <div className="mt-8 h-1 w-24 bg-accent mx-auto rounded-full" />
                 <p className="mt-8 text-xl italic text-foreground/80 font-serif">
                   "We don't just cut grass; we care for your home's exterior environment."
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
