Feature: Test suite for "IPFinder" tests

Background:
* url baseURL

Scenario: Validate successful API request for IPFinder
  Given path '/v1/apigee-ip-finder'
  And header Authorization = 'Basic d0JZeEZUU0ZBbzNId0JHRUozdEFickRoUDZjRzR4Mmg6VDN5eVVkaTBicWJOaE5GTA=='
  When method get
  Then status 200
  And match response contains {ip:'#ignore'}
  