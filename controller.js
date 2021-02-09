const { response } = require("express");

module.exports = {
  getPlanes: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_planes()
      .then((planes) => {
        res.status(200).send(planes);
      })
      .catch((err) => res.status(500).send(err));
  },
  addPlane: (req, res) => {
    const dbInstance = req.app.get("db");
    const { type, passengers } = req.body;
    dbInstance
      .add_plane([type, passengers])
      //# .add_plane({type,passengers})
      .then((planes) => {
        res.status(200).send(planes);
      })
      .catch((err) => res.status(500).send(err));
  },
};
