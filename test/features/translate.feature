Feature: Google Translate
    Background:
        Given I am on the Google translate page

    Scenario Outline: I translate using Google
        Given I click translate to drop down
        And I select <language> language
        And I click translate to drop down
        And I enter <input> in input field
        Then I get <translation> in translation field

        Examples:
        | language | input     | translation |
        | Spanish  | mi prueba | my test     |
        | Russian  | мой тест  | My test     |
        | German   | mein test | my test     |