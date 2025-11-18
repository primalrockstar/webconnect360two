import { Platform } from '@/config/platformConfig';

interface PlatformCardProps {
  platform: Platform;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const statusColors = {
    'In Development': 'bg-blue-100 text-blue-800',
    'Coming 2026': 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {platform.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {platform.description}
          </p>
        </div>
        
        <div className="space-y-3">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[platform.status]}`}>
              {platform.status}
            </span>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="border border-gray-300 rounded-lg p-2 bg-gray-50 opacity-50 cursor-not-allowed">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-600">App Store</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="border border-gray-300 rounded-lg p-2 bg-gray-50 opacity-50 cursor-not-allowed">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-600">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
