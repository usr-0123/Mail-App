//Unauthorized
export const notAuthorized = (res, message) => {
  return res.status(401).json({ message: message });
};

export const sendBadRequest = (res, message) => {
  return res.status(400).json({ message: message });
};

//Missing or not found
export const sendNotFound = (res, message) => {
  return res.status(404).json({ message: message });
};

// Created successful
export const sendCreated = (res, message) => {
  return res.status(201).json({ message: message });
};

// Deleted successful
export const sendDeleteSuccess = (res, message) => {
  return res.status(200).json({ message: message });
};

// Server error
export const sendServerError = (res, message) => {
  return res.status(500).json({ message: message });
};

// Send success
export const sendSuccess = (res, message) => {
  return res.status(200).json({ message: message });
};

// Paginate function
export const paginate = (data, req, res) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const startIndex = (page - 1) * limit; // 0, 10, 20, 30
  const endIndex = page * limit; // 10, 20, 30, 40
  const results = {};

  if (endIndex < data.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  results.results = data.slice(startIndex, endIndex);
  res.status(200).json(results);
};

// Order data
export const orderData = (data, order) => {
  if (order === "asc") {
    return data.sort((a, b) => a.id - b.id);
  } else if (order === "desc") {
    return data.sort((a, b) => b.id - a.id);
  }
};

// Null and undefined values
export const checkIfValuesIsEmptyNullUndefined = (req, res, obj) => {
  for (let key in obj) {
    if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
      return false;
    }
  }
  return true;
};
