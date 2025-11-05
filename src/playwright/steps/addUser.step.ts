import { credenciales } from '../../resources/fixtures/admin.json';
import { newUser } from '../../resources/fixtures/user.json';
import { Given, When, Then } from '../util/playwright-bdd';
import { UserPage } from '../pages/user.page';
import { LoginPage } from '../pages/login.page';

let loginPage: LoginPage
let userPage: UserPage

Given('El usuario está en la página de gestión de usuarios PIM', async ({ page }) => {
    const baseUrl = process.env.BASEURL;
    loginPage = new LoginPage(page);
    userPage = new UserPage(page);

    await loginPage.navigateToUrl(`${baseUrl}/login`);
    await loginPage.login(credenciales.username, credenciales.password);
    await userPage.navigateToPIMModule();
});
When('El usuario hace clic en el botón para agregar un empleado', async () => {
    await userPage.clickAddEmployeeButton();

});
When('El usuario completa el formulario con datos válidos para un empleado', async () => {
    const newUserData = newUser;
    await userPage.fillEmployeeForm(newUserData.employeeName, newUserData.middleName, newUserData.employeeLastName);
});
When('Hace clic en el botón "Save"', async () => {
    await userPage.clickSaveButton();
});
Then('Vamos a la pagina de admin y buscamos el user creado', async () => {

    const employeeName = newUser.employeeName + ' ' + newUser.middleName + ' ' + newUser.employeeLastName;
    await userPage.navigateToAdminModule();
    await userPage.searchUserInAdminModule(employeeName);

});
// Then('Vamos a la pagina de admin y buscamos el user creado', async () => {
//     // Navegar a la página de administración y buscar el usuario recién creado
// });