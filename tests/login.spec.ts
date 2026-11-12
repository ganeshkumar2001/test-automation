import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js';


test.describe("CRM Login Tests",()=>{
    test("Verify successful login", async({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.navigate();

        await loginPage.login("admin","admin");

        await expect(page).toHaveURL(/dashboard/)

        await expect(page.getByRole('heading', { name: 'Welcome, Adam Lui' })).toBeVisible();
        
    })
})