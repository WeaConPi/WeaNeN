import NeuralPersist from "./neuralPersistance";
import { Architect, Trainer, Network } from "synaptic";
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
        weaconPiBrain = new LSTM(6, 9, 9, 9, 9, 3);
    } else {
        console.log('Network found, reusing')
        weaconPiBrain = Network.fromJSON(lastKnown);
    }
    let trainer = new Trainer(weaconPiBrain)

    trainer.train(mayTrainingSet, {
        iterations: 20000,
        shuffle: true,
        rate: 0.2,
        error: .05,
        log: 1000
    });

    new NeuralPersist().persistFile(weaconPiBrain);
    console.log("Neural net trained and persisted")
}