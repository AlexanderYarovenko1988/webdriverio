const expectchai = require("chai").expect;
describe("Ecommerce Aplication", async () => {
  it("End-to-end test", async () => {
    const products = ["iphone X", "Blackberry"];

    await browser.url("/loginpagePractise/");
    (await $("#username")).setValue("rahulshettyacademy");
    (await $("#password")).setValue("learning");
    await browser.waitUntil(
      async () => (await $("#signInBtn").getAttribute("value")) === "Sign In",
      {
        timeout: 5000,
        timeoutMsg: "Error message is not showing up",
      }
    );
    (await $("#signInBtn")).click();
    const link = await $("*=Checkout");
    await link.waitForExist();
    const cards = await $$("div[class='card h-100']");
    //const cards = await $$(".card.h-100");
    for (let i = 0; i < (await cards.length); i++) {
      const card = await cards[i].$("div h4 a");
      if (products.includes(await card.getText())) {
        await cards[i].$(".card-footer button").click();
      }
    }
    await link.click();
    const productPrices = await $$("//tr/td[4]/strong");
    const sumOfProducts = (
      await Promise.all(
        await productPrices.map(async (productPrice) =>
          parseInt((await productPrice.getText()).split(".")[1].trim())
        )
      )
    ).reduce((acc, price) => acc + price, 0);
    await console.log(sumOfProducts);
    const totalValue = await $("h3 strong").getText();
    const totalIntValue = parseInt(totalValue.split(".")[1].trim());
    await expectchai(sumOfProducts).to.equal(totalIntValue);
    await $(".btn-success").click();
    await $("#country").setValue("ind");
    await $(".lds-ellipsis").waitForExist({ reverse: true });
    await $("=India").click();
    await $("input[type='submit']").click();
    await expect($(".alert-success")).toHaveTextContaining("Success!");

    // await browser.pause(5000);
  });
});
