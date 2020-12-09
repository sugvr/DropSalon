-- DROP TABLE users;
-- DROP TABLE citas;
-- DROP TABLE services;
-- DROP TABLE reportes;
-- CREATE TABLE users (
--   "id" INTEGER PRIMARY KEY AUTOINCREMENT,
--   "name" TEXT,
--   "last_name" TEXT,
--   "created_at" TEXT,
--   "email" TEXT,
--   "password" TEXT,
--   "role" INTEGER
-- );
-- CREATE TABLE citas (
--   "id" INTEGER PRIMARY KEY,
--   "date_rsvp" TEXT,
--   "comments" TEXT,
--   "user_FK" INTEGER,
--   "employee_FK" INTEGER,
--   "serviceType" INTEGER,
--   FOREIGN KEY(user_FK) REFERENCES users(id),
--   FOREIGN KEY(employee_FK) REFERENCES users(id),
--   FOREIGN KEY(serviceType) REFERENCES services(id)
-- );
CREATE TABLE services (
  "id" INTEGER PRIMARY KEY,
  "service_name" TEXT,
  "employee_name" TEXT,
  "service_description" TEXT,
  "duration" TEXT,
  "price" TEXT
);
-- CREATE TABLE reportes (
--   "id" INTEGER PRIMARY KEY,
--   "service_name" TEXT,
--   "cost_service" REAL,
--   "comments" TEXT,
--   "descripcion" TEXT,
--   "employee_FK" INTEGER,
--   FOREIGN KEY(employee_FK) REFERENCES users(id)
-- );