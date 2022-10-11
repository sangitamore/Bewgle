const { test } = require('@playwright/test');

test('Test Locators', async({page}) => {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('text=Forgot login info?').click();
  await page.locator('#firstName').type('moni');
  await page.locator('#lastName').type('more');
  await page.locator('#address.street').type('shivajinagar ahmedpur');
  await page.locator('#address.city').type('ahmedpur');
  await page.locator('#address.state').type('maharashtra');
  await page.locator('#address.zipCode').type('413515');
  await page.locator('#ssn').type('142563');
  await page.locator('text="Find My Login Info"').click();
  await page.pause();
})(); 


