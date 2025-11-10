const roleChecker = async (req, res, role, next) => {
  const user = req.user;
  try {
    if (user.role !== role.toUpper()) {
      return res
        .status(403)
        .json({ message: "unauthorized - unmatching role" });
    }
    next();
  } catch (error) {
    console.log("error in rolecheker", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
