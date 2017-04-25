/**
 * Created by Farmas on 20.04.2017.
 */
import * as express from "express";
import { trainNN, CalculateResult } from "./controller";
const app = express();
const PORT = (process.env.PORT || 5000);

app.get('/trigger', (request, response) => {
    console.log("trigger shall begun")
    trainNN();
    response.send("training shall be done")
});
app.get('/hello', (request, response) => {
    response.send("hello")
});

app.get('/calculate', (request, response) => {
    const day = Number(request.param('day'));
    const month = Number(request.param('month'));
    const hour = Number(request.param('hour'));
    const temp = Number(request.param('temp'));
    const houseTemp = Number(request.param('houseTemp'));
    console.log("triggered calculate")
    console.log(day, month, hour, temp, houseTemp);
    const result = CalculateResult(day, month, hour, temp, houseTemp);
    response.send(result)
});

app.listen(PORT, () => {
    console.log(`Start is up and running on localhost:${PORT}`)
});