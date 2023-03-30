const loginPage = require("../pageObjects/loginPage");
const shopPage = require("../pageObjects/shop");
const reviewPage = require("../pageObjects/reviewPage");
const expectchai = require("chai").expect;

const fs = require("fs");
const credentials = JSON.parse(fs.readFileSync("test/testData/loginTest.json"));
const e2eCredentials = JSON.parse(
  fs.readFileSync("test/testData/e2eTest.json")
);

describe("Ecommerce Application", async () => {
  credentials.forEach(({ username, password }) => {
    it("Login Fail page title-Smoke", async () => {
      //webdriverio Async  (Sync)

      await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await browser.getTitle());
      await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
      //Css Selector, Xpath
      await loginPage.Login(username, password);
      await console.log(await loginPage.alert.getText());
      await browser.waitUntil(
        async () =>
          (await loginPage.signIn.getAttribute("value")) === "Sign In",
        {
          timeout: 5000,
          timeoutMsg: "Error message is not showing up",
        }
      );
      await console.log(await loginPage.alert.getText());
      await expect(await loginPage.textInfo).toHaveTextContaining(
        "username is rahulshettyacademy and Password is learning"
      );
    });
  });

  e2eCredentials.forEach(({ products }) => {
    it("End-to-end test", async () => {
      // const products = ["iphone X", "Blackberry"];

      await browser.url("/loginpagePractise/");
      await loginPage.Login("rahulshettyacademy", "learning");
      await shopPage.checkout.waitForExist();
      await shopPage.addProductToCart(products);
      await shopPage.checkout.click();
      const sumOfProducts = await reviewPage.sumOfProducts();
      const totalIntValue = await reviewPage.totalFormatedPrice();
      // старт

      await expectchai(sumOfProducts).to.equal(totalIntValue);
      await $(".btn-success").click();
      // конец
      await $("#country").setValue("ind");
      await $(".lds-ellipsis").waitForExist({ reverse: true });
      await $("=India").click();
      await $("input[type='submit']").click();
      await expect($(".alert-success")).toHaveTextContaining("Success!");

      // await browser.pause(5000);
    });
  });
});
