import { Router } from "express";
import { questions } from "../utils/questions.js";
import Session from "../models/Session.model.js";
const sessionRouter = Router();

sessionRouter.get("/current", async (req, res) => {
    req.session.ok = true;
    console.log("req.session.id", req.session.id)
    var currentSession = await Session.findOne({ id: req.session.id })
    console.log("currentSession", currentSession)
    if (currentSession == null) {
        try {
            var newSession = new Session({
                id: req.session.id,
                messages: [{ from: "bot", message: questions[0] }]
            })
            newSession.save()
            res.json({ data: newSession })
        } catch (err) {
            res.json({ err })
        }

    }
    else res.json({ data: currentSession })
});

sessionRouter.get("/", async (req, res) => {
    var sessions = await Session.find()
    res.json({ data: sessions })
});

sessionRouter.post("/send-message", async (req, res) => {
    const { message } = req.body
    if (req.session.ok === undefined) {
        res.status(500).json({ error: "req.session is undefined!", session: req.session })
        return;
    }

    var currentSession = await Session.findOne({ id: req.session.id })
    var botMessagesCount = currentSession.messages.filter(msg => msg.from === "bot").length;
    if (questions.length < botMessagesCount) return res.json({ ok: true })
    if (currentSession.messages.some(msg => msg.from === "end")) return res.json({ ok: true })
    var messagesToAdd = [
        { from: "me", message },
        {
            from: questions.length === botMessagesCount ? "end" : "bot",
            message: questions.length === botMessagesCount ? "Thank you for answering questions session is closing in 5 seconds..." : questions[botMessagesCount]
        }
    ];
    const updatedSession = await Session.findOneAndUpdate(
        { id: req.session.id },
        {
            $push: {
                messages: { $each: messagesToAdd }
            }
        },
        { new: true }
    );

    if (!updatedSession) return res.status(404).json({ message: 'Session not found' });

    res.json({ ok: true })
});

sessionRouter.get('/logout', async (req, res) => {
    const updatedSession = await Session.findOneAndUpdate(
        { id: req.session.id },
        { endTime: new Date() },
        { new: true }
    );
    req.session.destroy((err) => {
        if (err) return res.json({ ok: false, err });
        else return res.json({ ok: true });
    });
});

export default sessionRouter;