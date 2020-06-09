exports.home = (req, res, next) => {
  res.render("calculo");
};

exports.calculoA = (req, res, next) => {
  console.log(req.body);
};
