describe("Windows and Frames Miscellanous", async () => {
  it("Parent and Child windows switch", async () => {
    await browser.url("/loginpagePractise/");
    await $(".blinkingText").click();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    console.log(await $("h1").getText()); //DOCUMENTS REQUEST
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    await console.log(await browser.getTitle());
    await browser.newWindow("https://google.com");
    await console.log(await browser.getTitle());
    await browser.switchWindow("https://rahulshettyacademy.com");
    await $("#username").setValue("helloswitchedback");
    await browser.pause(3000);
  });
  it("Parent and Child windows switch", async () => {
    await browser.url("AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    await console.log(await $$("a").length);
    await browser.switchToFrame(await $("[id='courses-iframe']"));
    console.log(await $("=Courses").getTagName());
    console.log(await $$("a").length);
    await browser.switchToFrame(null);
    await console.log(await $$("a").length);
  });
});
