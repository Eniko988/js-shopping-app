;(function () {
  class ProductUI {
    constructor (templateElement, parentElement) {
      this.productImgSelector = '.js-product-image'
      this.productNameSelector = '.js-product-name'
      this.productCategorySelector = '.js-product-category'
      this.productDescriptionSelector = '.js-product-description'
      this.productPriceSelector = '.js-product-price'
      this.productButtonSelector = '.js-product-button'

      this.node = templateElement.cloneNode(true)
      parentElement.appendChild(this.node)

      this.productImgElement = this.node.querySelector(this.productImgSelector)
      this.productNameElement = this.node.querySelector(
        this.productNameSelector
      )
      this.productCategoryElement = this.node.querySelector(
        this.productCategorySelector
      )
      this.productDescriptionElement = this.node.querySelector(
        this.productDescriptionSelector
      )
      this.productPriceElement = this.node.querySelector(
        this.productPriceSelector
      )
      this.productButtonElement = this.node.querySelector(
        this.productButtonSelector
      )

      this.productButtonElement.addEventListener('click', this.handleClick)
    }

    handleClick () {
      const productData = this.dataset
      PubSub.publish('addToCart', productData)
    }

    setProductImage (src) {
      this.productImgElement.src = src
    }
    setProductName (name) {
      this.productNameElement.textContent = name
    }
    setProductCategory (category) {
      this.productCategoryElement.textContent = category
    }
    setProductDescription (description) {
      this.productDescriptionElement.textContent = description
    }
    setProductPrice (price) {
      this.productPriceElement.textContent = price
    }

    setUp (productInfo) {
      this.productImgElement.src = productInfo.imageSrc
      this.productNameElement.textContent = productInfo.name
      this.productCategoryElement.textContent = productInfo.category
      this.productDescriptionElement.textContent = productInfo.description
      this.productPriceElement.textContent = productInfo.price
      this.productButtonElement.dataset.name = productInfo.name
      this.productButtonElement.dataset.price = productInfo.price
    }
  }

  window.ProductUI = ProductUI

  class Product {
    constructor (productInfo) {
      this.name = productInfo.name
      this.category = productInfo.category
      this.description = productInfo.description
      this.imageSrc = productInfo.imageSrc
      this.price = productInfo.price
    }

    getName () {
      return this.name
    }
    getCategory () {
      return this.category
    }
    getDescription () {
      return `${this.name} is ${this.description}.`
    }
    getImg () {
      return this.imageSrc
    }
    getPrice () {
      return `€${this.price}`
    }

    getInfo () {
      return {
        name: this.name,
        category: this.category,
        description: this.description,
        imageSrc: this.imageSrc,
        price: `€${this.price}`
      }
    }
  }

  window.Product = Product
})()
