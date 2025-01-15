const Testimonials = () => {
  const testimonials = [
    {
      quote: "Using C.H.I.R.A.G CONNECT helped reduce my water usage by 20% while improving my overall yield. The drone service was completed on time and results were excellent.",
      name: "Sugunram Farmer",
      role: "Sugarcane Farmer",
      location: "Madhya Pradesh"
    },
    {
      quote: "Spraying pesticides remotely was a challenging task but C.H.I.R.A.G CONNECT made it so much easier. Their platform is making a substantial difference.",
      name: "Mustari Farmer",
      role: "Paddy Farmer",
      location: "West Bengal"
    },
    {
      quote: "As a rice farmer, managing costs and seeds is critical. With C.H.I.R.A.G CONNECT, I found a one-stop solution that works with my unique farming needs.",
      name: "Rice Farmer",
      role: "Rice Grower",
      location: "Andhra Pradesh"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Farmers Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="h-40 overflow-hidden">
                <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
              </div>
              <div className="mt-4 border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
              <div className="mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.934L4.618 19.23l1.282-6.363L1.18 8.251l6.364-.783L10 1.667l2.456 5.801 6.364.783-4.72 4.616 1.282 6.363z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
