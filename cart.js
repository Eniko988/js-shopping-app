(function () {
  class CartUI {
    constructor (element) {
      this.container = element

      PubSub.subscribe('updateCart', products => this.updateCart(products))
    }

    _rowTemplate (productData) {
      return `<tr><td>${productData.name}</td><td class="has-text-right">${productData.price}</td></tr>`
    }

    _buildCartHTML (productList) {
      let cartContent = ''
      for (const product of productList) {
        cartContent += this._rowTemplate(product)
      }
      return cartContent
    }

    updateCart (products) {
      this.container.innerHTML = this._buildCartHTML(products)
    }
  }

  window.CartUI = CartUI

  class Cart {
    constructor () {
      this.items = []
      PubSub.subscribe('addToCart', item => this.addItem(item))
    }

    addItem (item) {
      this.items.push(item)

      PubSub.publish('updateCart', this.getItems())
    }
    getItems () {
      return this.items
    }
  }

  window.Cart = Cart
})();
