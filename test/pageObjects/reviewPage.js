class ReviewPage {
  get productPrices() {
    return $$("//tr/td[4]/strong");
  }
  get totalPrice() {
    return $("h3 strong");
  }

  async sumOfProducts() {
    const sumOfProducts = (
      await Promise.all(
        await this.productPrices.map(async (productPrice) =>
          parseInt((await productPrice.getText()).split(".")[1].trim())
        )
      )
    ).reduce((acc, price) => acc + price, 0);
    await console.log(sumOfProducts);
  }
  async totalFormatedPrice() {
    const totalValue = await this.totalPrice.getText();
    const totalIntValue = parseInt(totalValue.split(".")[1].trim());
  }
}
module.exports = new ReviewPage();
