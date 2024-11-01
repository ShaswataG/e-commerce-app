const productModel = require('../models/productsModel')

const createProduct = async productInfo => {
  try {
    const { name, imageUrl, price, inventory } = productInfo
    const newProduct = new productModel({
      name: name,
      image_url: imageUrl,
      price: price,
      inventory: inventory,
    })
    return await productModel.create(newProduct)
  } catch (error) {
    throw error
  }
}

const getProduct = async productId => {
  return await productModel.findById(productId)
}

const getProducts = async productQuery => {
  try {
    let { search } = productQuery
    console.log('productQuery: ', productQuery)
    const query = { $text: { $search: search } }
    let products
    if (!search || search.trim() === '') {
      products = await productModel.find()
    } else {
      products = await productModel.find(query)
    }
    return products
  } catch (error) {
    console.error(error.message)
    throw new Error(error.message)
  }
}

const updateProduct = async (productId, productInfo) => {
  const { name, imageUrl, price, inventory } = productInfo
  console.log(productId)
  return await productModel.findByIdAndUpdate(productId, {
    name: name,
    image_url: imageUrl,
    price: price,
    inventory: inventory,
  })
}

const deleteProduct = async productId => {
  return await productModel.findByIdAndDelete(productId)
}

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
}
