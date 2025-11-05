import { Page } from "@playwright/test";

export class ViewSystemUsersLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    get selectDropdownRole() {
        return this.page.locator('div.oxd-input-group')
                   .filter({ has: this.page.locator('label', { hasText: 'User Role' }) })
                   .locator('.oxd-select-text-input');
    }

    get buttonSearch() {
        return this.page.getByRole('button', { name: 'Search' });
    }

    get buttonAdd() {
        return this.page.getByRole('button', { name: 'Add' });
    }

    get inputEmployeeName() {
        return this.page.getByPlaceholder('Type for hints...');
    }

    get editButtons() {
        return this.page.getByRole('button').filter({ 
            has: this.page.locator('i.bi-pencil-fill') 
        });
    }

    get deleteButtons() {
        return this.page.getByRole('button').filter({ 
            has: this.page.locator('i.bi-trash') 
        });
    }

    get resultsTable() {
        return this.page.locator('.oxd-table[role="table"]');
    }


    get tableBody() {
        return this.page.locator('.oxd-table-body[role="rowgroup"]');
    }


    get tableRows() {
        return this.tableBody.locator('.oxd-table-row[role="row"]');
    }

    get adminUserRow() {
        return this.tableRows.filter({ 
            has: this.page.locator('.oxd-table-cell:nth-child(2) div', { hasText: /^Admin$/ }) 
        });
    }

    get adminUsername() {
        return this.adminUserRow.locator('.oxd-table-cell:nth-child(2) div');
    }

    get adminDeleteButton() {
        return this.adminUserRow.locator('.oxd-table-cell-actions .oxd-icon-button').filter({ 
            has: this.page.locator('i.bi-trash') 
        });
    }

    get adminEditButton() {
        return this.adminUserRow.locator('.oxd-table-cell-actions .oxd-icon-button').filter({ 
            has: this.page.locator('i.bi-pencil-fill') 
        });
    }
}