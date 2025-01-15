const Impact = () => {
    const impactData = [
      {
        title: "Water Conservation",
        value: "120,000 Liters",
        description: "Water Saved Through Precision Spraying"
      },
      {
        title: "Reduced Chemical Usage",
        value: "300 Liters",
        description: "Pesticides Saved Through Smart Application"
      },
      {
        title: "Environmental Impact",
        value: "300 Kg CO2",
        description: "Reduction in Carbon Emissions"
      },
      {
        title: "Community Impact",
        value: "15,000+",
        description: "Farmers Benefited"
      },
      {
        title: "Gender Inclusivity",
        value: "50-50",
        description: "Gender Ratio Target in Workforce"
      }
    ];
  
    const futureInitiatives = [
      {
        title: "AI/ML-Powered Disease Detection",
        description: "Advanced crop disease detection and yield prediction"
      },
      {
        title: "UAV Imaging",
        description: "Enhanced crop protection and monitoring"
      },
      {
        title: "Smart Farming Insights",
        description: "Data-driven agricultural recommendations"
      }
    ];
  
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">
              Making a difference in agriculture and the environment
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {impactData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-green-600">{item.title}</h3>
                <div className="text-3xl font-bold my-2">{item.value}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
  
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              What's Next For CHIRAG Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {futureInitiatives.map((initiative, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Impact;