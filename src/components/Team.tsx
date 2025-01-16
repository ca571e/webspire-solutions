const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: "/placeholder.svg",
    color: "bg-primary"
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: "/placeholder.svg",
    color: "bg-background"
  },
  {
    name: "Mike Johnson",
    position: "Lead Developer",
    image: "/placeholder.svg",
    color: "bg-background"
  },
  {
    name: "Sarah Williams",
    position: "Designer",
    image: "/placeholder.svg",
    color: "bg-primary"
  },
  {
    name: "Tom Brown",
    position: "Marketing",
    image: "/placeholder.svg",
    color: "bg-primary"
  },
  {
    name: "Emma Davis",
    position: "Product Manager",
    image: "/placeholder.svg",
    color: "bg-background"
  },
  {
    name: "Chris Wilson",
    position: "Developer",
    image: "/placeholder.svg",
    color: "bg-background"
  },
  {
    name: "Lisa Anderson",
    position: "UX Designer",
    image: "/placeholder.svg",
    color: "bg-primary"
  }
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Наша команда</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto gap-0">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`group relative aspect-square ${member.color} p-4 transition-all duration-300
                hover:scale-105 hover:z-10 hover:shadow-xl`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300
                        group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                      <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                      <p className="text-gray-200 text-sm">{member.position}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-full w-full flex flex-col justify-center items-center text-center p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary
                    transition-colors duration-300">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;