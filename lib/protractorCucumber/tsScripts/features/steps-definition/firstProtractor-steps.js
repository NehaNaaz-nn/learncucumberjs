"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Given('Super Calculator Website is opened browser', function () {
    protractor_1.browser.get('http://juliemr.github.io/protractor-demo/').then(function () {
        console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
    });
});
cucumber_1.When('Title is Super Calculator', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('Enter number 6 in First Box', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('Select plus operator from dropdown', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('Enter number 20 in Second Box', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.When('Click Go button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('Answer Displayed is 26', function () {
    return 'pending';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQcm90cmFjdG9yLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHMtZGVmaW5pdGlvbi9maXJzdFByb3RyYWN0b3Itc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBd0M7QUFDeEMsMkNBQTZDO0FBRTNDLGdCQUFLLENBQUMsNENBQTRDLEVBQUU7SUFDbEQsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0lBQ3hGLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkJBQTJCLEVBQUU7SUFDaEMsb0VBQW9FO0lBQ3BFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZCQUE2QixFQUFFO0lBQ2xDLG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQ0FBb0MsRUFBRTtJQUN6QyxvRUFBb0U7SUFDcEUsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0JBQStCLEVBQUU7SUFDcEMsb0VBQW9FO0lBQ3BFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlCQUFpQixFQUFFO0lBQ3RCLG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBQztJQUMxQixPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQyJ9