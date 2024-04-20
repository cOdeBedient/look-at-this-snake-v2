describe('LATSTLATP', () => {
  it('should arrive at landing page and validate all elements', () => {

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

    cy.visit('http://localhost:3000/')
      .get('.sc-beySPh > :nth-child(2)').contains('h2', "Look at This Snake Then Look at This Puppy")
      .get('.sc-beySPh > :nth-child(2)').contains('h3', "A phobic deprogramming tool designed by someone with no credentials")
      .get('.sc-guDLey > div').contains('label', 'Level 1')
      .get('.sc-guDLey > div').contains('label', 'Level 2')
      .get('.sc-guDLey > div').contains('label', 'Level 3')
      .get('.sc-guDLey > div').contains('label', 'Level 4')
      .get('a').contains("p", "click here to begin")
  })

  it('should navigate to game page, validate all elements, and play the game', () => {

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

    cy.visit('http://localhost:3000/')
    .get('a').contains("p", "click here to begin")
    .click()
    .url().should('eq', 'http://localhost:3000/game')
    .get('header').contains('h1', 'LATSTLATP')
    .get('.snake-display').contains('p', "Take 5 deep breaths, and then click the box to begin")
    .get('.boxes').children().should("have.length", 3)
    .get('.boxes').contains('p', '1')
    .get('.boxes').contains('p', '2')
    .get('.boxes').contains('p', '3')
    .get('.start-box')
    .click()

    .get('.snake-display').contains('p', "Look at this Snake:")
    .get('.snake-display').find('img').should('have.attr', 'src').should('include', 'https://www.thesprucepets.com/thmb/n0QvLg46o27XE8PjQSVtR6m7ZIo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/corn-snake-from-the-lower-florida-keys-530475947-588124bc5f9b58bdb3ec9f93.jpg')
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
    .click()

    .get('.snake-display').find('img').should('have.attr', 'src').should('include', 'https://kinovareptiles.com/wp-content/uploads/2019/04/2016-10-24-15.17.17_2-1024x887.jpg')
    .get("form").get('input[name="before"]').type('7').should("have.value", "07")
    .get("form").get('button').contains("initiate processing")
    .click()

    cy.tick(3300)
    .get("form").get('input[name="after"]').type('3').should("have.value", "03")
    .get("form").get('button').contains("I'm ready to see the next snake")
    .click()

    .get('.snake-display').find('img').should('have.attr', 'src').should('include', 'https://reptilerapture.net/assets/images/honduran-milksnake-adult-female-5feet.jpg')
    .get("form").get('input[name="before"]').type('7').should("have.value", "07")
    .get("form").get('button').contains("initiate processing")
    .click()

    cy.tick(3300)
    .get("form").get('input[name="after"]').type('6').should("have.value", "06")
    .get("form").get('button').contains("I'm ready to see the next snake")
    .click()

    .get('header').contains('h1', 'LATSTLATP')
    .get('h4').contains('You completed level 1.')
    .get('h4').contains('Your compiled pre-treatment fear totals indicate a high level of ophidiophobia.')
    .get('h4').contains('Fortunately, this treatment was extremely beneficial to you! We will be celebrated by science for years to come!')
    .get('h4').contains('Would you like to continue with more processing?')
    .get('.back-button').contains('return to homepage')
    .click()
    .url().should('eq', 'http://localhost:3000/')
  })
})