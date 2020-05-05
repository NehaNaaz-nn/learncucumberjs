Feature: Test the calculator by scenario outline

Feature description:Scenario Outline feature in cucumber

        Scenario Outline: Perform the defined calculation in Super Calculator website
            Given Super calculator website is launched in the browser <temp>
             When a number <firstNum> is entered in the first box
             When a <operator> operator is selected from dropdown
             When a number <secondNum> is entered in the second box
             When go button is clicked
             Then Answer <answerNum> is displayed

        Examples:
                  | temp | firstNum   | operator | secondNum | answerNum |
                  | as   |     2035   | addition |   8000    |  10035    |
                  | as   |     20     | multiply |    80     |  1600     |
                  | as   |     20     | divide   |     5     |    4      |