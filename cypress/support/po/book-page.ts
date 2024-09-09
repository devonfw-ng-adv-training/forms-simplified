export const bookPage = {
    clickAddButton() {
        cy.get('[data-cy="add-book-button"]').click();
    },
    typeIsbn(isbn: string) {
        cy.get('[data-cy="isbn-input"]').clear().type(isbn);
    },
    typeAuthor(author: string) {
        cy.get('[data-cy="author-input"]').clear().type(author);
    },
    typeTitle(title: string) {
        cy.get('[data-cy="title-input"]').clear().type(title);
    },
    clickApplyButton() {
        cy.get('[data-cy="apply-button"]').click();
    },
    getBookCard(bookId: number) {
        return cy.get(`[data-cy="book-card-${bookId}"]`)
    }
};