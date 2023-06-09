import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 10;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send(`<h1>Welcome to Glaucia Lemos' Zero to Hero Typescript course!</h1>`);
});

app.listen(port, () => console.log(`Server running on port ${port}`))