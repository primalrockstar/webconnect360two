export interface Platform {
  id: string;
  title: string;
  description: string;
  status: 'In Development' | 'Coming 2026';
}

export const platforms: Platform[] = [
  {
    id: 'emt-b-app',
    title: 'EMT-B App',
    description: 'Comprehensive study tool for EMT-Basic certification with practice exams and interactive learning modules.',
    status: 'In Development'
  },
  {
    id: 'aemt-app',
    title: 'AEMT App',
    description: 'Advanced EMT training platform with real-world scenarios and skill assessments.',
    status: 'In Development'
  },
  {
    id: 'paramedic-app',
    title: 'Paramedic App',
    description: 'Professional-grade paramedic training with advanced clinical scenarios and certification prep.',
    status: 'Coming 2026'
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    description: 'Smart flashcard system with spaced repetition for efficient medical terminology and protocol learning.',
    status: 'In Development'
  },
  {
    id: 'voicenotes',
    title: 'VoiceNotes',
    description: 'Voice-activated note-taking and study tool designed for hands-free learning on the go.',
    status: 'Coming 2026'
  },
  {
    id: 'pcr-trainer',
    title: 'PCR Trainer',
    description: 'Patient Care Report training simulator for mastering documentation and record-keeping skills.',
    status: 'In Development'
  },
  {
    id: 'studyconnect-recruiting',
    title: 'StudyConnect Recruiting',
    description: 'Career platform connecting certified EMS professionals with job opportunities nationwide.',
    status: 'Coming 2026'
  }
];
