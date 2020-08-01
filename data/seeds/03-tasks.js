exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          task_description: "steal a van",
          notes: "",
          task_complete: "false",
          project_id: 1,
        },
        {
          id: 2,
          task_description: "hack a server",
          notes: "",
          task_complete: "false",
          project_id: 1,
        },
        {
          id: 3,
          task_description: "get a disguise",
          notes: "",
          task_complete: "true",
          project_id: 2,
        },
        {
          id: 4,
          task_description: "hatch an evil plan",
          notes: "",
          task_complete: "false",
          project_id: 2,
        },
      ]);
    });
};
