import { LightBulb, PowerSource } from "./main";

export const runExercise2 = async () => {
  const MyPowerSource2 = new PowerSource();
  const startTimestamp = new Date().getTime();
  try {
    await new LightBulb("Lightbulb", MyPowerSource2).turnUpForTimeInSec(8);
  } catch (e) {
    if (e instanceof Error) {
      console.error("Out of power :(");
      console.log(e.message);
      const endTimestamp = new Date().getTime();
      const totalTime = endTimestamp - startTimestamp;
      console.log("Error occured after miliseconds: ", totalTime);
    }
  }
  
}
