import { Network, Architect } from "synaptic";
import { manualBrain } from "../data/HerokuCheat";
import LSTM = Architect.LSTM;
export default class NeuralPersist {
    private path = require('path');

    private fs = require('fs');
    private address = this.path.join(__dirname, '../data/neuraldata15_15_15_15.json')

    constructor() {

    }

    public persistFile(network) {
        console.log('persisting file to ')
        console.log(this.address)
        this.fs.writeFileSync(this.address, JSON.stringify(network.toJSON()));
    }

    public readFile() {
        if (process.env.herokuEnv) {
            console.log("heroku env, loading directly json")
            return manualBrain;
        }
        console.log('reading file from ')
        console.log(this.address)
        try {
            return JSON.parse(this.fs.readFileSync(this.address, 'utf8'));
        } catch (e) {
            return false;
        }
    }

    public static getNet(): Network {

        const lastKnown = new NeuralPersist().readFile();

        if (lastKnown) {
            console.log('Network found.');
            const network = Network.fromJSON(lastKnown);
            return network;
        } else {
            throw new Error("No network found");
        }
    }
}
