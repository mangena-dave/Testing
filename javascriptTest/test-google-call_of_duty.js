// mocha test-google-call_of_duty.js --timeout 60000
var chai, expect, selenium, waitFor;

selenium = require("selenium-webdriver");
chai = require('chai');
chai.use(require('chai-as-promised'));
expect = chai.expect;

before(function() {
  global.driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();
  global.waittime = 6000;
  global.url = 'https://google.co.za';
  driver.getWindowHandle();
  driver.get(url);
  return driver.sleep(1000);
});

describe('Google test', function() {
  it('Search', function() {
    driver.findElement({id: 'lst-ib'}).clear();
    driver.findElement({id: 'lst-ib'}).sendKeys("call of duty 2017");
    driver.sleep(500);
    driver.findElement({xpath: "//div[@id='sbse0']/div[@class='sbqs_c']"}).click();
    return driver.sleep(500);
  });
  return it('Quit browser', function() {
    return driver.quit();
  });  
});

waitFor = function(obj, message) {
  return driver.wait((function() {
    return driver.isElementPresent(obj);
  }), waittime, "\n" + message);
};
