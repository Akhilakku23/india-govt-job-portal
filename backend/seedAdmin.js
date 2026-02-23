const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const seedAdmin = async () => {
  const hashed = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Admin",
    email: "admin@govportal.com",
    password: hashed,
    role: "admin"
  });

  console.log("Admin Created");
  process.exit();
};

seedAdmin();