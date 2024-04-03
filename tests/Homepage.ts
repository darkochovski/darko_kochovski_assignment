import { test } from "@playwright/test";
import { Homepage } from "../page-objects/HomePage";
import { page, setupPlaywright, teardownPlaywright } from "../playwrightSetup";
import { MapPage } from "../page-objects/MapPage";
import { macedonianCities } from "../testdata";

test.beforeAll(setupPlaywright);
test.afterAll(teardownPlaywright);
test.setTimeout(60000);

test("Verify the navigation to the city map", async () => {
  const homePage = new Homepage(page);
  const mapPage = new MapPage(page);
  for (const city of macedonianCities) {
    const selectedCity = await homePage.selectCountryAndCity("Macedonia", city);
    await mapPage.verifyCityMapRedirected(selectedCity);
    await homePage.navigateToHomePageURL();
  }
});
