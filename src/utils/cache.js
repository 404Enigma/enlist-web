const redis = require("redis");
const { promisify } = require("util");

const assign = require("../lib/assign");
const { get_PRN } = require("../model/nodes");

const redisPort = 6379;
const client = redis.createClient(redisPort);

client.on("connect", () => {
  console.log(`connected to redis`);
});
client.on("error", (err) => {
  console.log(`Error: ${err}`);
});

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

const cache_middleware = async (uid) => {
  try {
    const reply = await GET_ASYNC(uid);
    if (reply) {
      console.log("using cached data");

      return JSON.parse(reply);
    }

    PRN = await get_PRN(uid);
    _class = assign.check_class(PRN);
    _division = assign.check_division(PRN);

    const respone = { PRN, _class, _division };
    const saveResult = await SET_ASYNC(uid, JSON.stringify(respone), "EX", 5);
    console.log("new data cached", saveResult);

    return respone;
  } catch (error) {
    res.send(error.message);
  }
};

// const values = cache_middleware("hFQNzrN99fMbmqICINPyaLQFp2I3");
// console.log("value: ", values);

module.exports = { cache_middleware };
