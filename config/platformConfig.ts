export interface Platform {

  id: string;
  title: string;
  description: string;
  status: 'In Development' | 'Coming 2026';

  title: string;
  description: string;
  status: "In Development" | "Coming 2026";

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

    title: "EMT-B App",
    description: "Comprehensive study tool for Emergency Medical Technician-Basic certification with practice questions and scenarios.",
    status: "In Development",
  },
  {
    title: "AEMT App",
    description: "Advanced Emergency Medical Technician training with enhanced skills and patient care modules.",
    status: "In Development",
  },
  {
    title: "Paramedic App",
    description: "Complete paramedic certification preparation with advanced cardiac life support and pharmacology.",
    status: "Coming 2026",
  },
  {
    title: "Flashcards",
    description: "Interactive flashcard system for quick review and memorization of key medical concepts.",
    status: "In Development",
  },
  {
    title: "VoiceNotes",
    description: "Voice-to-text note-taking tool designed for medical professionals to document patient encounters.",
    status: "Coming 2026",
  },
  {
    title: "PCR Trainer",
    description: "Patient Care Report training simulator to practice documentation and reporting skills.",
    status: "Coming 2026",
  },
  {
    title: "StudyConnect Recruiting",
    description: "Connect with study groups and recruit team members for collaborative learning experiences.",
    status: "Coming 2026",
  },

];
