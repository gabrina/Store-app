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
    const { category, id, image, price, rating, title } = data;

    const card = document.createElement("div");
    card.id = "card";
    card.innerHTML = `
    <div id="card-upper">
      <div id="rating">
       <i class="fa-solid fa-star"></i><span>${rating.rate}</span>
      </div>
      <div id="count">
        <i class="fa-solid fa-user"></i><span>${rating.count}</span>
      </div>
    </div>
    <img src="${image}" id="product-image">
    <div id="product-info">
      <h3 id="product-name">${title}</h3>
      <div id="control">
        <span id="product-price">${price}KT</span>
        <button data-id="${id}">Buy<i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    </div>`;
    this.parent.appendChild(card);
  }
}

export default Products;
