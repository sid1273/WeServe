const express = require("express");
const {protect} = require("../middleware/authMiddleware")
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");
const {authorizeRoles} = require("../middleware/roleMiddleware")

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, (req, res) =>{
    res.json({
        message: "Protect route accessed",
        user : req.user
    });
});
router.get("/admin",
    protect,
    authorizeRoles("super_admin"),
    (req, res)=>{
        res.json({
            message:"Welcome Admin!"
        })
    }
)

module.exports = router;