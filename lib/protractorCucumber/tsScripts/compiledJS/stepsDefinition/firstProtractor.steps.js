"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
// const expect = require('chai');
//import {assert} from 'cucumber-assert'
let selectOperator = require('./calc_operator_function');
cucumber_1.Given('Super Calculator Website is opened browser', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/').then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(2000);
                yield console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
            });
        });
        yield protractor_1.browser.waitForAngularEnabled(false);
        //await browser.get('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elem_select');
    });
});
cucumber_1.When('Title is Super Calculator', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let title = yield protractor_1.element(protractor_1.by.xpath("//div[@ng-controller='CalcCtrl']/div/h3")).getText();
        console.log("************************************************", title);
        //  expect(title).
    });
});
cucumber_1.When('Enter number 6 in First Box for addition', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys("6").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number.");
            });
        });
    });
});
cucumber_1.When('Select plus operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        selectOperator('+');
    });
});
cucumber_1.When('Enter number 20 in Second Box for addition', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys("20").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(1000);
                console.log("[3] Entered second number.");
            });
        });
    });
});
cucumber_1.When('Clicked Go button in addition block', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("[5] Go button clicked");
            });
        });
    });
});
cucumber_1.Then('Answer Displayed is 26', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("********************************************", result);
        //expect(result).toBe("26");
    });
});
// ////////////////////////////////////SUBTRACTION///////////////////////////////////////
cucumber_1.When('Enter number 10 in the first Box for subtraction', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys("10").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number for subtraction.");
            });
        });
    });
});
cucumber_1.When('Select minus operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        selectOperator('-');
    });
});
cucumber_1.When('Enter number 5 in the Second Box for subtraction', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys("5").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(1000);
                console.log("[3] Entered second number.");
            });
        });
    });
});
cucumber_1.When('Clicked on Go button in subtraction block', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("[5] Go button clicked");
            });
        });
    });
});
cucumber_1.Then("Result 5 is Displayed", function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("*************************************", result);
        // expect(result).toBe("5");
    });
});
//////////////////////////////////////////////percentage/////////////////////////////////
cucumber_1.When('Enter number 20 in the first Box for percentage', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys("20").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number for percentage.");
            });
        });
    });
});
cucumber_1.When('Select percentage operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(3000);
        selectOperator("%");
    });
});
cucumber_1.When('Enter number 100 in the Second Box for percentage', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys("100").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(2000);
                console.log("[3] Entered second number.");
            });
        });
    });
});
cucumber_1.When('Clicked on Go button in percentage block', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(1000);
        yield protractor_1.element(protractor_1.by.id('gobutton')).click();
        console.log("[5] Go button clicked");
        yield protractor_1.browser.sleep(3000);
    });
});
cucumber_1.Then("Result 20 is Displayed", function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("*************************************", result);
        // expect(result).toBe("5");
    });
});
///////////////////////////nultiplication//////////////////////////////
cucumber_1.When('Enter number 12 in the first Box for multiplication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys("12").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number for multiplication.");
            });
        });
    });
});
cucumber_1.When('Select multiplication operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        selectOperator('*');
    });
});
cucumber_1.When('Enter number 12 in the Second Box for multiplication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys("12").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(1000);
                console.log("[3] Entered second number.");
            });
        });
    });
});
cucumber_1.When('Clicked on Go button in multiplication block', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(1000);
        yield protractor_1.element(protractor_1.by.id('gobutton')).click();
        console.log("[5] Go button clicked");
        yield protractor_1.browser.sleep(3000);
    });
});
cucumber_1.Then("Result 144 is Displayed", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //  browser.sleep(3000);
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("*************************************", result);
    });
});
/////////////////////////////////divide////////////////////////
cucumber_1.When('Enter number 18 in the first Box for division', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys("18").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(1000);
                console.log("[2] Entered first number for division.");
            });
        });
    });
});
cucumber_1.When('Select divide operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        selectOperator('/');
    });
});
cucumber_1.When('Enter number 2 in the Second Box for division', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys("2").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(1000);
                console.log("[3] Entered second number.");
            });
        });
    });
});
cucumber_1.When('Clicked on Go button in division block', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(1000);
        yield protractor_1.element(protractor_1.by.id('gobutton')).click();
        console.log("[5] Go button clicked");
        yield protractor_1.browser.sleep(3000);
    });
});
cucumber_1.Then("Result 9 is Displayed", function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("*************************************", result);
        // expect(result).toBe("5");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQcm90cmFjdG9yLnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHNEZWZpbml0aW9uL2ZpcnN0UHJvdHJhY3Rvci5zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUM1QywyQ0FBaUQ7QUFDakQsa0NBQWtDO0FBQ2xDLHdDQUF3QztBQUN4QyxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUV6RCxnQkFBSyxDQUFDLDRDQUE0QyxFQUFFOztRQUNsRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFDbEUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1lBQ3pGLENBQUM7U0FBQSxDQUFDLENBQUM7UUFDSCxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsNkZBQTZGO0lBQy9GLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkJBQTJCLEVBQUU7O1FBRWhDLElBQUksS0FBSyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3RFLGtCQUFrQjtJQUVwQixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDBDQUEwQyxFQUFFOztRQUUvQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dCQUNsRCxv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