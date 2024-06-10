import { expect } from "@playwright/test";
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.account_link = page.locator('//*[@id="header"]/div/div[2]/div/a/span[1]');
    this.expect_header = page.locator('//*[@id="header-account"]');
    this.nav_linkLogin = page.locator('//*[@id="header-account"]/div/ul/li[6]/a');
    this.username_textBox = page.locator("#email");
    this.password_textBox = page.locator("#pass");
    this.login_button = page.locator('//*[@id="send2"]/span/span');
  }

  async gotoLogin() {
    // 2. CLICK ON MY ACCOUNT LINK
    await this.account_link.click();
    expect(this.expect_header).toBeVisible();
    // 3. LOGIN IN APPLICATION USING PREVIOUSLY CREATED CREDENTIAL
    await this.nav_linkLogin.click();
  }

  async login(user, pass) {
    await this.username_textBox.type(user);
    await this.password_textBox.type(pass);
    await this.login_button.click();
  }
}
