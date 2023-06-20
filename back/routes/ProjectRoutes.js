const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const projectController = require("../controllers/projectController");

// Middleware for validating project data
const validateProjectData = [
  check("name").notEmpty().withMessage("Project name is required"),
  check("description")
    .notEmpty()
    .withMessage("Project description is required"),
];

// Get all projects
router.get("/", projectController.getAllProjects);

// Get a project by ID
router.get("/:id", projectController.getProjectById);

// Create a new project
router.post("/", validateProjectData, projectController.createProject);

// Update a project
router.put("/:id", validateProjectData, projectController.updateProject);

// Delete a project
router.delete("/:id", projectController.deleteProject);

module.exports = router;
