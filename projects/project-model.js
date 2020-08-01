const db = require("../data/db-config.js");

function findProjects() {
  return db("projects");
}

function findProjectById(id) {
  return db("projects").where({ id }).first();
}

function findResources() {
  return db("resources");
}

function findTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select(
      "t.id",
      "t.task_description",
      "t.notes",
      "t.task_complete",
      "p.project_name",
      "p.project_description"
    );
}

function addProject(data) {
  return db("projects").insert(data);
}

function addResource(data) {
  return db("resources").insert(data);
}

function addTask(data) {
  return db("tasks").insert(data);
}

//! STRETCH
function update() {
  return db("projects");
}

function remove(database, id) {
  return db(`${database}`).where({ id }).del();
}

module.exports = {
  findProjects,
  findProjectById,
  findResources,
  findTasks,
  addProject,
  addResource,
  addTask,
  remove,
};
