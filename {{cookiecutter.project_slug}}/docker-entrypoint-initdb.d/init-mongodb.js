/* eslint-disable no-undef */
print("Start #################################################################");

db = db.getSiblingDB("{{cookiecutter.project_slug}}_dev");
db.createUser({
  user: "{{cookiecutter.project_slug}}",
  pwd: "{{cookiecutter.project_slug}}1234",
  roles: [{ role: "readWrite", db: "{{cookiecutter.project_slug}}_dev" }],
});
db.createCollection("users");

db = db.getSiblingDB("{{cookiecutter.project_slug}}_test");
db.createUser({
  user: "{{cookiecutter.project_slug}}",
  pwd: "{{cookiecutter.project_slug}}1234",
  roles: [{ role: "readWrite", db: "{{cookiecutter.project_slug}}_test" }],
});
db.createCollection("users");

print("END #################################################################");
