const Memrepo = require("../../repository/memrepo");
const ListUsecase = require("../../../application/usecases/list_usecase");
const uuid = require("uuid");

const data = [
  {
    code: uuid.v4(),
    name: "Mouse",
    price: 10,
  },
  {
    code: uuid.v4(),
    name: "Keyboard",
    price: 50,
  },
  {
    code: uuid.v4(),
    name: "Screen",
    price: 190,
  },
];

const listController = (req, res) => {
  const repository = new Memrepo(data);
  const listUsecase = new ListUsecase(repository);
  const result = listUsecase.execute();
  res.json(result);
};

module.exports = {
  listController,
};
