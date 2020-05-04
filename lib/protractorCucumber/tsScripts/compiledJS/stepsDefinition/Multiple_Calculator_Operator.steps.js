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
const selectOperator = require('./calc_operator_function');
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
        console.log("The Page title is:", title);
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
        yield selectOperator('+');
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
        yield protractor_1.browser.sleep(1000);
        yield protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("[5] Go button clicked");
                yield protractor_1.browser.sleep(3000);
            });
        });
    });
});
cucumber_1.Then('Answer Displayed is 26', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("*************************************", result);
    });
});
//////////////////////////////////SUBTRACT/////////////////////////////////////
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
        yield selectOperator('-');
    });
});
cucumber_1.When('Enter number 5 in the Second Box for subtraction', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys("5").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(2000);
                console.log("[3] Entered second number.");
            });
        });
    });
});
cucumber_1.When('Clicked on Go button in subtraction block', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(1000);
        yield protractor_1.element(protractor_1.by.id('gobutton')).click();
        console.log("[5] Go button clicked");
        yield protractor_1.browser.sleep(3000);
    });
});
cucumber_1.Then("Result 5 is Displayed", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //  browser.sleep(3000);
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("*************************************", result);
        // expect(result).toBe("5");
    });
});
//////////////////////////////////PERCENTAGE///////////////////////////////// 
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
        yield protractor_1.browser.sleep(2000);
        yield selectOperator('%');
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
        //  browser.sleep(3000);
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("*************************************", result);
        // expect(result).toBe("5");
    });
});
/////////////////////////////////MUTLIPLY//////////////////////////////////////////
cucumber_1.When('Enter number 12 in the first Box for multiplication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys("12").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number.");
            });
        });
    });
});
cucumber_1.When('Select multiplication operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        yield selectOperator('*');
    });
});
cucumber_1.When('Enter number 11 in the Second Box for multiplication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys("11").then(function () {
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
cucumber_1.Then("Result 132 is Displayed", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //  browser.sleep(3000);
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("*************************************", result);
        // expect(result).toBe("5");
    });
});
cucumber_1.When('Enter number 18 in the first Box for division', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys("18").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number for division.");
            });
        });
    });
});
cucumber_1.When('Select divide operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        yield selectOperator('/');
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
        yield protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("[5] Go button clicked");
                yield protractor_1.browser.sleep(3000);
            });
        });
    });
});
cucumber_1.Then("Result 9 is Displayed", function () {
    return __awaiter(this, void 0, void 0, function* () {
        //  browser.sleep(3000);
        let result = yield protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText();
        console.log("*************************************", result);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlwbGVfQ2FsY3VsYXRvcl9PcGVyYXRvci5zdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBzRGVmaW5pdGlvbi9NdWx0aXBsZV9DYWxjdWxhdG9yX09wZXJhdG9yLnN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXdDO0FBQ3hDLDJDQUE2QztBQUM3QyxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUV6RCxnQkFBSyxDQUFDLDRDQUE0QyxFQUFFOztRQUNsRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFDbEUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1lBQ3hGLENBQUM7U0FBQSxDQUFDLENBQUM7UUFDUCxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsNkZBQTZGO0lBQy9GLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkJBQTJCLEVBQUU7O1FBQy9CLElBQUksS0FBSyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTNDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMENBQTBDLEVBQUU7O1FBRS9DLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Z0JBQ2xELG9CQUFPLENBQUMsS0FB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