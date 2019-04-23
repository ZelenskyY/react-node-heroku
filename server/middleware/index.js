const DEVELOPER = "zelenskyy";
const ErrorMsg = {
  status: "error",
  message: "Не передано имя разработчика"
};

export const checkDeveloper = (req, res, next) => {
  if (req.query.developer === DEVELOPER) {
    next();
  } else {
    return res.json(ErrorMsg);
  }
};

export const treatQuery = (req, res, next) => {
  // mapping order
  const sortField = ["id", "username", "email", "status"].filter(
    val => val === req.query.sort_field
  );
  if (!sortField.length) req.query.sort_field = "id";

  // order
  const sortDirection = ["asc", "desc"].filter(
    val => val === req.query.sort_direction
  );
  if (!sortDirection.length) req.query.sort_direction = "asc";

  // offset
  const hasPage = req.query.page;
  if (!hasPage) req.query.page = 0;
  next();
};
