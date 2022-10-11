const { test } = require('@playwright/test');

test('Test Locators', async({page}) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('text=Register').click();
  await page.locator('#customer.firstName').type('moni');
  await page.locator('#customer.lastName').type('more');
  await page.locator('#customer.address.street').type('mg road');
  await page.locator('#customer.address.city').type('ahmedpur');
  await page.locator('#customer.address.state').type('maharashtra');
  await page.locator('#customer.address.zipCode').type('413515');
  await page.locator('#customer.phoneNumber').type('7666360754');
  await page.locator('#customer.ssn').type('142563');
  await page.locator('text="customer.username"').fill('monimore');
  await page.locator('text="customer.password"').fill('monimore8');
  await page.locator('text="repeatedPassword"').fill('monimore8');
  await page.locator('text="Register"').click();
  await page.pause(); 
});
