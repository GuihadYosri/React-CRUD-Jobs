
---

# React Jobs Board

## Overview

This project is a simple jobs board application built with React. It fetches jobs data from a fake API using JSON Server and displays it in a clean, responsive layout styled with Tailwind CSS.

## Features

- **Fetch Data**: Retrieves jobs data from a fake API (JSON Server).
- **Responsive Design**: Uses Tailwind CSS for a mobile-first, responsive layout.
- **Job Listings**: Displays a list of available jobs with relevant details.
- **Search & Filter**: Allows users to search and filter job listings.



## Installation

### Prerequisites

- Node.js (v12.x or higher)
- npm or yarn
- JSON Server (for the fake API)

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/react-jobs-board.git
   cd react-jobs-board
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Set Up JSON Server**:
   - Create a `db.json` file in the root directory of your project with sample jobs data:
     ```json
     {
       "jobs": [
         { "id": 1, "title": "Frontend Developer", "company": "Tech Co.", "location": "Remote", "type": "Full-time" },
         { "id": 2, "title": "Backend Developer", "company": "Code Labs", "location": "New York", "type": "Part-time" },
         { "id": 3, "title": "UI/UX Designer", "company": "Creative Inc.", "location": "San Francisco", "type": "Contract" }
       ]
     }
     ```
   - Install JSON Server globally (if you haven't already):
     ```bash
     npm install -g json-server
     ```
   - Start the JSON Server:
     ```bash
     json-server --watch db.json --port 5000
     ```

4. **Run the Application**:
   - Start the React development server:
     ```bash
     npm start
     ```
   - Open your browser and navigate to `http://localhost:3000`.

## Usage

Once the application is running, you can view the job listings, use the search bar to filter results, and interact with the UI to explore different job opportunities.

## Technologies Used

- **React (JSX)**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JSON Server**: Simple fake REST API server for testing and prototyping.
- **HTML5**: Markup language for structuring the web content.



