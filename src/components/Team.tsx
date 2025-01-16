const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: "/placeholder.svg",
  },
  {
    name: "Mike Johnson",
    position: "Lead Developer",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Williams",
    position: "Designer",
    image: "/placeholder.svg",
  },
  {
    name: "Tom Brown",
    position: "Marketing",
    image: "/placeholder.svg",
  },
  {
    name: "Emma Davis",
    position: "Product Manager",
    image: "/placeholder.svg",
  },
  {
    name: "Chris Wilson",
    position: "Developer",
    image: "/placeholder.svg",
  },
  {
    name: "Lisa Anderson",
    position: "UX Designer",
    image: "/placeholder.svg",
  }
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Наша команда</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Профессионалы, которые делают ваши проекты особенными
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-background shadow-lg transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500
                    group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0
                  transition-transform duration-300">
                  <h3 className="text-white font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-white/90">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;