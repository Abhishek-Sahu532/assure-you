exports.isAuthenticate = async (req, res, next) => {
  try {
    const token = req.cookie;
    console.log(token);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
