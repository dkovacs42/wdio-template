import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import LoginPage from "../pageobjects/login.page.ts";
import SecurePage from "../pageobjects/secure.page.ts";

Given("I am on the Login Page", async () => {
  await LoginPage.open();
  await expect(LoginPage.inputPassword).toBeExisting();
});

When("I login with {} and {}", async (username, password) => {
  await LoginPage.login(username, password);
});

Then("I should see a flash message saying {}", async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(
    expect.stringContaining(message)
  );
});
