import React from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  },
  {
    name: "HealthCare Plus",
    description: "Медицинский центр. Внедрили систему электронных медицинских карт.",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2370&auto=format&fit=crop",
  },
  {
    name: "RetailPro",
    description: "Сеть магазинов. Разработали систему управления товарными запасами.",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2370&auto=format&fit=crop",
  },
  {
    name: "MediaGroup",
    description: "Медиа-холдинг. Создали платформу для стриминга контента.",
    logo: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2370&auto=format&fit=crop",
  },
  {
    name: "LogisticsPro",
    description: "Логистическая компания. Внедрили систему отслеживания грузов.",
    logo: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2370&auto=format&fit=crop",
  },
  {
    name: "GreenEnergy",
    description: "Компания в сфере возобновляемой энергии. Разработали систему мониторинга.",
    logo: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2370&auto=format&fit=crop",
  }
];

const Clients = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Наши клиенты</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {clientsData.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {client.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
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