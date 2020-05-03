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
const protractor_1 = require("protractor");
function OpSignFun(operatorSign) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('operator')).click();
        let operatorPosition;
        yield protractor_1.element.all(protractor_1.by.xpath("//select[@ng-model='operator']/option")).getText().then(function (list) {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(1000);
                console.log("****************length of list", list.length);
                for (let index = 0; index <= list.length; index++) {
                    console.log("***************************indexes******************************************", index, list[index]);
                    if (list[index] == operatorSign) {
                        operatorPosition = index + 1;
                        console.log("*********************operator******************************************", operatorPosition);
                        console.log("************************operator sign***********************************************", operatorSign);
                        let operator = protractor_1.element(protractor_1.by.css("option:nth-child(" + operatorPosition + ")"));
                        //  console.log("***********************", operator);
                        operator.click();
                        return;
                    }
                }
            });
        });
    });
}
module.exports = OpSignFun;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY19vcGVyYXRvcl9mdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBzRGVmaW5pdGlvbi9jYWxjX29wZXJhdG9yX2Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQTZDO0FBRTdDLFNBQWUsU0FBUyxDQUFDLFlBQVk7O1FBRW5DLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxnQkFBdUIsQ0FBQztRQUM1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFlLElBQUk7O2dCQUVyRyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0QsS0FBSSxJQUFJLEtBQUssR0FBVSxDQUFDLEVBQUUsS0FBSyxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEVBQThFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUVqSCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxZQUFZLEVBQzlCO3dCQUNFLGdCQUFnQixHQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7d0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUVBQXlFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDekcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRkFBc0YsRUFBQyxZQUFZLENBQUMsQ0FBQTt3QkFDaEgsSUFBSSxRQUFRLEdBQUksb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hGLHFEQUFxRDt3QkFDbkQsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNqQixPQUFPO3FCQUNSO2lCQUVGO1lBRUEsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FBQTtBQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUUsU0FBUyxDQUFDIn0=