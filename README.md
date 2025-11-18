# WebConnect360

A modern healthcare technology website built with Vite, React, TypeScript, and Tailwind CSS.

![Home Page](https://github.com/user-attachments/assets/a07af468-c52e-42ec-9d30-177d285b8be5)

## 🚀 Features

- **Modern Tech Stack**: Built with Vite, React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with fully responsive layouts
- **Medical-Tech Theme**: Clean, professional UI with healthcare-focused color palette
- **5 Complete Pages**: Home, About, Platforms, Services, and Contact
- **Reusable Components**: Modular architecture with shared components
- **Platform Data Config**: Centralized configuration for all platform data
- **Type-Safe**: Full TypeScript support for better code quality
- **Fast Development**: Vite for lightning-fast HMR and builds

## 📦 Project Structure

```
webconnect360two/
├── src/
│   ├── components/          # Shared components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Card.tsx         # Reusable card component
│   │   ├── Section.tsx      # Page section wrapper
│   │   └── Badge.tsx        # Status badge component
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Landing page
│   │   ├── About.tsx        # About us page
│   │   ├── Platforms.tsx    # Platforms showcase
│   │   ├── Services.tsx     # Services offered
│   │   └── Contact.tsx      # Contact form
│   ├── config/              # Configuration files
│   │   └── platforms.ts     # Platform data config
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/primalrockstar/webconnect360two.git
cd webconnect360two
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Color Palette

The application uses a medical-tech themed color palette:

- **Medical Blue**: `#0066CC` - Primary brand color
- **Medical Teal**: `#00A3A3` - Secondary accent
- **Medical Green**: `#00AA55` - Success/Active states
- **Medical Gray**: `#F5F7FA` - Backgrounds

### Components

#### Card
Reusable card component with optional hover effects:
```tsx
<Card hover className="custom-class">
  {/* Content */}
</Card>
```

#### Badge
Status badge with variant support:
```tsx
<Badge text="Active" variant="active" />
```

Variants: `active`, `beta`, `development`, `planned`, `default`

#### Section
Page section wrapper with title and subtitle:
```tsx
<Section 
  title="Section Title"
  subtitle="Section subtitle"
  background="gray"
>
  {/* Content */}
</Section>
```

## 🏥 Platform Data

Platform information is centralized in `src/config/platforms.ts`. Each platform includes:

- ID
- Title
- Status (Active, Beta, Development, Planned)
- Release Year
- Description
- Category

To add or modify platforms, edit this configuration file.

## 📄 Pages

### Home
Landing page with hero section, features, statistics, and call-to-action.

### About
Company information, mission, values, and team overview.

### Platforms
Showcase of all healthcare platforms with filtering by status and category.

### Services
Detailed information about services offered including implementation, training, support, and more.

### Contact
Contact form with company information and office location details.

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## 🔧 Technologies Used

- **Vite** - Next generation frontend tooling
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For authorized contributors, please follow the standard PR process.

## 📧 Contact

For questions or support, contact us at contact@webconnect360.com
