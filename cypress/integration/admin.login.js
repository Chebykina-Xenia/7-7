const user = require("../fixtures/user.json");
const selectorAdmin = require("../fixtures/selectors.admin.json");

it("Valid email and password", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.get(selectorAdmin.email).type(user.validUserEmail);
  cy.get(selectorAdmin.password).type(user.validPassword);
  cy.get(selectorAdmin.buttonLoginIn).click();
  cy.contains("Доступные залы").should("be.visible");
});

it("Email invalid, password valid", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.get(selectorAdmin.email).type(user.iNvalidUserEmail);
  cy.get(selectorAdmin.password).type(user.validPassword);
  cy.get(selectorAdmin.buttonLoginIn).click();
  cy.contains("Ошибка авторизации!").should("be.visible");
});
