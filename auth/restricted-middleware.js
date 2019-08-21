// const bcrypt = require("bcryptjs");

// const Users = require("../users/users-model.js");

// module.exports = function restricted(req, res, next) {
//   let { username, password } = req.headers;

//   if (username && password) {
//     Users.findBy({ username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(password, user.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: "Those are some bad creds" });
//         }
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   } else {
//     res.status(400).json({ message: "please provide valid credentials" });
//   }
// };

module.exports = (req, res, next) => {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ message: "get outta here bro" });
  }
};
