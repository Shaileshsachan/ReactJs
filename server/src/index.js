require("dotenv/config");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { verify } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");

// register
// login
// logout
// setup protected root
// get a new access token with refresh token

const server = express();

server.use(cookieParser());

server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(process.env.PORT, () =>
  console.log(`Server is runnig on port ${process.env.PORT}`)
);

server.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await hash(password, 10);
    console.log(hashedPassword);
  } catch (err) {}
});
