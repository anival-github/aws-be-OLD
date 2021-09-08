"use strict";

const productList = [
  {
    count: 4,
    description: "Short Product Description1",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 1400,
    title: "Trumpet dress",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_mzOM4P5t37qjkBb5xFKP4zpfmPdacvH1w&usqp=CAU",
  },
  {
    count: 6,
    description: "Short Product Description3",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
    price: 1500,
    title: "Sheath dress",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cPnzAplD7jZmSEtMymdbz-2mDm9txTdEMg&usqp=CAU",
  },
  {
    count: 7,
    description: "Short Product Description2",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a2",
    price: 1100,
    title: "Sack dress",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWIECe8iudOKz8XuHDqzzY_PmXl74S7ew7w&usqp=CAU",
  },
  {
    count: 12,
    description: "Short Product Description7",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 1250,
    title: "Wrap around dress",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdErBLAYrpVLNP7Rvye59k9vQOFDluKoGAnA&usqp=CAU",
  },
  {
    count: 7,
    description: "Short Product Description2",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 23,
    title: "Layered dress",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwn0xz8jtXyiUrn2nleLFCgxLXh2o5KeTi2w&usqp=CAU",
  },
  {
    count: 8,
    description: "Short Product Description4",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 900,
    title: "Shift dress",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf39Ih7H2CHUs3VHsogpJzueSUfEB5zJaCfg&usqp=CAU",
  },
  {
    count: 2,
    description: "Short Product Descriptio1",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 870,
    title: "Sundress",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUJ6Yy6WaHJyYvNtkknS6toVOa89M4ltc-w&usqp=CAU",
  },
  {
    count: 3,
    description: "Short Product Description7",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 1050,
    title: "Tutu dress",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUBs3UDx-kTB2XOd21dtlf7cedSHknjcP_Q&usqp=CAU",
  },
];

const formatResponse = (body) => {
  var response = {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    "isBase64Encoded": false,
    "multiValueHeaders": {
      "X-Custom-Header": ["My value", "My other value"],
    },
    "body": body
  }
  return response
};

var formatError = (error) => {
  var response = {
    "statusCode": error.statusCode,
    "headers": {
      "Content-Type": "text/plain",
      "x-amzn-ErrorType": error.code,
      "Access-Control-Allow-Origin": "*",
    },
    "isBase64Encoded": false,
    "body": error.code + ": " + error.message
  }
  return response
}

const serialize = (object) => {
  return JSON.stringify(object, null, 2)
};

const successHandler = (result) => {
  return formatResponse(serialize(result));
}

module.exports.getProductsList = async (event) => {
  try {
    return formatResponse(serialize(productList))
  } catch(error) {
    return formatError(error)
  }
};

module.exports.getProductsById = async (event) => {
  try {
    const { productId } = event.pathParameters || {};

    const product = productList.find((list) => list.id === productId);

    if (!product) {
      throw new Error("there is no productId found");
    }

    return successHandler(product);
  } catch(error) {
    return formatError(error)
  }
};
