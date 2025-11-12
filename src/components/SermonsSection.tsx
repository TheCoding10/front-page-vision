import SermonCard from "./SermonCard";
import sermon1 from "@/assets/sermon-1.jpg";
import sermon2 from "@/assets/sermon-2.jpg";

const SermonsSection = () => {
  const sermons = [
    {
      id: 1,
      title: "the pressure point",
      image: sermon1,
    },
    {
      id: 2,
      title: "Hidden BENEFITS",
      image: sermon2,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            LATEST SERMONS
          </h2>
          <p className="text-muted-foreground">
            Tell us in the comments<br />
            how the sermon impacted you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon) => (
            <SermonCard 
              key={sermon.id}
              title={sermon.title}
              image={sermon.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SermonsSection;
