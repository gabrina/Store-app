class Products {
  constructor(parent, products, category) {
    this.parent = parent;
    this.products = products;
    this.currentCategory = category;
  }

  combinedShow(filterValue, filterCategory) {
    if (!filterValue && filterCategory === "all") {
      return this.products;
    } else if (filterValue && filterCategory === "all") {
      const filteredProducts = this.products.filter((product) =>
        product.title
          .trim()
          .toLowerCase()
          .includes(filterValue.trim().toLowerCase())
      );
      return filteredProducts;
    } else if (!filterValue && filterCategory) {
      const filteredProducts = this.products.filter(
        (product) => product.category === filterCategory
      );
      return filteredProducts;
    } else {
      //filterValue and filterCategory
      const filteredProducts = this.products.filter(
        (product) => product.category === filterCategory
      );
      const filteredProducts2 = filteredProducts.filter((product) =>
        product.title
          .trim()
          .toLowerCase()
          .includes(filterValue.trim().toLowerCase())
      );
      return filteredProducts2;
    }
  }

  showProducts(filterValue, filterCategory) {
    this.parent.innerHTML = "";
    const productsToShow = this.combinedShow(filterValue, filterCategory);
    productsToShow.forEach((product) => this.createCard(product));
  }

  createCard(data) {
    const { id, image, price, rating, title } = data;

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
