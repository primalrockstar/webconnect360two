import { platforms } from '@/config/platformConfig';
import PlatformCard from '@/components/PlatformCard';

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Platforms
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our suite of EMS education and career development tools designed to help you succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
      </div>
    </div>
  );
}
