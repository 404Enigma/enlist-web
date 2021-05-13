const { delete_a_task } = require("../model/services");

const deleteTask = async (req, res) => {
  if (!req.decodedClaims) {
    res.redirect("/login");
  } else {
    let group;
    console.log(req._payload);

    if (req.params.group == "personal") group = "Pvt";

    const user = {
      name: req.decodedClaims.name,
      email: req.decodedClaims.email,
      uid: req.decodedClaims.uid,
      picture: req.decodedClaims.picture,
    };

    console.log(req.body);
    console.log("Group :", req.params.group);
    //res.json("success");

    try {
      await delete_a_task(user, req.body, req.params.group);

      res.json("Success");
    } catch (error) {
      res.json("Failed to delete");
    }
  }
};

module.exports = { deleteTask };
