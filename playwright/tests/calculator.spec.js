import {test, expect } from '@playwright/test'
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test.describe('Calculator app', () =>{
    test('AppHasAddButton', async ({page}) => {
        //const addButton = await page.locator('button').withText('add');
        const addButton = await page.getByRole('button', { name: 'add' });
        await expect(addButton).toBeVisible();
    }),
    test('AppCanSubtract', async ({page}) => {
        const subtractButton = await page.getByRole('button', { name: 'subtract' });
        await page.fill('#number1', '5');
        await page.fill('#number2', '3');
      
 
        // Click the subtract button
        await subtractButton.click();
            
        // Get the result after subtraction
        const result = await page.$eval('#result', (element) => element.textContent);
      
        expect(result).toBe('The result is: 2');
    })
  });