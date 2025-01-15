const CompanyInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Transforming Indian Agriculture – One Drone At A Time
        </h1>
        <p className="text-lg text-gray-600">
          With A Focus On Innovation And Sustainability, We Have Achieved Remarkable Milestones
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            C.H.I.R.A.G. Technologies - The Agriculture Drone Intelligence Company
          </h2>
          <p className="text-gray-600 mb-4">
            At CHIRAG Technologies, We Are Redefining Indian Agriculture Through Cutting-Edge Innovation. With A Focus On Precision Farming, Smart Drone Services, And AI & ML Solutions, We Bring Smarter, Sustainable Solutions To Farmers And Agribusinesses.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/drone-tech.jpg" 
            alt="Drone Technology"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-600">1500+</h3>
          <p className="text-gray-600">Acres Covered</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-600">500+</h3>
          <p className="text-gray-600">Villages Served</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-600">40+</h3>
          <p className="text-gray-600">Districts Covered</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-600">8</h3>
          <p className="text-gray-600">States Reached</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
