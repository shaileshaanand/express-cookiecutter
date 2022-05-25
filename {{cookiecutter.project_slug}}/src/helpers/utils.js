const sanitize = (obj) => {
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
};

module.exports = { sanitize };
