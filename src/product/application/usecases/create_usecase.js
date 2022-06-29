class CreateProductUseCase {
  constructor(repo){
    self.repo = repo
  }

  execute(product){
    try {
       const product = this.repo.create()
       return product
    } catch (err) {
      console.log(err)
    }
  }
}