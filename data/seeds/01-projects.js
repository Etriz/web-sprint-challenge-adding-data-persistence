exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Secret Project 01",
          project_description: "",
          project_complete: "false",
        },
        {
          id: 2,
          project_name: "Become a super-villan",
          project_description: "",
          project_complete: "false",
        },
      ]);
    });
};
