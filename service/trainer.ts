import NeuralPersist from "./neuralPersistance";
import { Architect, Trainer, Network } from "synaptic";
import { trainingSetApril } from "../data/trainingSet";
import LSTM = Architect.LSTM;

/**
 * Created by Farmas on 20.04.2017.
 */

export const trainNN = () => {

    console.log('learning started');

    const lastKnown = new NeuralPersist().readFile();

    let weaconPiBrain;

    if (!lastKnown) {
        console.log('No network found, creating new')
        weaconPiBrain = new LSTM(5, 15, 15, 15, 15, 3);
    } else {
        console.log('Network found, reusing')
        weaconPiBrain = Network.fromJSON(lastKnown);
    }
    let trainer = new Trainer(weaconPiBrain)
    console.log("Started learning")
    trainer.train(trainingSetApril, {
        iterations: 5000,
        shuffle: true,
        rate: 0.1,
        error: .001,
        log: 100
    });

    new NeuralPersist().persistFile(weaconPiBrain);
    console.log("Neural net trained and persisted")
}