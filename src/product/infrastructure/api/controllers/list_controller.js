const uuid = require("uuid");
const Memrepo = require("../../repository/memrepo");
const ListUsecase = require("../../../application/usecases/list_usecase");
const {
  ProductListRequestObject,
} = require("../../request_objects/list_request_objects");
const { STATUS_CODES } = require("./index");

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
  let qryParams = {
    filters: req.query,
  };

  console.log("params", qryParams);

  const request = ProductListRequestObject.fromObj(qryParams);
  const repository = new Memrepo(data);
  const listUsecase = new ListUsecase(repository);
  const result = listUsecase.execute(request);
  res.json(result.value())
};

module.exports = {
  listController,
};
