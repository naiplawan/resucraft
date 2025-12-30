# Resucraft

A modern, feature-rich resume builder application built with Next.js 16 and React 19.

## Features

- **Multiple Templates**: Choose from Modern, Classic, Minimal, and Creative resume designs
- **Live Preview**: See changes in real-time as you edit your resume
- **PDF Export**: Download your resume as a professional PDF document
- **Customization**: Select from various accent colors to personalize your resume
- **Photo Upload**: Add a professional photo to your resume
- **Comprehensive Sections**:
  - Personal Information
  - Professional Summary
  - Work Experience
  - Education
  - Skills (with proficiency levels)
  - Certifications
  - Projects
  - Languages
  - Awards

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **PDF Generation**: jsPDF + html2canvas

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd resucraft

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start building your resume.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
resucraft/
├── app/                    # Next.js app router pages
│   ├── builder/           # Resume builder page
│   └── page.tsx           # Landing page
├── components/
│   ├── forms/             # Form components for resume sections
│   ├── preview/           # Resume preview component
│   ├── templates/         # Resume template designs
│   └── ui/                # shadcn/ui components
├── context/               # React context providers
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## License

MIT
