describe('LATSTLATP', () => {
  it('should arrive at landing page and validate all elements', () => {

    cy.fixture('snakes.json').then(snakes => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/snakes/', {
        status: 201,
        body: snakes
      })
    })

    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/noSnakeZones/', {
        status: 200,
        body: zones
      })
    })

    cy.visit('http://localhost:3001/')
      .get('.landing').contains('h1', "Look at this Snake then Look at this Puppy")
      .get('.landing').contains('h2', "A phobic deprogramming tool designed by someone with no credentials")
      .get('.level-form').contains('label', 'Level 1 |')
      .get('.level-form').contains('label', 'Level 2 |')
      .get('.level-form').contains('label', 'Level 3 |')
      .get('.level-form').contains('label', 'Level 4 |')
      .get('a').contains("p", "breathe. . . then click this button to begin")
  })

  it('should navigate to game page, validate all elements, and play the game', () => {

    cy.fixture('snakes.json').then(snakes => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/snakes/', {
        status: 201,
        body: snakes
      })
    })

    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/noSnakeZones/', {
        status: 200,
        body: zones
      })
    })

    cy.visit('http://localhost:3001/')
    .get('a').contains("p", "breathe. . . then click this button to begin")
    .click()
    .url().should('eq', 'http://localhost:3001/game')
    .get('header').contains('h1', 'LATSTLATP')
    .get('.snake-display').contains('p', "Take 5 deep breaths, and then click the box to begin")
    .get('.boxes').children().should("have.length", 3)
    .get('.boxes').contains('p', '1')
    .get('.boxes').contains('p', '2')
    .get('.boxes').contains('p', '3')
    .get('.start-box')
    .click()

    .get('.snake-display').contains('p', "Look at this Snake:")
    .get('form').contains('label', "Starting Anxiety Level (out of 10)")
    .get("form").get('input[name="before"]').should("have.value", "0")
    .get("form").get('input[name="before"]').type('3').should("have.value", "03")
    .get("form").get('button').contains("initiate processing")
    .click()

    cy.clock()
    cy.tick(1000)
    cy.get('.snake-display').contains('p', "processing...")
    cy.tick(2300)

    cy.get("form").contains('label', "Updated Anxiety Level (out of 10)")
    .get("form").get('input[name="after"]').should("have.value", "0")
    .get("form").get('input[name="after"]').type('1').should("have.value", "01")
    .get("form").get('button').contains("I'm ready to see the next snake")


  })
})