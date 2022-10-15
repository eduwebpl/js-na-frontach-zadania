const paginationMiddleware =
  ({ limitKey = 'limit', skipKey = 'skip' }) =>
  (req, res, next) => {
    console.log(req.query)
    if (req.query[skipKey]) {
      req.skip = Number(req.query[skipKey]);
    }
    if (req.query[limitKey]) {
      req.limit = Number(req.query[limitKey]);
    }
    next();
  };

export default paginationMiddleware;
