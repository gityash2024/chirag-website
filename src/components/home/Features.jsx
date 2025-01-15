const Features = () => {
  const features = [
    {
      title: "Streamlined Service Booking",
      description: "Quick and easy access to agricultural services – book from anywhere!",
      icon: "📱"
    },
    {
      title: "AI/ML Powered Recommendation",
      description: "Personalized crop recommendations for better decision making",
      icon: "🤖"
    },
    {
      title: "Compare and Save",
      description: "View and compare prices from multiple DSPs for services like spraying and harvesting",
      icon: "💰"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose C.H.I.R.A.G CONNECT?</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
