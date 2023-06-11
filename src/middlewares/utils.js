export const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.send(err);
};

export const routeNotFound = (req, res, next) => {
  const err = "404: route not found";
  next(err);
};
