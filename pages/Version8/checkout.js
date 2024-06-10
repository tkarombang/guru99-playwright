export class ProcessCheckout {
  constructor(page) {
    this.page = page;
    this.continueBilling = page.locator('//*[@id="billing-buttons-container"]/button');
    this.continueShipping = page.locator('//*[@id="shipping-method-buttons-container"]/button');
    this.radioMoneyOrder = page.locator('//*[@id="p_method_checkmo"]');
    this.continuePayment = page.locator('//*[@id="payment-buttons-container"]/button');
    this.placeOrderBtn = page.locator('//*[@id="review-buttons-container"]/button/span/span');
  }

  async processCkt() {
    await this.continueBilling.click();
    await this.continueShipping.click();
    await this.radioMoneyOrder.click();
    await this.continuePayment.click();
    await this.placeOrderBtn.click();
  }
}
