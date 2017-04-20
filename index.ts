/**
 * Created by Farmas on 20.04.2017.
 */
import * as express from "express";
const app = express();
const PORT = (process.env.PORT || 5000);
app.listen(PORT, () => {
    console.log(`Start is up and running on localhost:${PORT}`)
});