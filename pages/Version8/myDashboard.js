import { expect } from "@playwright/test";
export class MyDashboard {
  constructor(page) {
    this.page = page;
    this.reorder = page.locator('//*[@id="my-orders-table"]/tbody/tr[1]/td[6]/span/a[2]');
    this.qtyCLick = page.locator("#shopping-cart-table > tbody > tr > td.product-cart-actions > input");
    this.quantity = page.locator('//*[@id="shopping-cart-table"]/tbody/tr/td[4]/input');
    this.updateBtn = page.locator('//*[@id="shopping-cart-table"]/tbody/tr/td[4]/button');

    this.grandTotal = page.locator('//*[@id="shopping-cart-totals-table"]/tfoot/tr/td[2]/strong/span');
    this.procesToCheckout = page.locator('//*[@id="top"]/body/div/div/div[2]/div/div/div/div[3]/div/ul/li[1]/button');
  }

  async goToShoppingCart(qty) {
    await this.reorder.click();
    // change QTY
    await this.qtyCLick.click();
    // wait and click for display update button
    expect(this.updateBtn).toBeVisible();
    await this.quantity.fill(qty);
    const oldGrandTotal = await this.grandTotal.innerText();
    await this.updateBtn.click();
    // Verify grand total is change
    const newGrandTotal = await this.grandTotal.innerText();
    expect(newGrandTotal).not.toBe(oldGrandTotal);
    await this.procesToCheckout.click();
  }
}
