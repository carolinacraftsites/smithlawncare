import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Leaf, Snowflake, Shovel, Trees, Scissors } from "lucide-react";
import mowingImg from "@assets/generated_images/professional_lawn_mowing.png";
import mulchingImg from "@assets/generated_images/mulching_and_gardening.png";
import snowImg from "@assets/generated_images/snow_removal_service.png";

const services = [
  {
    title: "Weekly Maintenance",
    description: "Our most popular service. Regular mowing, trimming, and edging to keep your property looking pristine all season.",
    icon: Scissors,
    image: mowingImg,
    featured: true,
  },
  {
    title: "Mulching & Planting",
    description: "Fresh mulch installation, pine needles, and small landscape planting to enhance your garden beds.",
    icon: Shovel,
    image: mulchingImg,
  },
  {
    title: "Snow Removal",
    description: "Reliable snow clearing for driveways and walkways during winter months to keep you safe.",
    icon: Snowflake,
    image: snowImg,
  },
  {
    title: "Lawn Treatments",
    description: "Professional fertilization, aeration, and liquid lawn treatments for healthy, green grass.",
    icon: Leaf,
  },
  {
    title: "Tree & Shrub Care",
    description: "Expert trimming, removal, and replacement of shrubs and small trees.",
    icon: Trees,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Comprehensive landscape solutions tailored to your property's needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`overflow-hidden border-none shadow-md transition-all hover:shadow-xl ${service.featured ? 'ring-2 ring-primary' : ''}`}>
              {service.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
          
          {/* List of other services card */}
          <Card className="flex flex-col justify-center border-none bg-primary text-primary-foreground shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">More Services</CardTitle>
              <CardDescription className="text-primary-foreground/80">We also offer:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3">
                {["Aeration", "Pine Needles", "Fertilization", "Shrub Removal"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
