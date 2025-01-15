import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const clientsData = [
  {
    name: "TBank",
    description: "Финансовые решения для бизнеса и частных лиц. Услуги кредитования, инвестиций и страхования.",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    name: "Sber",
    description: "Лидер финансовых технологий в России. Экосистема сервисов для комфортной жизни.",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  // ... остальные клиенты
];

const Clients = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Наши клиенты</h2>
        <Carousel>
          <CarouselContent>
            {clientsData.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <div className="relative group">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <div className="p-4 text-white">
                      <p className="font-bold">{client.name}</p>
                      <p className="text-sm mt-2">{client.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;