import { LightBulb, PowerSource } from "./main";

export const runExercise1 = () => {
    const MyPowerSource = new PowerSource();

    try {
      new LightBulb("Lightbulb no 1", MyPowerSource).turnUpFor1Sec();
      new LightBulb("Lightbulb no 2", MyPowerSource).turnUpFor1Sec();
      new LightBulb("Lightbulb no 3", MyPowerSource).turnUpFor1Sec();
      new LightBulb("Lightbulb no 4", MyPowerSource).turnUpFor1Sec();
      new LightBulb("Lightbulb no 5", MyPowerSource).turnUpFor1Sec();
      new LightBulb("Lightbulb no 6", MyPowerSource).turnUpFor1Sec();
    } catch (e) {
      if (e instanceof Error) {
        console.error("Out of power :(");
        console.log(e.message);
      }
    }
}

