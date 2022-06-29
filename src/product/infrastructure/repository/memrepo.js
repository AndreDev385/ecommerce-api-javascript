class Memrepo {
  constructor(data){
    this.data = data
  }

  list(filters = null){
    let response = this.data
    // There is Filters ?
    if(!filters){
      // Return data without filters
      console.log(filters, 'memrepo')
      return response
    }
    // Filter data
    if (filters['code__eq']){
      response = response.filter((p) => p.code === filters['code__eq'])
    }
    if (filters['price__gt']){
      response = response.filter((p) => p.price > filters['price__gt'])
    }
    if (filters['price__lt']){
      response = response.filter((p) => p.price < filters['price__lt'])
    }
    if (filters['name__eq']){
      response = response.filter((p) => p.name === filters['name__eq'])
    }
    return response
  }

  create(product){
    // Validar

    // Agregar al base de datos
    this.data.push(product)

    // Retornar el producto agregado
    return product
  }
}

module.exports = Memrepo