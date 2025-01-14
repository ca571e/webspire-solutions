const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: "/placeholder.svg"
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: "/placeholder.svg"
  },
  {
    name: "Mike Johnson",
    position: "Lead Developer",
    image: "/placeholder.svg"
  },
  {
    name: "Sarah Williams",
    position: "Designer",
    image: "/placeholder.svg"
  },
  {
    name: "Tom Brown",
    position: "Marketing",
    image: "/placeholder.svg"
  },
  {
    name: "Emma Davis",
    position: "Product Manager",
    image: "/placeholder.svg"
  },
  {
    name: "Chris Wilson",
    position: "Developer",
    image: "/placeholder.svg"
  },
  {
    name: "Lisa Anderson",
    position: "UX Designer",
    image: "/placeholder.svg"
  }
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Наша команда</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg transition-transform hover:scale-105"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;