export interface Platform {
  title: string;
  description: string;
  status: "In Development" | "Coming 2026";
}

export const platforms: Platform[] = [
  {
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
