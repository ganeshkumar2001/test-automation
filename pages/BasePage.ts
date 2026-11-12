import type {Page, Locator} from '@playwright/test'

export class BasePage{

 protected readonly page:Page;

 constructor(page:Page){
    this.page=page;
 }

 async navigateTo(url:string):Promise<void>{
    await this.page.goto(url);
 }

 async goBack(){
    await this.page.goBack();
 }

 async reoad(){
    await this.page.reload();
 }

}
