Feature: Home Page Related Test Cases
Background: Navigate to the Home Page
    Given I am on the Home Page

  @smoke @regression @flights @oneWay
  Scenario: Search for One Way Flight with Direct Flight
    Then validate that the Where do you want to go? label should be displayed in the Home Page
    When I click on Flight Trip Drop Down in the Flight Search Page
    Then validate that the Where do you want to go? label should be displayed in the Home Page
    When I click on Flight Trip Drop Down in the Flight Search Page
    And I select 'One-way' Trip option from the Flight Trip Drop Down in the Flight Search Page
    Then validate that the Flight Trip Drop Down should be displayed as 'One-way' in the Flight Search Page
    When I remove the already selected flight option from the Origin in the Flight Search Page
    And I select 'Mumbai' as the Flight Origin in the Flight Search Page
    And I select 'Goa' as the Flight Destination in the Flight Search Page
    And I enter the Flight check-in date after '10' days from today in the Flight Search Page
    And I select 2 Adults from the Passengers Drop Down in the Flight Search Page
    And I select 2 Childrens from the Passengers Drop Down in the Flight Search Page
    Then validate that the Flight Origin should be displayed as 'Mumbai' in the Flight Search Page
    And validate that the Flight Destination should be displayed as 'Goa' in the Flight Search Page
    And validate that the Flight check-in date should be displayed in the Flight Search Page
    And validate that the Travellers total count should be displayed as '4 travellers' in the Flight Search Page
    When I click on Direct Flight checkbox in the Flight Search Page
    Then validate that the Direct Flight checkbox should be displayed as 'Checked' in the Flight Search Page
    When I uncheck the Other search engine checkbox in the Flight Search Page
    Then validate that the Other search engine checkbox should be displayed as 'Unchecked' in the Flight Search Page
    When I click on Search Flight button in the Flight Search Page
    Then validate that the Flight Search results page should be displayed
    And validate that the Direct Flight checkbox should be displayed as 'Checked' in the Flight Result Page
    And validate that the Direct Flight filter checkbox should be displayed as 'Checked' in the Flight Result Page
    And validate that the One way trip option should be displayed in the Flight Result Page
    And validate that the Flight Origin should be displayed as 'Mumbai' in the Flight Result Page
    And validate that the Flight Destination should be displayed as 'Goa' in the Flight Result Page
    And validate that the Flight check-in date should be displayed in the Flight Result Page
    And validate that the Travellers total count should be displayed as '4 travellers' in the Flight Result Page
    And validate that the Flight Cabin should be displayed as 'Economy' in the Flight Result Page
    And validate that the Flight Origin as 'BOM' should be displayed on all the Flight Card in the Flight Result Page
    And validate that the Flight Destination as 'Goa' should be displayed on all the Flight Card in the Flight Result Page


  @smoke @regression @flights @roundTrip
  Scenario: Search for Round Flight with Direct Flight   
    Then validate that the Where do you want to go? label should be displayed in the Home Page
    When I remove the already selected flight option from the Origin in the Flight Search Page
    And I select 'Mumbai' as the Flight Origin in the Flight Search Page
    And I select 'Goa' as the Flight Destination in the Flight Search Page
    And I enter the Flight check-in date after '10' days from today in the Flight Search Page
    And I enter the Flight check-out date after '2' days from Flight check-in date in the Flight Search Page
    And I select 2 Adults from the Passengers Drop Down in the Flight Search Page
    And I select 2 Childrens from the Passengers Drop Down in the Flight Search Page
    Then validate that the Flight Origin should be displayed as 'Mumbai' in the Flight Search Page
    And validate that the Flight Destination should be displayed as 'Goa' in the Flight Search Page
    And validate that the Flight check-in date should be displayed in the Flight Search Page
    And validate that the Travellers total count should be displayed as '4 travellers' in the Flight Search Page
    When I click on Direct Flight checkbox in the Flight Search Page
    Then validate that the Direct Flight checkbox should be displayed as 'Checked' in the Flight Search Page
    When I uncheck the Other search engine checkbox in the Flight Search Page
    Then validate that the Other search engine checkbox should be displayed as 'Unchecked' in the Flight Search Page
    When I click on Search Flight button in the Flight Search Page
    Then validate that the Flight Search results page should be displayed
    And validate that the Direct Flight checkbox should be displayed as 'Checked' in the Flight Result Page
    And validate that the Direct Flight filter checkbox should be displayed as 'Checked' in the Flight Result Page
    And validate that the Round trip option should be displayed in the Flight Result Page
    And validate that the Flight Origin should be displayed as 'Mumbai' in the Flight Result Page
    And validate that the Flight Destination should be displayed as 'Goa' in the Flight Result Page
    And validate that the Flight check-in date should be displayed in the Flight Result Page
    And validate that the Travellers total count should be displayed as '4 travellers' in the Flight Result Page
    And validate that the Flight Cabin should be displayed as 'Economy' in the Flight Result Page
    And validate that the Flight Origin as 'BOM' should be displayed on all the Flight Card in the Flight Result Page
    And validate that the Flight Destination as 'Goa' should be displayed on all the Flight Card in the Flight Result Page
