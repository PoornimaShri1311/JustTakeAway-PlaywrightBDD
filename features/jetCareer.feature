@JET-Test-WholeSet
Feature: Career Page Related Test Cases Background: Navigate to the Home Page Given I am on the Home Page @JET-Test-Netherlands Scenario: Verify search results has multiple countries before refinement When I enter "Test" in the Job Title search box And I click the Search button Then I should see search results from multiple locations When I click on the Country category And I select the "Netherlands" checkbox Then I should see search results where the location is "Netherlands" only @JET-Sales-Germany Scenario: Search for Sales jobs and refine by Germany When I click on Search for Job Title text field And I select Sales among Job Categories And the Sales Category count and the search results count should match When I click on the Country category And I select the "Germany" checkbox in Sales Page And the Sales Category count and the search results count should match
  Background: Navigate to the Home Page
    Given I am on the Home Page

  @JET-Test-Netherlands @sample1
  Scenario: Verify search results has multiple countries before refinement
    When I enter "Test" in the Job Title search box
    And I click the Search button
    Then I should see search results from multiple locations
    When I click on the Country category
    And I select the "Netherlands" checkbox
    Then I should see search results where the location is "Netherlands" only

  @JET-Sales-Germany @sample2
  Scenario: Search for Sales jobs and refine by Germany
    When I click on Search for Job Title text field
    And I select Sales among Job Categories
    And the Sales Category count and the search results count should match
    When I click on the Country category
    And I select the "Germany" checkbox in Sales Page
    And the Sales Category count and the search results count should match