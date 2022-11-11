const Albums = require("../models/Album");
// test
exports.index = async (req, res) => {
  const albums = await Albums.getAlbums();
  console.log("Retrieved Albums");
  res.json(albums);
};
