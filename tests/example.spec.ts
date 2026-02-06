import { test, expect } from '@playwright/test';

test('homepage has title and main content', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Mohamed Reda/); // Adjust based on actual metadata

  // Check for main heading parts
  await expect(page.getByText('Crafting Digital')).toBeVisible();
  await expect(page.getByText('Experiences', { exact: true })).toBeVisible();

  // Check for the About Me section
  const aboutMe = page.getByText('About Me');
  await aboutMe.scrollIntoViewIfNeeded();
  await expect(aboutMe).toBeVisible();

  // Check for the profile image we just added
  const profileImage = page.locator('img[alt="Profile"]');
  await expect(profileImage).toBeVisible();
  await expect(profileImage).toHaveAttribute('src', '/file.jpeg');
});
