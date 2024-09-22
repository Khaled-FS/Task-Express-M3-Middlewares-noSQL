// const express = require("express");
// const upload = require("../../middleware/multer");
// const router = express.Router();
// const {
//   postsGet,
//   postsUpdate,
//   postsDelete,
//   postsCreate,
// } = require("./posts.controllers");

// router.get("/", postsGet);
// router.post("/", postsCreate);

// router.delete("/:postId", postsDelete);

// router.put("/:postId", postsUpdate);

// module.exports = router;

const express = require("express");
const router = express.Router();
const upload = require("../../middleWares/multer");
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require("./posts.controllers");

router.get("/", postsGet);
router.post("/", upload.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
