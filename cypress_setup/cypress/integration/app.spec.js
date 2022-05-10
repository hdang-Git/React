beforeEach(() => {
    cy.log('intercept')
    cy.visit('/')
})

describe("renders home page", () => {
    it("renders stuff", () => {
        cy.get(".App").should("exist")
    })
})