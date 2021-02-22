const { User } = require("../models");

const {
  hashPassword,
  passwordValid,
  createToken,
} = require("../middleware/index");

const CreateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await hashPassword(password);
    const user = await User.create({
      user_name: username,
      email: email,
      password_digest: password_digest,
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const LoginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true,
    });
    if (
      user &&
      (await passwordValid(req.body.password, user.password_digest))
    ) {
      let payload = {
        id: user.id,
      };
      let token = createToken(payload);
      return res.send({ user, token });
    }
  } catch (error) {
    throw error;
  }
};

const RefreshSession = async (req, res) => {
  try {
    const { token } = res.locals;
    const user = await User.findByPk(token.id, {
      attributes: ["id", "user_name", "email"],
    });
    res.send({ user, status: "OK" });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateUser,
  LoginUser,
  RefreshSession,
};
