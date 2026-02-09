-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create quote requests table
CREATE TABLE IF NOT EXISTS quote_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    facility_type VARCHAR(100) NOT NULL,
    square_footage INTEGER NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_quotes_email ON quote_requests(email);
CREATE INDEX IF NOT EXISTS idx_quotes_created ON quote_requests(created_at);
