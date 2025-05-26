Feature: Hotels Related Test Cases
Background: Navigate to the Home Page
    Given I am on the Home Page

  @smoke @regression @hotel 
  Scenario: Search for Hotels
    Then validate that the Where do you want to go? label should be displayed in the Home Page
    When I click on Stays icon in the Home Page
    And validate that the 'Stays' icon should be displayed as selected in the Home Page
    When I enter the destination as 'Goa' in the Hotel Search Page
    Then validate that the destination should be displayed as 'Goa' in the Hotel Search Page
    # And I enter the check-in date after '10' days from today in the Hotel Search Page
    # And I enter the check-out date after '2' days from check-in date in the Hotel Search Page
    # And I click on Hotel Search button in the Hotel Search Page
    # Then validate that the Hotel Result Page should be displayed
    # And validate that the Hotel Result Page for destination 'Goa' should be displayed
