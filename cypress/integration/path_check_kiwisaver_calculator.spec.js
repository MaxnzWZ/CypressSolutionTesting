describe('User story3: Check the path of kiwi saver calculation in home page', () => {
  it('check the path of kiwi saver calculation in home page', () => {
    cy.visit("/");
    cy.contains("a#ubermenu-section-link-kiwisaver-ps", "KiwiSaver").click();

    cy.contains("Risk Profiler and Retirement Calculator").click();
    cy.contains("KiwiSaver Retirement Calculator");
  })
})