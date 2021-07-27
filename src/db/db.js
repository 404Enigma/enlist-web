let admin = require("firebase-admin");
require("dotenv").config();
const serviceAccount = JSON.parse(process.env.GOOGLE_CREDS);

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});
