# A1cleaning - Cleaning Company Website

A simple, professional website for a cleaning company built with Next.js and Express.

## Project Structure

```
A1mini/
├── backend/          # Express API server
│   ├── server.js     # Main server file
│   ├── package.json
│   └── .env
│
└── frontend/         # Next.js website
    ├── src/
    │   ├── app/      # Next.js App Router pages
    │   │   ├── page.tsx          # Home page
    │   │   ├── services/         # Services page
    │   │   ├── about/            # About page
    │   │   ├── quote/            # Request a Quote page
    │   │   ├── contact/          # Contact page
    │   │   ├── layout.tsx
    │   │   └── globals.css
    │   │
    │   └── components/           # Reusable components
    │       ├── Header.tsx
    │       ├── Footer.tsx
    │       ├── Button.tsx
    │       └── ServiceCard.tsx
    │
    ├── package.json
    ├── tailwind.config.js
    └── next.config.js
```

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL (to be connected later)

## Features

### Frontend (5 Pages)
1. **Home** - Hero, services overview, why choose us, CTA
2. **Services** - Office, Commercial, Deep, Move-in/out cleaning
3. **About** - Company overview and mission
4. **Request a Quote** - Quote request form
5. **Contact** - Contact form with business info

### Backend (3 API Routes)
- `GET /api/services` - Returns static list of services
- `POST /api/contact` - Handles contact form submissions
- `POST /api/quote` - Handles quote requests

## Setup Instructions

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend 
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

The backend server will run on `http://localhost:4000`

### Frontend Setup

1. Open a new terminal and navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Running the Application

1. **Start Backend** (Terminal 1):
```bash
cd backend
npm run dev
```

2. **Start Frontend** (Terminal 2):
```bash
cd frontend
npm run dev
```

3. Open your browser to `http://localhost:3000`

## API Endpoints

### GET /api/services
Returns a list of available cleaning services.

**Response:**
```json
{
  "success": true,
  "services": [
    {
      "id": 1,
      "name": "Office Cleaning",
      "description": "...",
      "icon": "office"
    }
  ]
}
```

### POST /api/contact
Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "message": "I have a question..."
}
```

### POST /api/quote
Submit a quote request.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "555-5678",
  "facilityType": "office",
  "squareFootage": "5000",
  "message": "Need weekly cleaning..."
}
```

## Future Enhancements

- [ ] Connect PostgreSQL database
- [ ] Save form submissions to database
- [ ] Email notifications for new inquiries
- [ ] Admin dashboard for managing inquiries

## Design

- **Color Scheme:** Blue (#3b82f6) and White
- **Style:** Minimal, professional, corporate
- **Responsive:** Mobile-first design with Tailwind CSS

## Notes

- Currently, form submissions are logged to the console
- Database integration is prepared but not yet implemented
- All API routes use CORS for cross-origin requests
- Forms include client-side validation
