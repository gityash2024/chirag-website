const Stats = () => {
  const stats = [
    { label: "Acres Sprayed", value: "10,000+" },
    { label: "Farmers Served", value: "5,000+" },
    { label: "Water Saved", value: "30%" },
    { label: "CO2 Emissions Reduced", value: "10 Tons" },
    { label: "Chemical Usage Reduced", value: "15%" }
  ];

  return (
    <div className="bg-green-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Transforming Agriculture, One Spray At A Time
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
