class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }

  showProducts(filteredCategory = null) {
    this.parent.innerHTML = "";
    const filtered = filteredCategory
      ? this.products.filter((p) => p.category.includes(filteredCategory))
      : this.products;
    filtered.forEach((product) => this.createCard(product));
  }

  createCard(data) {
    const { id, title, price, image } = data;

    const card = document.createElement("div");
    card.id = "card";
    card.innerHTML = `
      <img src="${image}" id="product-image">
      <div id="product-info">
        <h3 id="product-name">${title}</h3>
        <div id="control">
          <span id="product-price">${price}KT</span>
          <button data-id="${id}">+</button>
        </div>
      </div>`;
    this.parent.appendChild(card);
  }
}

export default Products;
