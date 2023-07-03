import { test, expect } from "@playwright/test";


test("Generate a random fact", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("RandomCats");

  const initialFact = page.locator(".cat_card p");
  await expect(initialFact).not.toHaveText("");
  const initialFactText = await initialFact.innerText();
  expect(initialFactText?.length).toBeGreaterThan(0);

  const initialImage = await page.locator(".cat_card img").getAttribute("src");
  expect(initialImage?.length).toBeGreaterThan(0);

  await page.locator(".main_button").click();

  const generatedFact = page.locator(".cat_card p");
  await expect(generatedFact).not.toHaveText("");
  const generatedFactText = await generatedFact.innerText();
  expect(generatedFactText?.length).toBeGreaterThan(0);

  const generatedImage = await page
    .locator(".cat_card img")
    .getAttribute("src");
  expect(generatedImage?.length).toBeGreaterThan(0);

  expect(initialFact).not.toBe(generatedFact);
  expect(initialImage).not.toBe(generatedImage);

  console.log(
    "--> Initial fact: "+
    initialFactText+
    "\n--> Generated fact: ",
    generatedFactText,
    "\n--> Initial image: ",
    initialImage,
    "\n--> Generated image: ",
    generatedImage
  );
});
