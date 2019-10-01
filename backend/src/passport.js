import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

import passport from "poassport";
import JWTStrategy from "passport-jwt";

const jwtOptions = {
  jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secret: process.env.JWT_SECRET
};

const verifyUser = (payload, done) => {
  try{ 
    
  }
}

passport.use(new JWTStrategy(jwtOptions, verifyUser));