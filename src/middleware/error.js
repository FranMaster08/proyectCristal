export const errorMiddleware = (err, req, res, next) => {
  if (!err) return next();
  return res.status(err.status).json({
    message: err.message,
    status: err.status,
    description: err.description,
  });
};
