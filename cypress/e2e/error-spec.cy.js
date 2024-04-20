describe('error page', () => {
  it('Should load error page from a bad route', () => {
    cy.fixture('snakes.json').then(snakes => {
      cy.intercept('GET', 'https://look-at-this-snake-api.onrender.com/api/v1/snakes', {
        status: 201,
        body: snakes
      })
    })

    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'https://look-at-this-snake-api.onrender.com/api/v1/noSnakeZones', {
        status: 200,
        body: zones
      })
    })

    cy.visit('http://localhost:3000/potatoes')
    cy.get('p').contains("SSSSsssorry. LOL. We've experienced some technical difficulties. Please enjoy this game of Snake while we work to resolve the issue.")
    cy.get('#game')
    cy.get('button').contains('start game')
  
  })

  it('Should load error page from a bad zones fetch', () => {
    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'https://look-at-this-snake-api.onrender.com/api/v1/noSnakeZones', {
        status: 200,
        body: zones
      })
    })

      cy.intercept('GET', 'https://look-at-this-snake-api.onrender.com/api/v1/snakes', {
        status: 500
      })

    cy.visit('http://localhost:3000/')
    cy.get('p').contains("SSSSsssorry. LOL. We've experienced some technical difficulties. Please enjoy this game of Snake while we work to resolve the issue.")
  })

  it('Should load error page from a bad snakes fetch', () => {
    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'https://look-at-this-snake-api.onrender.com/api/v1/noSnakeZones', {
        status: 500
      })
    })
    
      cy.intercept('GET', 'https://look-at-this-snake-api.onrender.com/api/v1/snakes', {
        status: 200
      })

    cy.visit('http://localhost:3000/')
    cy.get('p').contains("SSSSsssorry. LOL. We've experienced some technical difficulties. Please enjoy this game of Snake while we work to resolve the issue.")
  })
})