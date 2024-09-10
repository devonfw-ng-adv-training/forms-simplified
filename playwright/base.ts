import { test as base } from '@playwright/test';
import { BookPage } from "./book.page";

type MyFixtures = {
  bookPage: BookPage
}

export const test = base.extend<MyFixtures>({
  bookPage: async ({ page }, use) => {
    await use( new BookPage(page));
  },
});

export { expect } from '@playwright/test';
