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
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    let userId;

    if (token) {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        userId = decodedToken.id;
    }

    try {
        const query = "SELECT * FROM provider WHERE user_id = $1";
        const values = [userId];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
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
app.post('/newProduct', (req, res) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    let userId;

    if (token) {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        userId = decodedToken.id;

    }
    const { name, description, img, price, user_id } = req.body;

    const query = 'INSERT INTO Provider (name, description, img, price, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [name, description, img, price, userId];

    pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.status(200).json(result.rows[0]);
        }
    });
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

function generateToken(userinfo) {
    const payload = {
        id: userinfo.id,
        name: userinfo.name,
        email: userinfo.email,
    };
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
    return token;
}

app.post("/signup", async (req, res) => {
    try {
        const { name, email, password, shopname } = req.body;

        const query =
            "INSERT INTO userinfo (name, email, password, shopname) VALUES ($1, $2, $3, $4) RETURNING *";
        const hashpassword = await bcrypt.hash(password, 10);
        const values = [name, email, hashpassword, shopname];

        const result = await pool.query(query, values);
        const newUser = result.rows[0];

        const token = generateToken(newUser); // Generate token for the newly created user

        res.status(201).json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error",
            message: error.message,
        });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const query = "SELECT * FROM userinfo WHERE email = $1";
        const result = await pool.query(query, [email]);

        if (result.rows.length === 0) {
            return res.json({ error: "Email not found" });
        }

        const userinfo = result.rows[0];
        const checkPass = await bcrypt.compare(password, userinfo.password);

        if (!checkPass) {
            return res.json({ error: "Invalid password" });
        }

        const token = generateToken(userinfo);
        console.log(userinfo);

        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
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

// delete a user
app.delete("/signup/:id", (req, res) => {
    const userid = req.params.id;
    const q = "DELETE FROM userinfo WHERE id = $1"
    pool.query(q, [userid], (err, data) => {
        if (err) return res.json(err)
        return res.json("user has been deleted successfully")
    })
})
// 







































app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



