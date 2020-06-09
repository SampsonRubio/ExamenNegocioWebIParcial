exports.home = (req, res, next) => {
  res.render("calculo");
};

exports.calculo = (req, res, next) => {
  console.log(req.body);
};

exports.cuota = function (capital, interes, tiempo) {
  return (capital * interes) / Math.pow((1 - (1 + interes), -tiempo));
};
