const signup = (req, res, next) => {
  const { name, email, password, conformPassword } = req.body;
  return res.status(200).json({
    success: true,
    data: {},
  });
};

module.exports = {
  signup,
};
