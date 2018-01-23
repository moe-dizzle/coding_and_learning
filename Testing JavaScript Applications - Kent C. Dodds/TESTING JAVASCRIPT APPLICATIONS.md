# TESTING JAVASCRIPT APPLICATIONS

## 1 - TESTING JAVASCRIPT APPLICATIONS

1. Bugs
   * Security
   * Business logic
   * Integration
   * Performance
   * Scaling + more
   * Prevent Bug
     1. Static Types: `Flow` / `TypeScript`
     2. Linting: `ESLint`
     3. Testing
2. Types Of Tests
   * Unit Test
     * small pieces of code
     * not unit test if making http requests
   * Integration test
     * Testing multiples units together
     * http request is mocked
   * E2E
     * automated user test (no mocking)

## 2 - WRITING UNIT TESTS

* don't think of implementation detail , think of use cases
* make sure assertion runs
* test object factory = factory that create passing object

## 2 - TEST DRIVEN DEVELOPMENT (TDD)

* write test first, then write implementation , then refactor
* one test at a time
* min code to pass test
* doesn't work well when you don't know what the api will look like
