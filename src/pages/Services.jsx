import DroneServices from "../components/services/DroneServices";
import ServiceTypes from "../components/services/ServiceTypes";

const Services = () => {
  return (
    <div className="py-12">
      <DroneServices />
      <ServiceTypes />
    </div>
  );
};

export default Services;
