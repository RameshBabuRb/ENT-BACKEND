import { Router } from "express-serve-static-core";
import users from "./users/user-login";

export default function setupRoutes(app: { use: (arg0: Router) => void }) {
    app.use(users);
}