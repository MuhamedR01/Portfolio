import React from 'react';

const ServiceItem = ({ title, description, icon }) => (
  <div className="mb-12 md:mb-0 text-center">
    <div className="text-6xl mb-4 text-gray-300">{icon}</div>
    <h3 className="text-xl font-bold tracking-widest uppercase mb-4">{title}</h3>
    <p className="text-sm text-gray-700 max-w-md mx-auto">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="custom-radial-bg py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="w-24 h-px bg-gray-300 flex items-center justify-center">
            <div className="w-8 h-px bg-black"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
          <ServiceItem
            icon="🎨"
            title="CONSULTING"
            description="I can help you plan and structure your project based on your goals and offer guidance throughout the development process."
          />
          <ServiceItem
            icon="⚡"
            title="OPTIMIZATION"
            description="I can improve your website's speed, SEO, and performance to ensure it meets modern standards and runs efficiently."
          />
          <ServiceItem
            icon="🔒"
            title="SECURITY"
            description="I ensure your site is secure by following best practices and applying modern security measures during development and after deployment."
          />
          <ServiceItem
            icon="🚀"
            title="DEPLOYMENT"
            description="I can deploy your website to the server of your choice and ensure it runs smoothly in the live environment."
          />
        </div>
        <div className="mt-16 flex justify-center">
          <ServiceItem
            icon="🔍"
            title="UI/UX AUDIT"
            description="I review your site's user interface and experience, and offer suggestions to make it more intuitive and visually appealing."
          />
        </div>
        <div className="flex justify-center mt-16">
          <div className="w-24 h-px bg-gray-300 flex items-center justify-center">
            <div className="w-8 h-px bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;