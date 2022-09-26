
class PowerSourceII {
     #energySupply = 100
     consume(energy: number): void {
        if(this.#energySupply <= 0) {
            console.log(`Lack of Energy !`)
            throw new Error("PowerSource Error")
        }
        this.#energySupply -= energy
        console.log(`Pozostało ci ${this.#energySupply / energy} sekund Energii`)
    }
}

class LightBulbII {
    #powerConsumption = 20
    getPowerConsumption(): number { return this.#powerConsumption}
}

const SourceII = new PowerSourceII()

const LightBulbPowerI = new LightBulbII().getPowerConsumption()
const LightBulbPowerII = new LightBulbII().getPowerConsumption()
const LightBulbPowerIII = new LightBulbII().getPowerConsumption()
const LightBulbPowerIV = new LightBulbII().getPowerConsumption()
const LightBulbPowerV = new LightBulbII().getPowerConsumption()


SourceII.consume(LightBulbPowerI)
SourceII.consume(LightBulbPowerII)
SourceII.consume((LightBulbPowerIII))
SourceII.consume((LightBulbPowerIV))
SourceII.consume((LightBulbPowerV))

