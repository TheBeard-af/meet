Feature: Show/Hide Event Details

    Scenario: An event element is collapsed by default
        Given the user opens the app
        When the user views the list of events
        Then the event element should be collapsed by default

    Scenario: User can expand an event to see details
        Given the user opens the app
        And the list of events has loaded
        When the user clicks the show details button for an event
        Then the event element should expand to show the details

    Scenario: User can collapse an event to hide details
        Given the user has expanded an event’s details
        When the user clicks the hide details button
        Then the event element should collapse and hide the details