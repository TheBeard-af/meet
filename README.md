Meet App

Overview
The Meet App is a serverless, progressive web application (PWA) built with React using the Test-Driven Development (TDD) approach.
It integrates with the Google Calendar API to display upcoming events for various cities.

This app combines modern development practices—serverless architecture and PWA functionality—to provide a fast, reliable, and installable experience. Users can search for events by city, view details, specify how many events to see, and view data visualizations of event distributions.

👩‍💻 Key Features
Filter events by city
Show/hide event details
Specify number of events
Use the app when offline
Add an app shortcut to the home screen
Display charts visualizing event details

🧑‍🎓 User Stories
Feature 1: Filter Events by City
As a user,
I should be able to filter events by city,
so that I can see a list of events taking place in that city.

Feature 2: Show/Hide Event Details
As a user,
I should be able to expand or collapse event details,
so that I can see more information about specific events only when I need it.

Feature 3: Specify Number of Events
As a user,
I should be able to specify the number of events displayed,
so that I can control how many events I see at once based on my preference.

Feature 4: Use the App When Offline
As a user,
I should be able to use the app even when I don’t have an internet connection,
so that I can still view previously loaded events and continue exploring the app.

Feature 5: Add an App Shortcut to the Home Screen
As a user,
I should be able to install the app as a shortcut on my device’s home screen,
so that I can quickly access it like a native mobile application.

Feature 6: Display Charts Visualizing Event Details
As a user,
I should be able to view data visualizations of event details,
so that I can easily understand how events are distributed across locations and categories.

🧩 Gherkin Scenarios
Feature 1: Filter Events by City
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of upcoming events

Scenario 2: User should see a list of suggestions when they search for a city
Given the main page is open
When user starts typing in the city textbox
Then the user should receive a list of cities that match what they’ve typed

Scenario 3: User can select a city from the suggested list
Given user was typing "Berlin" in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g., "Berlin, Germany") from the list
Then their city should be changed to that city and the user should receive a list of upcoming events in that city

Feature 2: Show/Hide Event Details
Scenario 1: An event element is collapsed by default
Given the list of events has been loaded
When the user views the list of events
Then each event element should be collapsed by default and not show its details

Scenario 2: User can expand an event to see details
Given the list of events has been loaded
When the user clicks on the "Show details" button for an event
Then the event element should expand to display the event details

Scenario 3: User can collapse an event to hide details
Given an event’s details are currently expanded
When the user clicks on the "Hide details" button for the same event
Then the event element should collapse and hide the event details

Feature 3: Specify Number of Events
Scenario 1: When user hasn’t specified a number, 32 events are shown by default
Given the app has loaded a list of events
When the user has not manually set a number of events to display
Then 32 events should be shown by default

Scenario 2: User can change the number of events displayed
Given the app is displaying a list of events
When the user changes the number in the “Number of events” input field
Then the app should display the specified number of events

Feature 4: Use the App When Offline
Scenario 1: Show cached data when there’s no internet connection
Given the user previously opened the app while online
And the app cached data from the last online session
When the user opens the app without an internet connection
Then the app should display the cached event data

Scenario 2: Show error when user changes search settings (city, number of events)
Given the user is offline
When the user tries to search for a new city or change the number of events
Then the app should display an error message indicating that new data cannot be loaded while offline

Feature 5: Add an App Shortcut to the Home Screen
Scenario 1: User can install the meet app as a shortcut on their device home screen
Given the meet app is open in a supported browser
When the browser prompts the user to “Add to Home Screen”
And the user confirms the installation
Then the app should be installed as a shortcut on the device home screen

Feature 6: Display Charts Visualizing Event Details
Scenario 1: Show a chart with the number of upcoming events in each city
Given the list of upcoming events has been loaded
When the user views the dashboard or main page
Then a chart should be displayed showing the number of upcoming events in each city

🧠 Technologies Used
React (Frontend Framework)
Vite (Build Tool)
Jest / Cucumber (Testing Frameworks)
Google Calendar API (Data Source)
AWS Lambda (Serverless) (Authorization Handling)
Vercel or GitHub Pages (Deployment)
Chart.js / Recharts (Data Visualization)
Service Workers (Offline Functionality)

🚀 Deployment
The app is deployed on Vercel and connected to its GitHub repository.
Every push to the main branch automatically triggers a redeployment.

📊 Testing & Quality
Developed using Test-Driven Development (TDD).
Test coverage goal: ≥ 90%.
Includes Unit, Integration, and End-to-End tests following Agile and BDD principles.
