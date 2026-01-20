# Meet App

## Overview

The Meet App is a serverless, progressive web application (PWA) built with React using the Test-Driven Development (TDD) approach.
It integrates with the Google Calendar API to display upcoming events for various cities.

The application combines modern development practices such as serverless architecture, PWA functionality, and data visualization to deliver a fast, reliable, and installable experience.

This project was developed as part of the CareerFoundry Full-Stack Immersion Program.

---

## 👩‍💻 Key Features

- Filter events by city
- Show and hide event details
- Specify number of events displayed
- Offline functionality using cached data
- Installable as a Progressive Web App (PWA)
- Data visualization using charts

---

## 🧑‍🎓 User Stories

- As a user, I want to filter events by city so that I can see events taking place in a specific location.
- As a user, I want to show or hide event details so that I can control how much information I see.
- As a user, I want to specify the number of events displayed so that I can limit how many events appear at once.
- As a user, I want to use the app offline so that I can still view previously loaded events.
- As a user, I want to add the app to my home screen so that I can access it like a native application.
- As a user, I want to view charts so that I can better understand how events are distributed.

---

## 🧩 Gherkin Scenarios

### Feature 1: Filter Events by City

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities  
Given the user hasn’t searched for any city  
When the user opens the app  
Then the user should see a list of upcoming events

Scenario 2: User should see a list of suggestions when they search for a city  
Given the main page is open  
When the user starts typing in the city textbox  
Then the user should receive a list of cities that match what they’ve typed

Scenario 3: User can select a city from the suggested list  
Given the user was typing "Berlin" in the city textbox and the list of suggested cities is showing  
When the user selects a city (e.g., "Berlin, Germany") from the list  
Then the city should be updated and the user should see upcoming events in that city

---

### Feature 2: Show/Hide Event Details

Scenario 1: An event element is collapsed by default  
Given the list of events has been loaded  
When the user views the list of events  
Then each event element should be collapsed by default

Scenario 2: User can expand an event to see details  
Given the list of events has been loaded  
When the user clicks on the "Show details" button  
Then the event element should expand to show details

Scenario 3: User can collapse an event to hide details  
Given an event’s details are expanded  
When the user clicks the "Hide details" button  
Then the event details should be hidden

---

### Feature 3: Specify Number of Events

Scenario 1: When user hasn’t specified a number, 32 events are shown by default  
Given the app has loaded events  
When the user has not specified a number  
Then 32 events should be displayed

Scenario 2: User can change the number of events displayed  
Given the app is displaying events  
When the user changes the number in the input field  
Then the specified number of events should be displayed

---

### Feature 4: Use the App When Offline

Scenario 1: Show cached data when there is no internet connection  
Given the user previously opened the app while online  
When the user opens the app offline  
Then cached event data should be displayed

Scenario 2: Show error when user changes search settings while offline  
Given the user is offline  
When the user tries to change city or number of events  
Then an error message should be shown

---

### Feature 5: Add App Shortcut to Home Screen

Scenario 1: User can install the app as a shortcut  
Given the app is open in a supported browser  
When the user chooses "Add to Home Screen"  
Then the app should be installed on the device

---

### Feature 6: Display Charts Visualizing Event Details

Scenario 1: Show a chart with number of upcoming events per city  
Given events have been loaded  
When the user views the main page  
Then a chart showing event distribution by city should be displayed

---

## 🧠 Technologies Used

- React
- Vite
- Jest / Cucumber
- Google Calendar API
- AWS Lambda (Serverless authorization)
- Chart.js / Recharts
- Service Workers (PWA & offline support)
- Vercel (Deployment)

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm
- Google account (for Google Calendar API access)

---

### Installation

1. Clone the repository:

git clone <your-repository-url>
cd meet-app

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

The application will run locally in your browser.

---

## 🔐 Google API & Authorization Configuration

This application uses the Google Calendar API to retrieve event data.

Authorization is handled by a serverless function that manages OAuth access.

### Environment Variables

Credentials are stored as environment variables in the hosting platform (e.g. Vercel):

CLIENT_ID – Google OAuth client ID  
CLIENT_SECRET – Google OAuth client secret  
CALENDAR_ID – Google Calendar ID

These values are accessed in the serverless function via process.env and are not stored in the repository.

---

## ☁️ Serverless Architecture

- OAuth handled via serverless functions
- No traditional backend server
- Credentials injected securely at runtime

---

## 📶 Offline & PWA Support

- Cached data available offline
- App can be installed to device home screen
- Service workers manage caching

---

## 📊 Testing & Quality

- Developed using Test-Driven Development (TDD)
- Unit, integration, and end-to-end tests
- BDD scenarios written using Gherkin syntax

---

## 🚀 Deployment

The app is deployed on Vercel.
Each push to the main branch triggers automatic redeployment.

---

## 🤖 AI Usage Disclosure

AI tools were used to assist with drafting and structuring documentation.
All content was reviewed, edited, and verified for accuracy by the author.
