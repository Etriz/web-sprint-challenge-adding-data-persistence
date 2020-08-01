const express = require("express");

const Projects = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.findProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/resources", (req, res) => {
  Projects.findResources()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/tasks", (req, res) => {
  Projects.findTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.findProjectById(id)
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: `Failed to get project ${id}` });
    });
});

router.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then((data) => {
      res.status(201).json({ id: data[0], ...req.body });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add resource" });
    });
});

router.post("/resources", (req, res) => {
  // console.log(req.body);
  Projects.addResource(req.body)
    .then((data) => {
      res.status(201).json({ id: data[0], ...req.body });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add resource" });
    });
});

router.post("/tasks", (req, res) => {
  // console.log(req.body);
  Projects.addTask(req.body)
    .then((data) => {
      res.status(201).json({ id: data[0], ...req.body });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add task" });
    });
});

router.delete("/:database/:id", (req, res) => {
  // console.log(req.body);
  const { database, id } = req.params;
  Projects.remove(database, id)
    .then((data) => {
      res.status(200).json({ deleted: `${database} id ${id} deleted` });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete" });
    });
});

module.exports = router;
