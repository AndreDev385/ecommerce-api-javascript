class Memrepo {
  constructor(data){
    this.data = data
  }

  list(filters){
    let result = this.data
    if (!filters){
      return this.data
    }
  }
}

module.exports = Memrepo