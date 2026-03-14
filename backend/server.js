const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let users = []

//GET
app.get("/users", (req, res) => {
  res.json(users)
})

//ADD
app.post("/users", (req, res) => {
  const user = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email
  }

  users.push(user)
  res.json(user)
})

//DELETE
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id)
  users = users.filter(u => u.id !== id)
  res.json({ message: "User succesfully deleted" })
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})