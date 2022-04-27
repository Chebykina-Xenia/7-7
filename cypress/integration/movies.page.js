it("Should show correct page", () => {
    cy.visit("qamid.tmweb.ru");
    const selector = require("../fixtures/selectors.json");
    cy.get(selector.daysWeek).should("have.length", 7);
  });