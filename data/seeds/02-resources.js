exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, resource_name: "van", resource_description: "white unmarked van" },
        { id: 2, resource_name: "phone booth", resource_description: "" },
        { id: 3, resource_name: "computer", resource_description: "" },
        { id: 4, resource_name: "costume", resource_description: "as outrageous as possible" },
      ]);
    });
};
