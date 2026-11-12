import type {Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage.js';


export class LoginPage extends BasePage{
    
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly submitButton:Locator;

    constructor(page:Page){
        super(page);
        this.usernameInput=page.getByRole('textbox', { name: 'Username' });
        this.passwordInput=page.getByRole('textbox', { name: 'Password' });
        this.submitButton=page.getByRole('button', { name: 'Arrow Sign In' });
    }

    async navigate(){
        await this.navigateTo('/login');
    }

    async login(username:string,password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}