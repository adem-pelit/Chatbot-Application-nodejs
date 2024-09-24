import { Router } from "express";
import { GetAllSessions, GetCurrentSession, LogoutSession, SendMessage } from "../controllers/Session.controller.js";

const sessionRouter = Router();

sessionRouter.get("/current", GetCurrentSession);
sessionRouter.get("/", GetAllSessions);
sessionRouter.post("/send-message", SendMessage);
sessionRouter.get('/logout', LogoutSession);

export default sessionRouter;