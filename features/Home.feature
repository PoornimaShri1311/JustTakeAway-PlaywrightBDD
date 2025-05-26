Feature: Home Page Related Test Cases
Background: Navigate to the Home Page
    Given I am on the Home Page

  @smoke @regression @homePage @UI
  Scenario: Home Page UI Validation for Tab
    Then validate that the Where do you want to go? label should be displayed in the Home Page
    And validate that the 'Flight' icon should be displayed as selected in the Home Page
    And validate that the 'Stays' icon should NOT be displayed as selected in the Home Page
    And validate that the 'Car Rental' icon should NOT be displayed as selected in the Home Page
    When I click on Stays icon in the Home Page
    And validate that the 'Stays' icon should be displayed as selected in the Home Page
    Then validate that the Where do you want to stay? label should be displayed in the Home Page
    And validate that the 'Flight' icon should NOT be displayed as selected in the Home Page
    And validate that the 'Car Rental' icon should NOT be displayed as selected in the Home Page
    When I click on Car Rental icon in the Home Page
    Then validate that the Car Hires label should be displayed in the Home Page
    And validate that the 'Car Rental' icon should be displayed as selected in the Home Page
    And validate that the 'Stays' icon should NOT be displayed as selected in the Home Page
    And validate that the 'Flight' icon should NOT be displayed as selected in the Home Page



@smoke @regression @homePage @UI @footer
  Scenario: Home Page Footer Validation
  Then validate that the Where do you want to go? label should be displayed in the Home Page
  When I click on About Us link in the footer section of the Home Page
  Then validate that the About Us page should be displayed
  When I click on Press link in the footer section of the Home Page
  Then validate that the Press page should be displayed
  When I click on Help/FAQ link in the footer section of the Home Page
  Then validate that the Help/FAQ page should be displayed

  