import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-medical-blue to-medical-teal text-white py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transforming Healthcare Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Integrated healthcare platforms designed for modern medical practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/platforms"
              className="bg-white text-medical-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Platforms
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-medical-blue transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section
        title="Why Choose WebConnect360?"
        subtitle="Comprehensive healthcare technology solutions built for efficiency and compliance"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover>
            <div className="text-medical-blue mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">HIPAA Compliant</h3>
            <p className="text-gray-600">
              Full compliance with healthcare regulations and data security standards
            </p>
          </Card>

          <Card hover>
            <div className="text-medical-teal mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Real-time data synchronization and optimized performance
            </p>
          </Card>

          <Card hover>
            <div className="text-medical-green mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
            <p className="text-gray-600">
              Easy integration with existing healthcare systems and workflows
            </p>
          </Card>
        </div>
      </Section>

      {/* Stats Section */}
      <Section title="Trusted by Healthcare Providers Worldwide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-medical-blue mb-2">500+</div>
            <div className="text-gray-600">Healthcare Facilities</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-medical-teal mb-2">2M+</div>
            <div className="text-gray-600">Patients Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-medical-green mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-medical-blue mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join hundreds of healthcare providers using WebConnect360 platforms
        </p>
        <Link
          to="/contact"
          className="inline-block bg-medical-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Get Started Today
        </Link>
      </Section>
    </div>
  );
};

export default Home;
