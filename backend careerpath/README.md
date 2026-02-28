# CareerPath - Career Counseling Platform

## Project Overview
CareerPath is a comprehensive online platform designed to connect individuals with professional career counselors. It provides tools for personalized career planning, AI-powered recommendations, and a wealth of resources to help users navigate their professional journeys.

## Features
- **Secure Authentication**: User and Counselor registration/login via Supabase.
- **Expert Counseling**: Book 1-on-1 virtual sessions with certified advisors.
- **AI Career Insights**: Personalized career path suggestions powered by Google Gemini.
- **Resource Library**: Curated collection of resume templates, interview guides, and articles.
- **Job Board**: Integrated job search functionality with filtering.
- **Community Forum**: Space for professional networking and peer support.
- **Profile Management**: Detailed user profiles showcasing skills and experience.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Lucide React, Motion.
- **Backend**: Node.js, Express.js.
- **Database**: Supabase (PostgreSQL).
- **AI**: Google Gemini API.

## Installation Steps
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up environment variables in `.env`:
   - `GEMINI_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Start the development server: `npm run dev`.

## API Documentation
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate user.
- `GET /api/counselors`: List all counselors.
- `POST /api/sessions`: Book a counseling session.
- `POST /api/ai/recommendations`: Get AI-powered career suggestions.

## Database Schema
- **profiles**: Stores user and counselor profile information.
- **sessions**: Manages counseling appointments.
- **resources**: (Optional) Stores library metadata.
- **jobs**: (Optional) Stores job postings.

## Deployment
- **Backend**: Deployed on Render.
- **Frontend**: Deployed on Netlify.
- **Live Link**: [Your Netlify Link Here]
