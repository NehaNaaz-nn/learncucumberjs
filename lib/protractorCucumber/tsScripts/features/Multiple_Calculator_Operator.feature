Feature:  Test Multiple Operators of a calculator

Feature description : Applying different calculator operators


        Scenario: Perform Sum of Numbers with Calculator
            Given Super Calculator Website is opened browser
             When Title is Super Calculator
             When Enter number 6 in First Box for addition
             When Select plus operator from dropdown
             When Enter number 20 in Second Box for addition
             When Clicked Go button in addition block
             Then Answer Displayed is 26

        Scenario:Perform subtraction of two numbers in Calculator
             When Enter number 10 in the first Box for subtraction
             When Select minus operator from dropdown
             When Enter number 5 in the Second Box for subtraction
             When Clicked on Go button in subtraction block
             Then Result 5 is Displayed

        Scenario:find percentage of two numbers in Calculator
             When Enter number 20 in the first Box for percentage
             When Select percentage operator from dropdown
             When Enter number 100 in the Second Box for percentage
             When Clicked on Go button in percentage block
             Then Result 20 is Displayed

        Scenario:Perform multiplication of two numbers in Calculator
             When Enter number 12 in the first Box for multiplication
             When Select multiplication operator from dropdown
             When Enter number 11 in the Second Box for multiplication
             When Clicked on Go button in multiplication block
             Then Result 121 is Displayed
      
        Scenario:Perform division of two numbers in Calculator
             When Enter number 18 in the first Box for division
             When Select divide operator from dropdown
             When Enter number 2 in the Second Box for division
             When Clicked on Go button in division block
             Then Result 9 is Displayed

