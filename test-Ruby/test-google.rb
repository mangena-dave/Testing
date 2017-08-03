require "selenium-webdriver"

driver = Selenium::WebDriver.for :chrome

driver.navigate.to "http://google.co.za"

sleep(5)

expectedTitle = 'Google'

actualTitle = driver.title

if expectedTitle == actualTitle
  puts("Verification Successful - The correct title is displayed on the web page.")
else
  puts("Verification Failed - An incorrect title is displayed on the web page.")
end

sleep(10)

driver.quit
