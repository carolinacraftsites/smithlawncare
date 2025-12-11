import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12">
            <div className="max-w-3xl animate-in slide-in-from-bottom-5 fade-in duration-700">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                Ready to transform your lawn? Contact us today for a consultation.
                We respond quickly to all inquiries.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
              {/* Phone */}
              <div className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 duration-300">
                <div className="rounded-full bg-white/10 p-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Phone className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl font-serif">Phone</h3>
                  <a href="tel:8286748587" className="block text-primary-foreground/80 hover:text-white transition-colors text-lg">
                    (828) 674-8587
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 duration-300">
                <div className="rounded-full bg-white/10 p-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl font-serif">Email</h3>
                  <a href="mailto:Smithlawncare71@gmail.com" className="block text-primary-foreground/80 hover:text-white transition-colors text-lg break-all">
                    Smithlawncare71@gmail.com
                  </a>
                </div>
              </div>

               {/* Hours */}
              <div className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 duration-300">
                <div className="rounded-full bg-white/10 p-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Clock className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl font-serif">Business Hours</h3>
                  <p className="text-primary-foreground/80 text-lg">
                    Daily: 7am - 4pm
                  </p>
                </div>
              </div>

               {/* Location */}
              <div className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 duration-300">
                <div className="rounded-full bg-white/10 p-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <MapPin className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl font-serif">Location</h3>
                  <p className="text-primary-foreground/80 text-lg">
                    Asheville, NC
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
