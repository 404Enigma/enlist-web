const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 100 });

const { get_metadata } = require("../utils/methods");

const cache_middleware = async (uid, email) => {
  try {
    if (myCache.has(uid)) {
      console.log("using cached data");
      const reply = await myCache.get(uid);
      console.log(reply);
      return reply;
    }

    const { PRN, _class, _division, _year } = await get_metadata(email);

    const respone = { PRN, _class, _division, _year };

    const saveResult = myCache.set(uid, respone, 100000);
    console.log("new data cached", saveResult);

    return respone;
  } catch (error) {
    return error;
  }
};

const cache_guest = async (uid, _class, _division, PRN) => {
  try {
    if (myCache.has(uid)) {
      console.log("using cached data");
      const reply = await myCache.get(uid);
      console.log(reply);
      return reply;
    }

    const respone = { PRN, _class, _division, _year: "Visitor" };

    const saveResult = myCache.set(uid, respone, 100000);
    console.log("new data cached", saveResult);

    return respone;
  } catch (error) {
    return error;
  }
};

module.exports = { cache_middleware, cache_guest };
