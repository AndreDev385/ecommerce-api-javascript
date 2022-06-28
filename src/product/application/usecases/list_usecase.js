class ListUseCase {
  constructor(repo) {
    this.repo = repo;
  }

  execute(filters = null) {
    try {
      const products = this.repo.list();
      return products;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ListUseCase