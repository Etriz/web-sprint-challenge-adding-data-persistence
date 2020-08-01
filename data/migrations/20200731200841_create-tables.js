const { table } = require("../db-config");

exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 128).notNullable().unique();
      tbl.string("project_description");
      tbl.boolean("project_complete").notNullable().defaultsTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name", 128).notNullable().unique();
      tbl.string("resource_description");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_description").notNullable();
      tbl.string("notes");
      tbl.boolean("task_complete").notNullable().defaultsTo(false);
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("projects-resources", (tbl) => {
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .notNullable()
        .unsigned()
        .references("resources.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects-resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
