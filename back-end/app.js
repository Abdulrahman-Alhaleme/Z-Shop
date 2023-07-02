const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./DB");
const port = 4400;
require("dotenv").config();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.use(cors());
app.use(express.json());


//Get all product
app.get("/product", async (req, res) => {
    try {
        const query = "SELECT * FROM provider ";
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(201).json({ error: "Internal server error" });
    }
});
// 

// Get a specific product by ID
app.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const query = "SELECT * FROM provider WHERE id = $1";
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Resort not found" });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(201).json({ error: "Internal server error" });
    }
});

// Add a new product
app.post("/newProduct", async (req, res) => {
    try {
        const { name, desc, price, img } = req.body;
        console.log(desc);
        const query = "INSERT INTO provider (name, description, img, price) VALUES ($1, $2, $3, $4) RETURNING *";

        const values = [name, desc, img, price];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            err: "Internal server error",
            error: error.message
        });
    }
});

// delete a product
app.delete("/product/:id", (req, res) => {
    const productid = req.params.id;
    const q = "DELETE FROM provider WHERE id = $1"
    pool.query(q, [productid], (err, data) => {
        if (err) return res.json(err)
        return res.json("product has been deleted successfully")
    })
})

// update a product
app.put("/product/:id", (req, res) => {
    const productid = req.params.id;
    const q = "UPDATE provider SET name=$1, desc=$2 , img=$3 , price=$4 WHERE id = $5";
    const values = [
        req.body.name,
        req.body.desc,
        req.body.img,
        req.body.price
    ]
    pool.query(q, [...values, productid], (err, data) => {
        if (err) return res.json(err)
        return res.json("product has been updated successfully")
    })
})

app.get("/", (req, res) => {
    res.send("hello")
})
// signup****************************************************
function generateToken({ name, email }) {
    const user = { name, email }
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    return token;
}

app.post("/signup", async (req, res) => {
    try {
        const { name, email, password, shopName } = req.body;

        const query = "INSERT INTO userinfo (name, email, password, shopname) VALUES ($1, $2, $3, $4) RETURNING *";
        const hashpassword = await bcrypt.hash(password, 10)
        const values = [name, email, hashpassword, shopName];
        const token = generateToken({
            name, email
        })

        const result = await pool.query(query, values);
        res.status(201).json({ user: result.rows[0], token });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            err: "Internal server error",
            error: error.message
        });
    }
});


app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const query = "SELECT * FROM userinfo where email = $1 ";
        const result = await pool.query(query, [email]);

        if (result.rows.length == 0) {
            console.log('fff');
            return res.json({ error: "email not found" });
        }
        const checkPass = await bcrypt.compare(password, result.rows[0].password);
        if (!checkPass) {
            return res.json({ error: "Invallid password" });
        }
        const token = generateToken({
            email
        })
        res.json({ user: result.rows[0], token });
        console.log(result.rows[0].password)
    } catch (error) {
        console.log(error);
        res.status(201).json({ error: "Internal server error" });
    }
});

//Get all user
app.get("/signup", async (req, res) => {
    try {
        const query = "SELECT * FROM userinfo ";
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(201).json({ error: "Internal server error" });
    }
});
// 

// Get a specific user by ID
app.get("/signup/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const query = "SELECT * FROM userinfo WHERE id = $1";
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "user not found" });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(201).json({ error: "Internal server error" });
    }
});
// 







































app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



