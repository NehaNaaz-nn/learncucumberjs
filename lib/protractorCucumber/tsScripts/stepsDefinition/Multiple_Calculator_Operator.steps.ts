import {Given,When,Then} from 'cucumber'
import {browser,element,by} from 'protractor'
const selectOperator = require('./calc_operator_function');

  Given('Super Calculator Website is opened browser', async function () {
    await browser.get('http://juliemr.github.io/protractor-demo/').then(async function()
				{ browser.sleep(2000);
			      await console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
        });
    await browser.waitForAngularEnabled(false);
    //await browser.get('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elem_select');
  });

  When('Title is Super Calculator', async function () {
     let title = await element(by.xpath("//div[@ng-controller='CalcCtrl']/div/h3")).getText();
    console.log("The Page title is:", title);
     
  });

  When('Enter number 6 in First Box for addition', async function () {
   
    await element(by.model('first')).sendKeys("6").then(async function(){
      browser.sleep(1000);
     await console.log("[2] Entered first number.");
   });

  });

  When('Select plus operator from dropdown', async  function () {
      await selectOperator('+');
    });
  

  When('Enter number 20 in Second Box for addition', async function () {
    await element(by.model('second')).sendKeys("20").then(async function(){
      await browser.sleep(1000);
      console.log("[3] Entered second number.");
  });
  });

  When('Clicked Go button in addition block', async function () {
    await browser.sleep(1000);
    await element(by.id('gobutton')).click().then(async function(){
      console.log("[5] Go button clicked");
      await browser.sleep(3000);
      });
  });

  Then('Answer Displayed is 26', async function (){
    let result = await element(by.xpath("//h2[@class='ng-binding']")).getText();
  
    console.log("*************************************", result);
  });

  //////////////////////////////////SUBTRACT/////////////////////////////////////
  When('Enter number 10 in the first Box for subtraction', async function () {
    browser.sleep(3000);
    await element(by.model('first')).sendKeys("10").then(async function () {
      browser.sleep(1000);
      await console.log("[2] Entered first number for subtraction.");
    });
  
  });
  
  When('Select minus operator from dropdown', async function () {
    await browser.sleep(2000);
  
    await selectOperator('-');
  
  });
  When('Enter number 5 in the Second Box for subtraction', async function () {
    await element(by.model('second')).sendKeys("5").then(async function () {
      await browser.sleep(2000);
      console.log("[3] Entered second number.");
    });
  });
  
  When('Clicked on Go button in subtraction block', async function () {
    await browser.sleep(1000);
    await element(by.id('gobutton')).click()
      console.log("[5] Go button clicked");
      await browser.sleep(3000);
    
  });
  
  Then("Result 5 is Displayed", async function () {
    //  browser.sleep(3000);
    let result = await element(by.xpath("//h2[@class='ng-binding']")).getText();
  
    console.log("*************************************", result);
    // expect(result).toBe("5");
  
  });


  //////////////////////////////////PERCENTAGE///////////////////////////////// 

  When('Enter number 20 in the first Box for percentage', async function () {
    browser.sleep(3000);
    await element(by.model('first')).sendKeys("20").then(async function () {
      browser.sleep(1000);
      await console.log("[2] Entered first number for percentage.");
    });
  
  });
  
  When('Select percentage operator from dropdown', async function () {
    await browser.sleep(2000);
  
    await selectOperator('%');
  
  });
  When('Enter number 100 in the Second Box for percentage', async function () {
    await element(by.model('second')).sendKeys("100").then(async function () {
      await browser.sleep(2000);
      console.log("[3] Entered second number.");
    });
  });
  
  When('Clicked on Go button in percentage block', async function () {
    await browser.sleep(1000);
    await element(by.id('gobutton')).click()
      console.log("[5] Go button clicked");
      await browser.sleep(3000);
    
  });
  
  Then("Result 20 is Displayed", async function () {
    //  browser.sleep(3000);
    let result = await element(by.xpath("//h2[@class='ng-binding']")).getText();
  
    console.log("*************************************", result);
    // expect(result).toBe("5");
  
  });

  /////////////////////////////////MUTLIPLY//////////////////////////////////////////
  When('Enter number 12 in the first Box for multiplication', async function () {
   
    await element(by.model('first')).sendKeys("12").then(async function(){
      browser.sleep(1000);
     await console.log("[2] Entered first number.");
   });

  });
    
  When('Select multiplication operator from dropdown', async function () {
    await browser.sleep(2000);
  
    await selectOperator('*');
  
  });
    When('Enter number 11 in the Second Box for multiplication', async function () {
      await element(by.model('second')).sendKeys("11").then(async function () {
        await browser.sleep(1000);
        console.log("[3] Entered second number.");
      });
    });
    
    When('Clicked on Go button in multiplication block', async function () {
      await browser.sleep(1000);
      await element(by.id('gobutton')).click()
        console.log("[5] Go button clicked");
        await browser.sleep(3000);
      
    });
    
    Then("Result 132 is Displayed", async function () {
      //  browser.sleep(3000);
      let result = await element(by.xpath("//h2[@class='ng-binding']")).getText();
    
      console.log("*************************************", result);
      // expect(result).toBe("5");
   
});

When('Enter number 18 in the first Box for division', async function () {
  browser.sleep(3000);
  await element(by.model('first')).sendKeys("18").then(async function () {
    browser.sleep(1000);
    await console.log("[2] Entered first number for division.");
  });

});

When('Select divide operator from dropdown', async function () {
  await browser.sleep(2000);

  await selectOperator('/');

});
When('Enter number 2 in the Second Box for division', async function () {
  await element(by.model('second')).sendKeys("2").then(async function(){
    await browser.sleep(1000);
    console.log("[3] Entered second number.");
});
});

When('Clicked on Go button in division block', async function () {
   await browser.sleep(1000);
  await element(by.id('gobutton')).click().then(async function () {
    console.log("[5] Go button clicked");
    await browser.sleep(3000);
  });
});

Then("Result 9 is Displayed", async function () {
  //  browser.sleep(3000);
  let result = await element(by.xpath("//h2[@class='ng-binding']")).getText();

  console.log("*************************************", result);
  
});

  