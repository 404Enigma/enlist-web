const moveFbRecord = async (oldRef, newRef) => {
  await oldRef.once("value", async function (snap) {
    await newRef.set(snap.val(), function (error) {
      if (!error) {
        oldRef.remove();
      } else if (typeof console !== "undefined" && console.error) {
        console.error(error);
      }
    });
  });
};

module.exports = { moveFbRecord };
