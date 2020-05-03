import {Given,When,Then} from 'cucumber'
import {browser,element,by} from 'protractor'

async function OpSignFun(operatorSign)
{
  await element(by.model('operator')).click();
  let operatorPosition:number;
  await element.all(by.xpath("//select[@ng-model='operator']/option")).getText().then(async function(list){
    
    await browser.sleep(1000);
    console.log("****************length of list", list.length);
  for(let index :number= 0; index <=list.length; index++) {
    console.log("***************************indexes******************************************", index, list[index]);
   
   if(list[index] == operatorSign)
   {
     operatorPosition=index+1;
     console.log("*********************operator******************************************", operatorPosition);
     console.log("************************operator sign***********************************************",operatorSign)
     let operator =  element(by.css("option:nth-child(" + operatorPosition + ")"));
   //  console.log("***********************", operator);
     operator.click();
     return;
   }
   
 }

  });
}
module.exports= OpSignFun;

