(function () {
  const MedicalProduct = new Product({
    name: 'Medical scrub',
    category: 'Clothes',
    description:
      'Choose from eight different scrub suit colours, from cheerful raspberry (also useful to hide blood stains) to classic navy blue, theres something for everyone in every role. The seven different sizes from XS to 3XL are colour-coded.',
    imageSrc: 'images/man.jpg',
    price: 20
  })

  const productInfo = MedicalProduct.getInfo()

  const UINodeTemplate = document.querySelector('.js-product')
  const ProductListElement = document.querySelector('.js-product-list')

  const CardUI = new ProductUI(UINodeTemplate, ProductListElement)

  CardUI.setUp(productInfo)

  const MedicalProduct2 = new Product({
    name: 'Medical shoes',
    category: 'Shoes',
    description:
      'This Collection become a generation’s icon for all-day comfort in occupational and lifestyle environments.It offers incredibly long-lasting ease of wear, optimal arch support, and a wide heel strike to ensure stability.',
    imageSrc: 'images/shoes.jpg',
    price: 40
  })

  const productInfo2 = MedicalProduct2.getInfo()
  const CardUI2 = new ProductUI(UINodeTemplate, ProductListElement)

  CardUI2.setUp(productInfo2)

  const MedicalProduct3 = new Product({
    name: 'Medical uniform',
    category: 'Clothes',
    description:
      'Choose your preferred colour of Performance uniform to wear at work.They are made from lightweight, easycare and comfortable polycotton which can be washed at thermal disinfection temperatures. Add to your cart.',
    imageSrc: 'images/woman.jpg',
    price: 16
  })

  const productInfo3 = MedicalProduct3.getInfo()
  const CardUI3 = new ProductUI(UINodeTemplate, ProductListElement)
  CardUI3.setUp(productInfo3)

  UINodeTemplate.remove()

  const cartContainer = document.querySelector('.js-cart')
  const cartUI = new CartUI(cartContainer)
  const cart = new Cart()
})();
