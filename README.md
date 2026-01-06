# Hedamo – Product Disclosure Interface (Task 3)

## Overview

This project is a **frontend UI implementation** created as part of a hiring assignment for **Hedamo**, a structured product disclosure platform.

The objective of this task was to design and build a **polished, professional product listing and disclosure interface** that clearly reflects Hedamo’s core philosophy of **“disclosure over verification.”**

The interface prioritizes:
- Clear presentation of **producer-declared information**
- Neutral, institutional visual language
- Strong information hierarchy and clarity
- Avoidance of any signals implying certification, approval, or verification

This is a **frontend-only project** and uses **mock data** to simulate realistic product disclosures.

---

## Scope of Implementation (Task 3)

### 1. Product List View
The product list view displays a collection of products with the following information:
- Product name
- Category
- Producer name
- Disclosure status (Draft / Submitted / Published)
- Last updated date

Additional features include:
- Search functionality (by product name or text)
- Filters by category and disclosure status
- Sorting by product name and last updated date
- Subtle hover states and refined spacing for visual clarity

---

### 2. Product Detail / Disclosure View
Each product includes a structured disclosure detail view containing:
- Declared by (producer)
- Date declared
- Supporting evidence status (Yes / No)

Disclosure sections include:
- Materials & Composition
- Manufacturing Process
- Environmental or Process Claims

Additional elements:
- Version history showing multiple disclosure versions with dates and statuses
- A clear disclaimer stating that all information is **producer-declared**

---

### 3. Interaction States
The interface includes thoughtful interaction handling such as:
- Skeleton loading states for lists and detail views
- Empty state messaging when no products match applied filters
- Keyboard-accessible interactive elements
- Smooth, restrained transitions (150–250ms)

---

## Design Principles

The interface was intentionally designed to feel:
- Calm
- Institutional
- Professional
- Neutral

Key design decisions:
- No authority or validation language (e.g., “verified”, “approved”, “certified”)
- Clear emphasis on producer responsibility
- Strong typographic hierarchy and consistent spacing
- Minimal visual decoration to prioritize clarity and trust

---

## Assumptions

- All product data is **producer-declared** and not verified by the platform
- Backend services are outside the scope of this task
- Static mock data is sufficient to demonstrate UI behavior and interactions
- The evaluation focuses on **frontend quality, UX clarity, and polish**, not feature quantity

---

## Tech Stack

This project is built using:
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

---

## Why This Tech Stack Was Chosen

The technology stack was selected to support fast iteration, strong UI consistency, and a clean developer experience, while keeping the focus on frontend craft and interaction quality.

- **React** enables a modular, component-driven architecture suitable for structured disclosure views.
- **TypeScript** improves reliability by making data models and component contracts explicit.
- **Vite** provides a fast and lightweight development environment for rapid UI iteration.
- **Tailwind CSS** allows precise control over spacing, typography, and visual hierarchy.
- **shadcn/ui** offers accessible, well-structured UI components without imposing stylistic constraints.

Overall, the stack prioritizes clarity, consistency, and polish, aligning closely with the goals of the assignment.

---

## Running the Project Locally

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Setup Instructions

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <PROJECT_FOLDER_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
