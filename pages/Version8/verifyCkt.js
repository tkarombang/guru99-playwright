import { expect } from "@playwright/test";
export class VerifyChekoutProcess {
  constructor(page) {
    this.verifyOrder = page.locator('//*[@id="top"]/body/div/div/div[2]/div/div/h2');
    this.orderNumber = page.locator('//*[@id="top"]/body/div/div/div[2]/div/div/p[1]/a');
  }

  async noteOrderNumber() {
    const getNumb = await this.orderNumber.textContent();
    expect(this.verifyOrder).toBeVisible;
    expect(getNumb).toBeDefined();
    console.log("Order Number: ", getNumb);
  }
}
