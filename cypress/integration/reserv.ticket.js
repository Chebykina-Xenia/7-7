const selectorAdmin = require("../fixtures/selectors.admin.json");

it("Should make a reservation ticket", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  const user = require("../fixtures/user.json");
  cy.get(selectorAdmin.email).type(user.validUserEmail);
  cy.get(selectorAdmin.password).type(user.validPassword);
  cy.get(selectorAdmin.buttonLoginIn).click();

  cy.get(
    '[id="start-sales"] .conf-step__selectors-box :nth-child(4) .conf-step__radio'
  ).click(); //const halls = cy.get('[id="start-sales"] .conf-step__selectors-box li');

  cy.get('[id="start-sales"] .conf-step__button').should("not.be.disabled");
  const hallName = cy.get(
    '[id="start-sales"] .conf-step__selectors-box :nth-child(4) .conf-step__selector'
  ).innerText; //const halls = cy.get('[id="start-sales"] .conf-step__selectors-box li');
  //console.log(hallName);
  cy.visit("qamid.tmweb.ru");
  cy.contains("hallName");
  //then(($el) => {
  //  return $el.disabled;
  //});

  // if (!isDisabled){
  // const hallName = cy.get('[id="start-sales"] .conf-step__selectors-box :nth-child(4) .conf-step__selector').type();    //const halls = cy.get('[id="start-sales"] .conf-step__selectors-box li');
  // cy.visit("qamid.tmweb.ru");
  // }
  //const halls = cy.get('[id="start-sales"]  .conf-step__selectors-box  .conf-step__radio').click();
  //halls.forEach((hall) /=> {
  // hall.click();
  // const button = cy.get('form input').check(['[id="start-sales"] .conf-step__button'])
  // });

  // //halls.get('[data-hall-open="1"]');
  //cy.get('#start-sales .conf-step__selector').get('[data-hall-open="1"]').first();
  /// hall.click();
  //  const hallNames = [];
  ///  const hallOpen = hall.attr('[data-hall-open');
  //if (hallOpen === 1){
  // hallNames.push();
  //}  return hallNames;
  //return hallName;
  //const hallNmae = cy.get('[data-hall-open="0"]');
  // cy.get('[id="start-sales"] button');
  //cy.log('[id="start-sales"] .conf-step__selectors-box .conf-step__selector');
  // cy.get('[data-hall-open="1"]').first().click();

  //const hallName = " ";
  // if (halls.get('[data-hall-open="0"]')){
  // hallName;
  // } else {

  // };
  //    if (cy.contains('Продажа билетов открыта!')){
  //const nameHall =
  // //}
  //})

  //hallNames.first();
  //cy.get('#start-sales .conf-step__selector').click();
  //cy.get('#start-sales .conf-step__selector').find('input').first()
  //then((hall) => {
  //  hall.click();
  //});
  //  cy.contains('Продажа билетов открыта!').then((hall) => {
  //    hall.get('#start-sales .conf-step__selector').click();
  // })
  //cy.contains('Доступные залы').should('be.visible');
});
