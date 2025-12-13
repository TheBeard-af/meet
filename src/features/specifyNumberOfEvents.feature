Feature: Specify Number of Events

    Scenario: When the user hasn’t specified a number, 32 events are shown by default
        Given the user has not specified a number of events
        When the user opens the app
        Then the default number of events should be 32

    Scenario: User can specify how many events they want to see
        Given the user can see the number of events textbox
        When the user types a number into the number of events textbox
        Then the number of displayed events should match the number typed