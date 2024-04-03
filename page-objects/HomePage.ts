import { Page, expect } from "@playwright/test";

export class Homepage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePageURL() {
    await this.page.goto('https://pulse.eco/');
    await this.page.waitForSelector(".dropdown", { state: "visible" });
}

  async navigateToHomePageFromLogo() {
    await this.page.waitForSelector('div.navbar-current-city', { state: 'visible' });
    await this.page.waitForSelector('.container', { state: 'visible' });
    await (await this.page.waitForSelector("img[alt='pulse.eco logo']")).click();
    await this.page.waitForSelector('//h1[text()="Co-create the future of your city!"]', { state: 'visible' });
    await this.page.waitForSelector(".dropdown", { state: "visible" });
  }

  async selectCountryAndCity(country: string, city: string) {
    const citySelector = `p[data-name='${city}']`;
    await this.page.waitForSelector(".dropdown", { state: "visible" });
    await Promise.all([
        this.page.click("span.placeholder.selectedCity")
    ]);
    await this.page.hover(`p:has-text("${country}")`);
    await this.page.waitForSelector(citySelector, { state: "visible" });
    await this.page.click(citySelector);
    await this.page.click("#gotoCityButton");
    return city;
}
}
