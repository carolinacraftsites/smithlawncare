import { Card } from "@/components/ui/card";
import drainageDitch from "@assets/drainageditch.png";
import garden from "@assets/garden.png";
import hedgePruning from "@assets/hedgepruning.png";
import snowPlowing from "@assets/snowplowing.png";
import snowPlowing2 from "@assets/snowplowing2.png";
import treePlanting from "@assets/treeplanting.png";
import yardMaintenance from "@assets/yardmaintenece.png";

export function Gallery() {
  const images = [
    {
      src: drainageDitch,
      alt: "Drainage Ditch Installation",
      title: "Drainage Solutions",
      span: "row-span-2",
      objectPosition: "object-center"
    },
    {
      src: garden,
      alt: "Garden Maintenance",
      title: "Garden Care",
      span: "row-span-1",
      objectPosition: "object-[center_65%]"
    },
    {
      src: hedgePruning,
      alt: "Hedge Pruning",
      title: "Hedge Pruning",
      span: "row-span-2",
      objectPosition: "object-center"
    },
    {
      src: snowPlowing,
      alt: "Snow Plowing Service",
      title: "Snow Plowing",
      span: "row-span-2",
      objectPosition: "object-center"
    },
    {
      src: snowPlowing2,
      alt: "Snow Plowing",
      title: "Winter Services",
      span: "row-span-1",
      objectPosition: "object-[center_60%]"
    },
    {
      src: treePlanting,
      alt: "Tree Planting",
      title: "Tree Planting",
      span: "row-span-2",
      objectPosition: "object-center"
    },
    {
      src: yardMaintenance,
      alt: "Yard Maintenance",
      title: "Yard Maintenance",
      span: "row-span-1",
      objectPosition: "object-center"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent projects and see the quality work we deliver to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Card
              key={index}
              className={`overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow w-full ${image.span}`}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${image.objectPosition}`}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
