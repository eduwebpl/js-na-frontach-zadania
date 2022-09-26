/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */
import {setInterval} from "timers/promises"

class PowerSource {
    static energySupply = 100

    static consume(energy: number): {error: string} | void {
    if(this.energySupply <= 0) {
        return {error: "YOU HAVEN'T MORE ENERGY !"}
    }
    this.energySupply -= energy
    console.log(`You have ${this.energySupply / 20} seconds of action left`)
        console.log(`Your amount of energy is ${this.energySupply}`)
  }
}

export class LightBulb extends PowerSource {
  protected readonly powerConsumption = 20
  consumePower(): {error: string} | void {
    return PowerSource.consume(this.powerConsumption)
  }
   #getCurrentTime():number {
       console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').split(' ')[1]);
       return Date.now()
   }

     async longConsumePower(time: number){
            const interval = 1000;
            const miliseconds = time * interval;

            return new Promise(async (resolve, reject) => {
               for await (const startTime of setInterval(interval, Date.now())) {
                   const errorResponse = this.consumePower()
                   if(errorResponse) return  reject(errorResponse.error)

                   const now = this.#getCurrentTime()

                   if ((now - startTime) > miliseconds) {
                       return resolve("time has been Finish")

                   }
               }
           })

    }
        }

// First Task

// const LightOne = new LightBulb()
// const LightII  = new LightBulb()
// const LightIII  = new LightBulb()
// const LightIV  = new LightBulb()
// const LightV  = new LightBulb()
// const LightVI  = new LightBulb()
//
// LightOne.consumePower()
// LightII.consumePower()
// LightIII.consumePower()
// LightIV.consumePower()
// LightV.consumePower()

//Error !
// LightVI.consumePower()



//Second task
const LightI = new LightBulb()
LightI.longConsumePower(6).then((res: any)=> console.log(res.toUpperCase())).catch((err: any)=> console.log(err))

