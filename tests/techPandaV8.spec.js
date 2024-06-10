// GURU99 TEST CASE 8

import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/Version8/login";
import { MyDashboard } from "../pages/Version8/myDashboard";
import { ProcessCheckout } from "../pages/Version8/checkout";
import { VerifyChekoutProcess } from "../pages/Version8/verifyCkt";

test("Verify you are able to change or reorder previously added product", async ({ page }) => {
  const Login = new LoginPage(page);
  const MyshoppingCart = new MyDashboard(page);
  const Checkout = new ProcessCheckout(page);
  const NoteTheOrder = new VerifyChekoutProcess(page);
  // 1. GO TO HTTP://LIVE.TECHPANDA.ORG
  await page.goto("http://live.techpanda.org/");
  // 2. CLICK ON MY ACCOUNT LINK &
  // 3. LOGIN IN APPLICATION USING PREVIOUSLY CREATED CREDENTIAL
  await Login.gotoLogin();
  await Login.login("zxc@gmail.com", "123456");
  // 4. CLICK REORDER LINK &
  // 5. VERIFY GRAND TOTAL IS CHANGE
  await MyshoppingCart.goToShoppingCart("10");
  // 6. COMPLETE BILLING AND SHIPPING INFORMATION
  await Checkout.processCkt();
  await page.waitForURL("http://live.techpanda.org/index.php/checkout/onepage/success/");
  // 7. VERIFY ORDER IS GENERATED AND NOTE THE ORDER NUMBER
  await NoteTheOrder.noteOrderNumber();
  await page.pause();
});
