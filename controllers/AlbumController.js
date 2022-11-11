const Albums = require("../models/Album");

exports.index = async (req, res) => {
  const test = "ci/cdテスト用に変数定義
  const albums = await Albums.getAlbums();
  console.log("Retrieved Albums");
  res.json(albums);
};
