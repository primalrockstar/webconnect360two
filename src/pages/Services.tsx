import Section from '../components/Section';
import Card from '../components/Card';

const Services = () => {
  const services = [
    {
      title: 'Implementation & Integration',
      description: 'Seamless integration with your existing healthcare systems and workflows. Our expert team ensures minimal disruption during deployment.',
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
        </svg>
      ),
      features: [
        'Custom integration planning',
        'Data migration assistance',
        'System compatibility testing',
        'Minimal downtime deployment',
      ],
    },
    {
      title: 'Training & Onboarding',
      description: 'Comprehensive training programs for your staff to ensure they can effectively use our platforms from day one.',
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      features: [
        'On-site training sessions',
        'Online learning modules',
        'User documentation',
        'Ongoing education programs',
      ],
    },
    {
      title: '24/7 Technical Support',
      description: 'Round-the-clock support from our dedicated team of healthcare IT professionals to keep your systems running smoothly.',
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
      features: [
        'Phone and email support',
        'Priority ticket system',
        'Remote troubleshooting',
        'Emergency response team',
      ],
    },
    {
      title: 'Compliance & Security',
      description: 'Expert guidance on HIPAA compliance, data security, and regulatory requirements to keep your practice protected.',
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      features: [
        'HIPAA compliance audits',
        'Security assessments',
        'Regular updates',
        'Regulatory consulting',
      ],
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions to meet your unique practice needs with custom features and integrations.',
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      features: [
        'Custom feature development',
        'API integrations',
        'Workflow automation',
        'Third-party system bridges',
      ],
    },
    {
      title: 'Data Analytics & Reporting',
      description: 'Advanced analytics and reporting services to help you make data-driven decisions for your practice.',
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      features: [
        'Custom dashboards',
        'Performance metrics',
        'Population health analytics',
        'Financial reporting',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-medical-gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive support and services to help you get the most out of 
            your healthcare technology investment
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section title="What We Offer">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover className="flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-medical-blue to-medical-teal rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-medical-green mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section
        title="Our Process"
        subtitle="How we work with you to ensure success"
        background="gray"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Discovery & Assessment</h3>
                <p className="text-gray-600">
                  We begin by understanding your practice needs, current systems, and goals 
                  to create a tailored solution plan.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-medical-teal text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Planning & Design</h3>
                <p className="text-gray-600">
                  Our team develops a detailed implementation plan, including timelines, 
                  resource allocation, and integration strategies.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-medical-green text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-gray-600">
                  We deploy your chosen platforms with minimal disruption, ensuring seamless 
                  integration with your existing workflows.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Training & Support</h3>
                <p className="text-gray-600">
                  Comprehensive training for your team and ongoing support to ensure you're 
                  getting maximum value from your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss how our services can transform your practice
        </p>
        <a
          href="/contact"
          className="inline-block bg-medical-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Contact Our Team
        </a>
      </Section>
    </div>
  );
};

export default Services;
