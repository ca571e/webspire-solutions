import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const clientsData = [
  {
    name: "TechCorp",
    description: "Разработка инновационных IT-решений для бизнеса. Успешно реализовали проект корпоративного портала.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2428&auto=format&fit=crop",
  },
  {
    name: "FinanceHub",
    description: "Ведущая финансовая компания. Создали современную платформу для онлайн-банкинга.",
    logo: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2370&auto=format&fit=crop",
  },
  {
    name: "EduTech",
    description: "Образовательная платформа. Разработали систему онлайн-обучения с интерактивными элементами.",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2370&auto=format&fit=crop",
  }
];

const Clients = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Наши клиенты</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {clientsData.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                    <p className="text-gray-600 text-sm">{client.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;