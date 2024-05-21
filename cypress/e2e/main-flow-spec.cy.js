describe('LATSTLATP', () => {
  it('should arrive at landing page and validate all elements', () => {
    cy.fixture('snakes.json').then(snakes => {
      cy.intercept('GET', 'https://no-snake-zones-api-a2b305ed7478.herokuapp.com/api/v1/snakes', {
        status: 201,
        body: snakes
      })
    })

    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'https://no-snake-zones-api-a2b305ed7478.herokuapp.com/api/v1/noSnakeZones', {
        status: 200,
        body: zones
      })
    })

    cy.visit('http://localhost:3000/')
      .get('.landing-container').contains('h2', "Look at This Snake Then Look at This Puppy")
      .get('.landing-container').contains('h3', "Just imagine puppies!!!")
      .get('.sc-guDLey > div').contains('label', 'Level 1')
      .get('.sc-guDLey > div').contains('label', 'Level 2')
      .get('.sc-guDLey > div').contains('label', 'Level 3')
      .get('.sc-guDLey > div').contains('label', 'Level 4')
      .get('a').contains("button", "confront your fears!")
  })

  it('should navigate to game page, validate all elements, and play the game', () => {
    cy.fixture('snakes.json').then(snakes => {
      cy.intercept('GET', 'https://no-snake-zones-api-a2b305ed7478.herokuapp.com/api/v1/snakes', {
        status: 201,
        body: snakes
      })
    })

    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'https://no-snake-zones-api-a2b305ed7478.herokuapp.com/api/v1/noSnakeZones', {
        status: 200,
        body: zones
      })
    })

    cy.visit('http://localhost:3000/')
    .get('a').contains("button", "confront your fears!")
    .click()
    .url().should('eq', 'http://localhost:3000/game')
    .get('header').contains('h1', 'LATSTLATP')
    .get('.snake-display').contains('p', "Take 5 deep breaths, and then click the box to begin")
    .get('.sc-iBdnpw').children().should("have.length", 3)
    .get('.sc-iBdnpw').contains('p', '1')
    .get('.sc-iBdnpw').contains('p', '2')
    .get('.sc-iBdnpw').contains('p', '3')
    .get('.start-box')
    .click()

    .get('.snake-display').contains('p', "Look👀 at this Snake:")
    .get('.snake-display').find('img').should('have.attr', 'src').should('include', 'https://www.thesprucepets.com/thmb/n0QvLg46o27XE8PjQSVtR6m7ZIo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/corn-snake-from-the-lower-florida-keys-530475947-588124bc5f9b58bdb3ec9f93.jpg')
    .get('.eval-form').contains('label', "Initial Anxiety (out of 10)")
    .get('.eval-form').get('input[name="before"]').should("have.value", "0")
    .get('.eval-form').get('input[name="before"]').type('3').should("have.value", "03")
    .get('.eval-form').get('button').contains("Let's Do This!")
    .click()

    cy.clock()
    cy.tick(1000)
    cy.get('.snake-display').contains('p', "You're ok! I'm here to help!")
    cy.tick(2600)

    cy.get("form").contains('label', "Updated Anxiety Level (out of 10)")
    .get("form").get('input[name="after"]').should("have.value", "0")
    .get("form").get('input[name="after"]').type('1').should("have.value", "01")
    .get("form").get('button').contains("Next Snake!")
    .click()

    .get('.snake-display').find('img').should('have.attr', 'src').should('include', 'https://kinovareptiles.com/wp-content/uploads/2019/04/2016-10-24-15.17.17_2-1024x887.jpg')
    .get(".eval-form").get('input[name="before"]').type('7').should("have.value", "07")
    .get(".eval-form").get('button').contains("Let's Do This!")
    .click()
    .tick(4600)
  
    cy.get(".eval-form").contains('label', "Updated Anxiety Level (out of 10)")
    .get(".eval-form").get('input[name="after"]').type('3').should("have.value", "03")
    .get(".eval-form").get('button').contains("Next Snake!")
    .click()

    .get('.snake-display').find('img').should('have.attr', 'src').should('include', '/assets/cute-doodle.jpg')
    .get(".eval-form").get('input[name="before"]').type('7').should("have.value", "07")
    .get(".eval-form").get('button').contains("Let's Do This!")
    .get('.eval-form').get('button')
    .click()
    .tick(4600)

    .get(".eval-form").get('input[name="after"]').type('3').should("have.value", "03")
    .get(".updated-form").get('button').contains("See Results")
    .click()

    .get('header').contains('h1', 'LATSTLATP')
    .get('.results').contains('h4', 'Hooray! You completed level 1!')
    .get('h4').contains('Before we started, you had a high level of ophidiophobia (snake fear!).')
    .get('h4').contains('Fortunately, this treatment was extremely beneficial to you! LATSTLATP will be celebrated by science for years to come!')
    .get('h4').contains('Would you like to continue with more processing?')
    .get('.back-button').contains('return to homepage')
    .click()
    .url().should('eq', 'http://localhost:3000/')
  })


  it('should sort data sets correctly', () => {
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
    .get('.sc-guDLey > div').contains('label', 'Level 2')
    .click()
    .get('a').contains("button", "confront your fears!")
    .click()
    .get('.start-box')
    .click()
    .get('.snake-display').find('img').should('have.attr', 'src').should('include', 'https://msherps.com/wp-content/uploads/2021/08/Lhol-1-scaled.jpg')
  })
})