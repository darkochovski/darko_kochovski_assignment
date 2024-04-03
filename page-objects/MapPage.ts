import { Page, expect } from "@playwright/test";

export class MapPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToCity(city: string) {
    const formattedCity = city.toLowerCase().replace(/\s+/g, "");
    await this.page.goto(`https://${formattedCity}.pulse.eco/`);
  }

  async verifyCityMapRedirected(city: string) {
    const url = await this.page.url();
    const formattedCity = city.toLowerCase().replace(/\s+/g, "");
    expect(url).toBe(`https://${formattedCity}.pulse.eco/`);
    const citySelected = `//span[text()="${city}"]`;
    await this.page.waitForSelector('.pulse-logo', { state: 'visible' });
    await this.page.waitForSelector('div#wrapper>nav>ul', { state: 'visible' });
    await this.page.waitForSelector('div.filter-div.leaflet-control', { state: 'visible' });
    const elementExists = await this.page.waitForSelector(citySelected);
    expect(elementExists).toBeTruthy();
  }

  async navigateToAbout() {
    await this.page.click('//a[contains(text(),"About")]');
    await this.page.waitForSelector('h1');
  }

  async navigateToExploreData() {
    await this.page.click('//a[contains(text(),"Explore Data")]');
    await this.page.waitForSelector('div:has-text("From:")');
    await this.page.waitForSelector('div:has-text("To:")');
  }

  async exploreDataDatePickerSelection(fromDate: string, toDate: string) {
    await this.page.getByLabel('From:').click();
    await this.page.getByLabel('From:').fill(fromDate);
    await this.page.getByLabel('To:').click();
    await this.page.getByLabel('To:').fill(toDate);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async isDateErrorVisible() {
    const errorMessage = await this.page.waitForSelector('#dateFromError', { state: 'visible', timeout: 5000 });
    return errorMessage !== null;
  }

  async navigateToParticipate() {
    await this.page.click('//a[contains(text(),"Participate")]');
    await this.page.waitForSelector('section#participate>h5');
  }

  async navigateToAppStore() {
    await this.page.click('//a[contains(text(),"App Store")]');
    await this.page.waitForSelector('div:has-text("App Store Preview")');
  }

  async navigateToPlayStore() {
    await this.page.click('//a[contains(text(),"Play Store")]');
    await this.page.waitForSelector('a.f0UV3d');
  }

  async navigateToRegister() {
    await this.page.click('//a[contains(text(),"Register")]');
    await this.page.waitForSelector('div:has-text("Name: Email: Username:")');
  }

  async navigateToLogin() {
    await this.page.click('//a[contains(text(),"Log In")]');
    await this.page.waitForSelector('div:has-text("Username: Password: Remember")');
  }

  async switchToEnglish() {
    const isEnglishVisible = await this.page.isVisible('//span[text()="EN"]');
    if (!isEnglishVisible) {
      await this.page.click('a[type="button"]');
      await this.page.click('//span[text()="EN"]');
    }
  }
}
