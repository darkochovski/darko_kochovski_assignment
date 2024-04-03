import { test } from "@playwright/test";
import { Homepage } from "../page-objects/HomePage";
import { page, setupPlaywright, teardownPlaywright } from "../playwrightSetup";
import { MapPage } from "../page-objects/MapPage";

test.beforeEach(setupPlaywright);
test.afterAll(teardownPlaywright);

test("Navigation bar links working properly", async () => {
  const homePage = new Homepage(page);
  const mapPage = new MapPage(page);
  const selectedCity = await homePage.selectCountryAndCity("Macedonia", 'Bitola');
  await mapPage.switchToEnglish();
  await mapPage.navigateToAbout();
  await mapPage.navigateToCity(selectedCity);
  await mapPage.navigateToExploreData();
  await mapPage.navigateToCity(selectedCity);
  await mapPage.navigateToParticipate();
  await mapPage.navigateToAppStore();
  await mapPage.navigateToCity(selectedCity);
  await mapPage.navigateToPlayStore();
  await mapPage.navigateToCity(selectedCity);
  await mapPage.navigateToRegister();
  await mapPage.navigateToCity(selectedCity);
  await mapPage.navigateToLogin();
});

test("Invalid date range.", async () => {
  const homePage = new Homepage(page);
  const mapPage = new MapPage(page);
  await homePage.selectCountryAndCity("Macedonia", 'Bitola');
  await mapPage.switchToEnglish();
  await mapPage.navigateToExploreData();
  await mapPage.exploreDataDatePickerSelection('2024-04-02','2024-04-16');
  await mapPage.isDateErrorVisible();
});
