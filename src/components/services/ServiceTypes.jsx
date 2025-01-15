const ServiceTypes = () => {
  const services = [
    {
      title: "Monitoring, Mapping, and Surveying",
      description: [
        "Enterprise-level GIS features",
        "Precise data for vegetation health and yield",
        "RTK-GPS available for precision in mapping"
      ],
      image: "/images/monitoring.jpg"
    },
    {
      title: "Seeding and Fertilizer",
      description: [
        "Payload: 10-25L for uniform seeding",
        "Ensures even distribution over large areas",
        "Multi-crop compatibility: Suitable for crops like mustard, wheat, maize, and pulses"
      ],
      image: "/images/seeding.jpg"
    },
    {
      title: "Precision Spraying",
      description: [
        "Payload: 10-25L suitable for medium-sized farms",
        "Advanced nozzles: Adjustable spray parameters",
        "Ideal for orchards, vineyards, tea gardens, and horticulture"
      ],
      image: "/images/spraying.jpg"
    }
  ];

  const cropTypes = [
    { name: "Cereals", image: "/images/cereals.jpg" },
    { name: "Pulses", image: "/images/pulses.jpg" },
    { name: "Oilseeds", image: "/images/oilseeds.jpg" },
    { name: "Fruits", image: "/images/fruits.jpg" },
    { name: "Vegetables", image: "/images/vegetables.jpg" },
    { name: "Plantation Crops", image: "/images/plantation.jpg" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Service Types Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mt-0.5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crop Types Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Coverage Across Crop Types</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cropTypes.map((crop, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={crop.image} 
                  alt={crop.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium text-gray-800">{crop.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTypes;
