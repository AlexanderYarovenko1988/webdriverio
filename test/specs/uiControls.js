let expectChai = require("chai").expect;

describe("Ecommerce Application", () => {
  it("UI Controls", async () => {
    await browser.url("/loginpagePractise/");
    (await $("#username")).setValue("rahulshettyacademy");
    (await $("#password")).setValue("learning");
    const radioButtons = await $$(".customradio");
    const userDropdown = radioButtons[1];
    await userDropdown.$("span").click();
    const modal = await $(".modal-body");
    await modal.waitForDisplayed();
    (await $("#cancelBtn")).click();
    const test = (await $$(".customradio")[0].$("span")).isSelected();
    console.log(test);
    await userDropdown.$("span").click();
    await modal.waitForDisplayed();
    await (await $("#okayBtn")).click();
    (await $$(".customradio")[0].$("span")).isSelected();
    await expect(modal).not.toBeDisabled();
    const dropdown = await $("select.form-control");
    await dropdown.selectByAttribute("value", "teach");
    await dropdown.selectByVisibleText("Consultant");
    await dropdown.selectByIndex(0);
    console.log(await dropdown.getValue());
    expectChai(await dropdown.getValue()).to.equal("stud");
  });

  it("Dynamic Dropdown Controls", async () => {
    await browser.url("/AutomationPractice/");
    (await $("#autocomplete")).setValue("ind");
    await browser.pause(1000);
    let items = await $$("[class='ui-menu-item'] div");
    for (const item of items) {
      if ((await item.getText()) === "India") {
        await item.click();
      }
    }
  });

  it("Checkboxes identification", async () => {
    await browser.url("/AutomationPractice/");
    const element = $$("input[type='checkbox']");
    await element[1].click();
    console.log((await element[1]).isSelected());
    await browser.saveScreenshot("screenshot.png");
  });
});

describe("Ecommerce Application", () => {
  it("UI Controls", async () => {
    await browser.url("/loginpagePractise/");
    (await $("#username")).setValue("rahulshettyacademy");
    (await $("#password")).setValue("learning");
    const radioButtons = await $$(".customradio");
    const userDropdown = radioButtons[1];
    await userDropdown.$("span").click();
    const modal = await $(".modal-body");
    await modal.waitForDisplayed();
    (await $("#cancelBtn")).click();
    const test = (await $$(".customradio")[0].$("span")).isSelected();
    console.log(test);
    await userDropdown.$("span").click();
    await modal.waitForDisplayed();
    await (await $("#okayBtn")).click();
    (await $$(".customradio")[0].$("span")).isSelected();
    await expect(modal).not.toBeDisabled();
    const dropdown = await $("select.form-control");
    await dropdown.selectByAttribute("value", "teach");
    await dropdown.selectByVisibleText("Consultant");
    await dropdown.selectByIndex(0);
    console.log(await dropdown.getValue());
    expectChai(await dropdown.getValue()).to.equal("stud");
  });

  it("Dynamic Dropdown Controls", async () => {
    await browser.url("/AutomationPractice/");
    (await $("#autocomplete")).setValue("ind");
    await browser.pause(1000);
    let items = await $$("[class='ui-menu-item'] div");
    for (const item of items) {
      if ((await item.getText()) === "India") {
        await item.click();
      }
    }
  });

  it("Checkboxes identification", async () => {
    await browser.url("/AutomationPractice/");
    const element = $$("input[type='checkbox']");
    await element[1].click();
    console.log((await element[1]).isSelected());
    // await browser.saveScreenshot("screenshot.png");
  });
});
