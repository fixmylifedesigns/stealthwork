import React from "react";
import {
  Shield,
  Globe,
  DollarSign,
  Code,
  CreditCard,
  Search,
  MapPin,
  Activity,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const VpnServicesComponent = () => (
  <section className="mb-16">
    <h3 className="text-3xl font-bold mb-8 text-center">VPN Services</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <ServiceCard
        icon={Shield}
        title="VPN Router Setup"
        description="Secure your connection with our custom VPN router configurations."
      />
      <ServiceCard
        icon={Globe}
        title="Global Access"
        description="Bypass geo-restrictions and access your favorite content worldwide."
      />
      <ServiceCard
        icon={DollarSign}
        title="Cost-effective Solutions"
        description="Save on international data plans with our expert VPN setups."
      />
    </div>
  </section>
);

const FreeToolsComponent = () => (
  <section className="mb-16" id="free-tools-grid">
    <h3 className="text-3xl font-bold mb-8 text-center">Free Tools</h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <ServiceCard
        icon={MapPin}
        title="IP Location"
        description="Get detailed information about your current IP address and geolocation."
        link="/ip-location"
      />
      <ServiceCard
        icon={Activity}
        title="Internet Speed Test"
        description="Measure your internet connection's speed and performance with our comprehensive test."
        link="/speedtest"
      />
    </div>
  </section>
);

const WebServicesComponent = () => (
  <section>
    <h3 className="text-3xl font-bold mb-8 text-center">Website Services</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <ServiceCard
        icon={Code}
        title="Custom Website Development"
        description="Create stunning, responsive websites tailored to your brand and needs."
      />
      <ServiceCard
        icon={CreditCard}
        title="Payment Integration"
        description="Seamlessly integrate secure payment gateways into your website."
      />
      <ServiceCard
        icon={Search}
        title="SEO Optimization"
        description="Improve your website's visibility and ranking in search engine results."
      />
    </div>
  </section>
);

const Services = () => {
  return (
    <div className="p-8 pt-32 bg-black text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
      <FreeToolsComponent />
      <VpnServicesComponent />
      <WebServicesComponent />
    </div>
  );
};

export default Services;
