export interface Platform {
  id: string;
  title: string;
  status: 'Active' | 'Development' | 'Planned' | 'Beta';
  releaseYear: number;
  description: string;
  category: string;
}

export const platforms: Platform[] = [
  {
    id: 'healthconnect',
    title: 'HealthConnect',
    status: 'Active',
    releaseYear: 2020,
    description: 'Comprehensive electronic health record system with real-time patient data synchronization and analytics.',
    category: 'EHR Systems',
  },
  {
    id: 'medicalimaging',
    title: 'MedicalImaging Pro',
    status: 'Active',
    releaseYear: 2021,
    description: 'Advanced medical imaging platform supporting DICOM, PACS integration, and AI-powered diagnosis assistance.',
    category: 'Imaging',
  },
  {
    id: 'telehealth',
    title: 'TeleHealth Suite',
    status: 'Active',
    releaseYear: 2019,
    description: 'HIPAA-compliant telehealth platform enabling secure video consultations and remote patient monitoring.',
    category: 'Telehealth',
  },
  {
    id: 'labmanager',
    title: 'Lab Manager',
    status: 'Active',
    releaseYear: 2022,
    description: 'Laboratory information management system with automated workflow and results reporting.',
    category: 'Laboratory',
  },
  {
    id: 'pharmacyconnect',
    title: 'PharmacyConnect',
    status: 'Beta',
    releaseYear: 2023,
    description: 'Integrated pharmacy management system with e-prescribing and medication tracking capabilities.',
    category: 'Pharmacy',
  },
  {
    id: 'aianalytics',
    title: 'AI Analytics Hub',
    status: 'Development',
    releaseYear: 2024,
    description: 'Machine learning platform for predictive healthcare analytics and population health management.',
    category: 'Analytics',
  },
  {
    id: 'patientportal',
    title: 'Patient Portal',
    status: 'Active',
    releaseYear: 2020,
    description: 'Patient-facing portal for appointment scheduling, medical records access, and secure messaging.',
    category: 'Patient Engagement',
  },
  {
    id: 'mobilehealthkit',
    title: 'Mobile Health Kit',
    status: 'Planned',
    releaseYear: 2025,
    description: 'Mobile SDK for integrating health data from wearables and IoT medical devices.',
    category: 'Mobile',
  },
];
