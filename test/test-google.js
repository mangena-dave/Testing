// mocha test-google.js --timeout 600000
var chai, expect, selenium, waitFor;

selenium = require("selenium-webdriver");
chai = require('chai');
chai.use(require('chai-as-promised'));
expect = chai.expect;
//brforeClass
before(function() {
  global.driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();
  global.waittime = 6000;
  global.url = 'https://google.co.za';
  driver.getWindowHandle();
  driver.get(url);
  return driver.sleep(1000);
});

describe('Google test', function() {
  it('search for text', function() {
    driver.findElement({id: 'lst-ib'}).clear();
    driver.findElement({id: 'lst-ib'}).sendKeys("google");
    driver.sleep(500);
    // driver.findElement({xpath: "//div[@id='sbse0']/div[@class='sbqs_c']"}).click();
    return driver.sleep(500);
  });

 it('Quit the browser', function(){
	driver.quit();
   });
});

waitFor = function(obj, message) {
  return driver.wait((function() {
    return driver.isElementPresent(obj);
  }), waittime, "\n" + message);
};