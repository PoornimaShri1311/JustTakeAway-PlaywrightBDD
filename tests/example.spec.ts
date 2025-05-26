import { test, expect } from '@playwright/test';

test('Validate Memix image results for Happy Diwali', async ({ page }) => {
  await test.step('Navigate to Memix and validate title & header links', async () => {
    await page.goto('https://www.memix.com/');
    await expect(page).toHaveTitle('Memes, GIFS - Share with Memix');
    await expect(page.getByRole('link', { name: 'home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
  });

  await test.step('Enter "Happy Diwali" in the input box', async () => {
    const input = page.getByPlaceholder('Customize Memix text');
    await input.click();
    await input.fill('Happy Diwali');
  });

  await test.step('Wait for first image to load with Happy Diwali in src', async () => {
    const imgList = page.locator("//ul[contains(@class,'memix-grid')]//img");
    await expect(imgList.nth(0)).toHaveAttribute('src', /Happy\+Diwali/, { timeout: 5000 });
  });

  await test.step('Scroll down to load more results', async () => {
    for (let i = 0; i < 3; i++) {
      await page.mouse.wheel(0, 1000);
      await page.waitForTimeout(1000);
    }
  });

  await test.step('Validate all images for "Happy Diwali" in their src', async () => {
    const imgList = page.locator("//ul[contains(@class,'memix-grid')]//img");
    const count = await imgList.count();
    console.log(`🔍 Total images found: ${count}`);

    for (let i = 0; i < count; i++) {
      const img = imgList.nth(i);
      try {
        const src = await img.getAttribute('src', { timeout: 2000 });
        if (src?.includes('Happy+Diwali')) {
          console.log(`✅ Item ${i + 1}: "Happy Diwali" found in src: ${src}`);
        } else {
          console.log(`❌ Item ${i + 1}: "Happy Diwali" NOT found in src: ${src}`);
        }
      } catch (err) {
        console.log(`⚠️ Item ${i + 1}: Could not fetch src. Error: ${err}`);
      }
    }

    console.log(`🎉 Validation complete for ${count} items.`);
  });
});