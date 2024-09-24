import { Router } from "express";
import { questions } from "../utils/questions.js";

const sessionRouter = Router();

sessionRouter.get("/", (req, res) => {
    if (req.session.data === undefined) {
        req.session.data = {
            id: req.session.id,
            startDate: new Date(),
            endDate: null,
            messages: [{ from: "bot", message: questions[0] }]
        }
    }

    res.json({ data: req.session.data })
});

sessionRouter.post("/send-message", (req, res) => {
    const { message } = req.body
    if (req.session.data === undefined) {
        res.status(500).json({ error: "req.session is undefined!", session: req.session })
        return;
    }
    var botMessagesCount = req.session.data.messages.filter(msg => msg.from === "bot").length;
    req.session.data.messages.push({ from: "me", message })
    req.session.data.messages.push({ from: "bot", message: questions[botMessagesCount] })
    res.json({ ok: true })
});

sessionRouter.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.json({ ok: false, err });
        else return res.json({ ok: true });
    });
});

export default sessionRouter;