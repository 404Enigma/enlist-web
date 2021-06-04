const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 100 });

const assign = require("../lib/assign");
const { get_PRN } = require("../model/nodes");
const { get_metadata } = require("../utils/methods");

const cache_middleware = async (uid, email) => {
  try {
    if (myCache.has(uid)) {
      console.log("using cached data");
      const reply = await myCache.get(uid);
      console.log(reply);
      return reply;
    }

    const { PRN, _class, _division } = await get_metadata(email);
    // PRN = await get_PRN(uid);
    // _class = assign.check_class(PRN);
    // _division = assign.check_division(PRN);

    const respone = { PRN, _class, _division };

    const saveResult = myCache.set(uid, respone, 100000);
    console.log("new data cached", saveResult);

    return respone;
  } catch (error) {
    return error;
  }
};

module.exports = { cache_middleware };
