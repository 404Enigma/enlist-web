const admin = require("../../src/db/db");

const verify_idtoken = (idToken) => {
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log(uid);
      // ...
    })
    .catch((error) => {
      // Handle error
    });
};

module.exports = { verify_idtoken };
