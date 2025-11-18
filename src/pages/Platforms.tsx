import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { platforms } from '../config/platforms';

const Platforms = () => {
  const getStatusVariant = (status: string): 'active' | 'beta' | 'development' | 'planned' => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'active';
      case 'beta':
        return 'beta';
      case 'development':
        return 'development';
      case 'planned':
        return 'planned';
      default:
        return 'active';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-medical-blue to-medical-teal text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Our Platforms</h1>
          <p className="text-xl opacity-90">
            Comprehensive suite of healthcare technology solutions designed to work 
            seamlessly together or independently
          </p>
        </div>
      </Section>

      {/* Platforms Grid */}
      <Section
        title="Explore Our Solutions"
        subtitle="Choose the platforms that fit your practice needs"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Card key={platform.id} hover className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{platform.title}</h3>
                <Badge text={platform.status} variant={getStatusVariant(platform.status)} />
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-medical-gray px-3 py-1 rounded text-sm font-medium text-gray-700">
                  {platform.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 flex-grow">
                {platform.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">
                  Released: {platform.releaseYear}
                </span>
                <button className="text-medical-blue hover:text-medical-teal font-semibold text-sm">
                  Learn More →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Categories Overview */}
      <Section title="Platform Categories">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h4 className="font-bold mb-2">EHR Systems</h4>
            <p className="text-sm text-gray-600">Complete patient record management</p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-medical-teal rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h4 className="font-bold mb-2">Telehealth</h4>
            <p className="text-sm text-gray-600">Remote care and consultation</p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-medical-green rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h4 className="font-bold mb-2">Analytics</h4>
            <p className="text-sm text-gray-600">Data-driven insights</p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h4 className="font-bold mb-2">Mobile</h4>
            <p className="text-sm text-gray-600">On-the-go access</p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" className="text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Our team can help you select the right platforms for your practice
        </p>
        <a
          href="/contact"
          className="inline-block bg-medical-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Schedule a Consultation
        </a>
      </Section>
    </div>
  );
};

export default Platforms;
