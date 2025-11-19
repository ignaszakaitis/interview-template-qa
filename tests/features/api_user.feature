@api
Feature: API User Management

  Scenario: Create User
    Given user with name "John" and job "QA" is created
    Then the response status should be 201
    And the response should contain an id
    And the response should contain createdAt

  Scenario: Update User
    Given user with name "John" and job "QA" is created
    When the user is updated with job "Manager"
    Then the response status should be 200
    And the response should contain updatedAt

  Scenario: Delete User
    Given user with name "Jane" and job "Dev" is created
    When the user is deleted
    Then the response status should be 204

