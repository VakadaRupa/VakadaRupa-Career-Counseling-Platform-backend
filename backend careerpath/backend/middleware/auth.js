import { supabase } from "../../src/config/supabase.js";

/**
 * Session detection middleware
 */
export const getSession = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return next();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) return next();

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error.message);
    next();
  }
};

/**
 * Authentication protection middleware
 */
export const requireAuth = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      error: "Auth middleware failure",
    });
  }
};

export default getSession;