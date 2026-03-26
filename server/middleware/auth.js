import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.json({ success: false, message: "not authorized" });
    }

    // ✅ Bearer hatao (NEW)
    if (token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    }

    try {
        // ✅ decode → verify (FIX)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // ✅ decoded se id lo (FIX)
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.json({ success: false, message: "not authorized" });
        }

        next();
    } catch (error) {
        return res.json({ success: false, message: "not authorized" });
    }
};
