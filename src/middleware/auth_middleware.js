const admin = require("../../src/db/db");

function savecookie(idtoken, res) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  admin
    .auth()
    .createSessionCookie(idtoken, { expiresIn })
    .then(
      (sessionCookie) => {
        const options = { maxAge: expiresIn, httpOnly: true, secure: true };
        res.cookie("__session", sessionCookie, options);

        admin
          .auth()
          .verifyIdToken(idtoken)
          .then(function (decodedClaims) {
            res.redirect("/tasks");
          });
      },
      (error) => {
        console.log(error);
        res.status(401).send("UnAuthorised Request");
      }
    );
}

function checkCookie(req, res, next) {
  const sessionCookie = req.cookies.__session || "";
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then((decodedClaims) => {
      req.decodedClaims = decodedClaims;
      next();
    })
    .catch((error) => {
      // Session cookie is unavailable or invalid. Force user to login.
      res.redirect("/login");
    });
}

module.exports = {
  checkCookie,
  savecookie,
};
