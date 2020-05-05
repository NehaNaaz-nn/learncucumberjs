import { Given, When, Then, After, AfterAll, BeforeAll } from 'cucumber'
import { browser, element, by, WebElement, protractor } from 'protractor'
const selectOperator = require('./calc_operator_function');

BeforeAll(async function () {

  await browser.get('http://juliemr.github.io/protractor-demo/');
  
})

Given('Super calculator website is launched in the browser as', async function () {
  await console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
});

When('a number {int} is entered in the first box', async function (firstNum) {
  await element(by.model('first')).sendKeys(firstNum).then(async function () {
    await browser.sleep(1000);
    console.log("[2] Entered first number.");
  });
});

When('a {word} operator is selected from dropdown', async function (operatorString) {

  let operatorCSS: string = "";
  switch (operatorString) {
    case "addition": operatorCSS = "+";
      break;
    case "multiply": operatorCSS = "*";
      break;
    case "divide": operatorCSS = "/";
      break;


  }
  await selectOperator(operatorCSS);

});

When('a number {int} is entered in the second box', async function (secondNum) {
  await element(by.model('second')).sendKeys(secondNum).then(async function () {
    await browser.sleep(1000);
    console.log("[2] Entered second number.");
  });
});



When('go button is clicked', async function () {
  await browser.sleep(2000);
  await element(by.id('gobutton')).click().then(async function () {
    console.log("[5] Go button clicked");
    await browser.sleep(3000);
  });
});
Then('Answer {int} is displayed', async function (answerNum) {
  console.log("[6] Answer Displayed");
});

//  After(async function () {
//     browser.sleep(2000);
//     //browser.driver.executeScript("document.body.style.zoom='60%'");
//     let screenShot= await browser.
//     this.attach(screenShot, "image/png");  
//   });
