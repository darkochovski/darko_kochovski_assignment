import { Page, expect } from "@playwright/test";

export class Homepage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage() {
    await this.page.waitForSelector('div.navbar-current-city', { state: 'visible' });
    await this.page.waitForSelector('.container', { state: 'visible' });
    await (await this.page.waitForSelector("img[alt='pulse.eco logo']")).click();
    await this.page.waitForSelector('//h1[text()="Co-create the future of your city!"]', { state: 'visible' });
    await this.page.waitForSelector(".dropdown", { state: "visible" });
  }

  async selectCountryAndCity(country: string, city: string) {
    const citySelector = `p[data-name='${city}']`;

    // Wait for the dropdown to be visible and clickable
    await this.page.waitForSelector(".dropdown", { state: "visible" });

    // Click the dropdown to open it
    await Promise.all([
        this.page.click(".dropdown")
    ]);

    // Hover over the country to reveal cities
    await this.page.hover(`p:has-text("${country}")`);

    // Wait for the city selector to appear and click it
    await this.page.waitForSelector(citySelector, { state: "visible" });
    await this.page.click(citySelector);

    // Click the button to view the city map
    await this.page.click("#gotoCityButton");

    return city;
}
}
