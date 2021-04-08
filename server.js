const express = require("express");
const session = require("express-session");
// const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

const passport = require("./passport/setup");
const auth = require("./routes/auth");

const app = express();
const PORT = 5000;
// const MONGO_URI = "mongodb://127.0.0.1:27017/userdb";

// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true })
//   .then(console.log(`MongoDB connected ${MONGO_URI}`))
//   .catch((err) => console.log(err));

// Bodyparser middleware, extended false does not allow nested payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb");

// Express Session
// app.use(
//   session({
//     secret: "very secret this is",
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", auth);
app.get("/", (req, res) => res.send("Good sunshine!"));

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
