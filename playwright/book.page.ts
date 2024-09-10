import { Page } from "@playwright/test";

export class BookPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/books');
  }

  async clickAddButton() {
    await this.page.getByRole('button', { name: 'Add a new book' }).click();
  }

  async typeIsbn(isbn: string) {
    await this.page.getByLabel('ISBN').fill(isbn);
  }

  async typeAuthor(author: string) {
    await this.page.getByLabel('Author').fill(author);
  }

  async typeTitle(title: string) {
    await this.page.getByLabel('Title').fill(title);
  }

  async clickApplyButton() {
    await this.page.getByRole('button', { name: 'Apply' }).click();
  }

  getBookCard(bookTitle: string) {
    return this.page.getByText(bookTitle);
  }
}
