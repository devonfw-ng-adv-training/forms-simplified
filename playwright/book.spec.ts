import { BookPage } from "./book.page";
import { test, expect } from '@playwright/test';

let bookPage;

test.describe('Book management', () => {
  test.beforeEach(async ({ page, request }) => {
    bookPage = new BookPage(page);
    await request.post(`/api/seed`);
  })

  test.describe('Adding a book', () => {
    test.beforeEach(async () => {
      await bookPage.goto();
    })

    test('should add a new book', async ({page}) => {
      const title = 'Lord of the Rings';
      await bookPage.clickAddButton();
      await bookPage.typeIsbn('9780544003415');
      await bookPage.typeAuthor('J.R.R. Tolkien');
      await bookPage.typeTitle(title);

      await bookPage.clickApplyButton();
      await page.waitForResponse(/\/api\/book/);

      await expect(bookPage.getBookCard(title)).toBeVisible();
    })
  })


  test.describe('Updating a book', () => {
    let bookTitle = "Clean Code";

    test.beforeEach(async ({ page, request }) => {
      const book = {
        author: "Robert Martin",
        title: bookTitle,
        isbn: "9780132350884",
      }
      await request.post(`/api/book`, {data: book});
      bookPage.goto();
    })

    test('should update the book title', async ({page}) => {
      const newTitle = 'This is a new title';
      await bookPage.getBookCard(bookTitle).click();
      await bookPage.typeTitle(newTitle);

      await bookPage.clickApplyButton();

      await page.waitForResponse(/\/api\/book/);

      await expect(bookPage.getBookCard(bookTitle)).not.toBeVisible();
      await expect(bookPage.getBookCard(newTitle)).toBeVisible();
    })
  })
})
