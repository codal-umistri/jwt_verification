const handleValidationError = (res, errorMessage) => {
  return res.status(400).json({ message: errorMessage });
};

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return email.match(emailRegex);
};

exports.validateInput = (req, res, next) => {
  if (
    req.body?.name === "undefined" ||
    req.body?.email === "undefined" ||
    req.body?.password === "undefined" ||
    req.body?.confirm_password === "undefined" ||
    !!!req.body?.name?.trim() ||
    !!!req.body?.email?.trim() ||
    !!!req.body?.password?.trim() ||
    !!!req.body?.confirm_password?.trim()
  ) {
    return handleValidationError(res, "Please fill in all fields");
  } else if (!validateEmail(req.body.email)) {
    return handleValidationError(res, "Please enter a valid email");
  } else if (req.body.password !== req.body.confirm_password) {
    return handleValidationError(res, "Passwords do not match");
  }

  next();
};

exports.validateLoginInputs = (req, res, next) => {
  if (
    req.body?.email === "undefined" ||
    req.body?.password === "undefined" ||
    !!!req.body?.email?.trim() ||
    !!!req.body?.password?.trim()
  ) {
    return handleValidationError(res, "Please fill in all fields");
  } else if (!validateEmail(req.body.email)) {
    return handleValidationError(res, "Please enter a valid email");
  }

  next();
};

exports.checkInputs = (req, res, next) => {
  if (req.body?.email === "undefined" || !!!req.body?.email?.trim()) {
    return handleValidationError(res, "Please fill in all fields");
  } else if (!validateEmail(req.body.email)) {
    return handleValidationError(res, "Please enter a valid email");
  }

  next();
};

exports.validateNoteInput = (req, res, next) => {
  if (
    req.body.description === "undefined" ||
    !!!req.body?.description?.trim() ||
    req.body.title === "undefined" ||
    !!!req.body?.title?.trim()
  )
    return handleValidationError(res, "Please fill in all fields");

  next();
};

exports.validateDeleteNoteInput = (req, res, next) => {
  if (req.body.title === "undefined" || !!!req.body?.title?.trim())
    return handleValidationError(res, "Please fill in all fields");

  next();
};

