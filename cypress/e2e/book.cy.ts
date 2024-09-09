import { bookPage } from "cypress/support/po/book-page";

describe('Book management', () => {
  beforeEach(() => {
    cy.request('POST', '/api/seed');
  })

  context('Adding a book', () => {
    beforeEach(() => {
      cy.visit('/books')
    })

    it('should add a new book', () => {
      bookPage.clickAddButton();
      bookPage.typeIsbn('9780544003415');
      bookPage.typeAuthor('J.R.R. Tolkien');
      bookPage.typeTitle('Lord of the Rings');

      cy.intercept('POST', '/api/book').as('addBook');
      cy.intercept('GET', '/api/book').as('reloadBook');

      bookPage.clickApplyButton();

      cy.wait(['@addBook', '@reloadBook']).then(([addBookInterception]) => {
        const bookId = addBookInterception.response.body.id;
        bookPage.getBookCard(bookId).should('exist')
      })
    })
  })

  context('Updating a book', () => {
    let bookId: number;

    beforeEach(() => {
      const book = {
        author: "Joshua Bloch",
        title: "Effective Java, 2nd Edition",
        isbn: "9780321356680",
      }
      cy.request('POST', '/api/book', book).then((response) => {
        bookId = response.body.id;
      });
      cy.visit('/books')
    })

    it('should update the book title', () => {
      const newTitle = 'This is a new title';

      bookPage.getBookCard(bookId).click();
      
      bookPage.typeTitle(newTitle);

      cy.intercept('POST', '/api/book').as('addBook');
      cy.intercept('GET', '/api/book').as('reloadBook');

      bookPage.clickApplyButton();

      cy.wait(['@addBook', '@reloadBook']);
      bookPage.getBookCard(bookId).should('contain.text', newTitle);
    })
  })
})
