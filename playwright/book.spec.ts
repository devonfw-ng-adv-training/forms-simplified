import { test, expect } from './base';

test.describe('Book management', () => {
  test.beforeEach(async ({ request }) => {
    await request.post(`/api/seed`);
  })

  test.describe('Adding a book', () => {
    test.beforeEach(async ({bookPage}) => {
      await bookPage.goto();
    })

    test('should add a new book', async ({page, bookPage}) => {
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

    test.beforeEach(async ({ bookPage, request }) => {
      const book = {
        author: "Robert Martin",
        title: bookTitle,
        isbn: "9780132350884",
      }
      await request.post(`/api/book`, {data: book});
      await bookPage.goto();
    })

    test('should update the book title', async ({page, bookPage}) => {
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
