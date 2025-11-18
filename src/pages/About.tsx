import Section from '../components/Section';
import Card from '../components/Card';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-medical-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About WebConnect360</h1>
          <p className="text-xl text-gray-600">
            We're dedicated to building innovative healthcare technology solutions that 
            improve patient care and streamline medical workflows.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section
        title="Our Mission"
        subtitle="Empowering healthcare providers with cutting-edge technology"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            At WebConnect360, we believe that technology should enhance, not complicate, 
            the delivery of healthcare. Our mission is to create intuitive, powerful 
            platforms that integrate seamlessly into medical workflows, allowing 
            healthcare professionals to focus on what matters most: patient care.
          </p>
          <p className="text-lg text-gray-700">
            Founded by healthcare professionals and technology experts, we understand 
            the unique challenges facing modern medical practices. Our solutions are 
            designed with real-world experience and feedback from hundreds of healthcare 
            providers worldwide.
          </p>
        </div>
      </Section>

      {/* Values Section */}
      <Section
        title="Our Values"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
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
              </div>
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p className="text-gray-600">
                Patient data security and privacy are our top priorities
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">User-Centered</h3>
              <p className="text-gray-600">
                Built with feedback from healthcare professionals
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving with the latest technology
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Our Team">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            Our diverse team brings together expertise in healthcare, software engineering, 
            data science, and user experience design. Together, we're committed to creating 
            solutions that make a real difference in healthcare delivery.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-medical-blue rounded-full mx-auto mb-2"></div>
              <div className="font-semibold">Healthcare</div>
              <div className="text-sm text-gray-600">Professionals</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-medical-teal rounded-full mx-auto mb-2"></div>
              <div className="font-semibold">Software</div>
              <div className="text-sm text-gray-600">Engineers</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-medical-green rounded-full mx-auto mb-2"></div>
              <div className="font-semibold">Data</div>
              <div className="text-sm text-gray-600">Scientists</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-2"></div>
              <div className="font-semibold">UX</div>
              <div className="text-sm text-gray-600">Designers</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
