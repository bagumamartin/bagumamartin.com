import Worker from "worker-loader!./WordTyperWorker";
import * as Comlink from "comlink";

const worker = Comlink.wrap(new Worker());

export const typedText = worker.typeText