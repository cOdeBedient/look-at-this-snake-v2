describe('error page', () => {
  it('Should load error page from a bad route', () => {
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

    cy.visit('http://localhost:3001/potatoes')
    cy.get('h2').contains("Sssssomething went wrong! Try again sssssssoon.")
    cy.get('#game')
    cy.get('button').contains('or just forget all this and play snake')
  
  })

  it('Should load error page from a bad zones fetch', () => {
    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/noSnakeZones/', {
        status: 200,
        body: zones
      })
    })

      cy.intercept('GET', 'http://localhost:3000/api/v1/snakes/', {
        status: 500
      })

    cy.visit('http://localhost:3001/')
    cy.get('h2').contains("Sssssomething went wrong! Try again sssssssoon.")
  })

  it('Should load error page from a bad snakes fetch', () => {
    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/noSnakeZones/', {
        status: 500
      })
    })
    
      cy.intercept('GET', 'http://localhost:3000/api/v1/snakes/', {
        status: 200
      })

    cy.visit('http://localhost:3001/')
    cy.get('h2').contains("Sssssomething went wrong! Try again sssssssoon.")
  })
})