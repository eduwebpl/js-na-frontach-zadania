/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

import { runExercise1 } from "./exercise1";
import { runExercise2 } from "./exercise2";

export class PowerSource {
  private energySupply = 100;

  consume(energy: number, deviceId = "UNKNOWN") {
    this.energySupply -= energy;

    if (this.energySupply < 0) {
      throw new Error(`Out of power on device: ${deviceId}`);
    }
  }
}

export class LightBulb {
  protected readonly powerConsumption = 20;
  protected powerSupply: PowerSource;
  protected deviceId: string;

  constructor(deviceId: string, powerSupply: PowerSource) {
    this.powerSupply = powerSupply;
    this.deviceId = deviceId;
  }

  turnUpFor1Sec(): void {
    this.powerSupply.consume(this.powerConsumption, this.deviceId);
    console.log(this.deviceId, "I am working for 1 sec");
  }

  async turnUpForTimeInSec(timeInSeconds: number) {
    return new Promise((resolve, reject) => {
      let counter = 0;
      let interval: ReturnType<typeof setInterval>;
      const lightUpFor1Sec = () => {
        try {
          counter++;
          this.turnUpFor1Sec();
          if (counter >= timeInSeconds) {
            clearInterval(interval);
            return resolve("Done");
          }
        } catch (e) {
          clearInterval(interval);
          reject(e);
        }
      };

      lightUpFor1Sec();
      interval = setInterval(lightUpFor1Sec, 1000);
    });
  }
}

// ZAD 1
runExercise1();

// ZAD 2
runExercise2();
