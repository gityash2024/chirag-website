const DroneServices = () => {
  const services = [
    {
      title: "High Altitude Drone",
      description: "Perfect for high elevation operations with superior coverage efficiency",
      image: "/images/high-altitude-drone.jpg"
    },
    {
      title: "Large Field Crop Spraying",
      description: "Wide spray boom with precision control for maximum coverage",
      image: "/images/crop-spraying.jpg"
    },
    {
      title: "Orchard and Plantation",
      description: "Specialized drones for orchard spraying and monitoring",
      image: "/images/orchard-drone.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Our Drone Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="h-48 w-full object-cover" src={service.image} alt={service.title} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneServices;
