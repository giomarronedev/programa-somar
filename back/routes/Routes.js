const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware.verifyToken, projectController.getAllProjects);
router.post("/", authMiddleware.verifyToken, projectController.createProject);
router.delete(
  "/:id",
  authMiddleware.verifyToken,
  projectController.deleteProject
);

module.exports = router;
