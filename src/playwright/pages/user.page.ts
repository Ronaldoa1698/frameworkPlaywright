import { Page } from '@playwright/test';
import { PIMLocator } from '../locators/pim.locator';
import { ViewSystemUsersLocator } from '../locators/viewSystemUsers.locator';

export class UserPage {

    readonly page: Page
    readonly pimLocator: PIMLocator
    readonly viewSystemUsersLocator: ViewSystemUsersLocator

    constructor(page: Page) {
        this.page = page;
        this.pimLocator = new PIMLocator(page);
        this.viewSystemUsersLocator = new ViewSystemUsersLocator(page);
    }
    async navigateToPIMModule() {
        await this.pimLocator.buttonPIM.click();
    }

    async navigateToAdminModule() {
        await this.pimLocator.navigateToAdminModule.click();
    }

    async clickAddEmployeeButton() {
        await this.pimLocator.buttonAddEmployee.click();
        await this.page.waitForLoadState('networkidle');
    }

    async fillEmployeeForm(firstName: string, middleName: string, lastName: string) {
        await this.pimLocator.inputFirstName.fill(firstName);
        await this.pimLocator.inputMiddleName.fill(middleName);
        await this.pimLocator.inputLastName.fill(lastName);
    }

    async clickSaveButton() {
        await this.pimLocator.buttonSave.click();
        await this.page.waitForLoadState('networkidle');
        await this.pimLocator.employeeSaveSuccessMessage.waitFor({ state: 'visible' });
    }

    async searchUserInAdminModule(employeeName: string) {
        await this.viewSystemUsersLocator.buttonAdd.click();
        await this.viewSystemUsersLocator.inputEmployeeName.pressSequentially(employeeName, { delay: 100 });
        await this.page.waitForTimeout(1000);
        await this.page.getByText(employeeName).click();
    }
}