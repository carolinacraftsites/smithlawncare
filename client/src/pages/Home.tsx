import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="bg-primary-foreground border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container px-4">
          <p>&copy; {new Date().getFullYear()} Smith Lawn and Landscape Maintenance. All rights reserved.</p>
          <p className="mt-2">Proudly serving Asheville, NC since 2010.</p>
        </div>
      </footer>
    </div>
  );
}
