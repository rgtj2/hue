export interface ILightHash {[id: number]: Light};

export const HueDefaults = {
    bri: { min: 0, max: 254, percentAnchor: 5 }
}

export type BrightnessAnchorPercentage = -20 | -15 | -10 | -5 | 5 | 10 | 15 | 20;
export type RoundingAnchor = 5 | 10; 

export class LightHash {
    static toLightList(lightHash: LightHash): Light[] {
        return Object.keys(lightHash).map(id => Light.fromResult(lightHash[id], +id));
    }
}

export class Light {
    bridgeIdx: number;
    state: LightState;
    type: string;
    name: string;
    modelid: string;
    manufacturername: string;
    uniqueid: string;
    swversion: string;
    
    static fromResult(res: any, bridgeIdx: number): Light {
        let light = new Light();
        light.bridgeIdx = bridgeIdx;
        light.state = LightState.fromResult(res.state);
        light.type = res.type;
        light.name = res.name;
        light.modelid = res.modelid;
        light.manufacturername = res.manufacturername;
        light.swversion = res.swversion;
        return light;
    }
}

export class LightState {
    on: boolean;
    bri: number;
    hue: number;
    sat: number;
    effect: string;
    reachable: boolean;

    get brightnessPercent(): number{
        return Math.round(this.bri/HueDefaults.bri.max * 100);
    }

    static briFromPercent(value: number): number {
        return Math.round((value/100) * HueDefaults.bri.max);
    }

    static guardMaxBrightness(value: number): number {
        return value <= HueDefaults.bri.max ? value : HueDefaults.bri.max;
    }

    static guardMinBrightness(value: number): number {
        return value >= HueDefaults.bri.min ? value : HueDefaults.bri.min;
    }

    static adjustBrightnessPercent(currentPercent: number, adjustment: BrightnessAnchorPercentage, roundTo: RoundingAnchor): number {
        let newPercent = this.roundPercent(currentPercent+adjustment, adjustment>0, roundTo);
        let newBri = this.briFromPercent(newPercent);
        if ( adjustment > 0 ) {
            return this.guardMaxBrightness(newBri);
        } else {
            return this.guardMinBrightness(newBri);
        }
    }

    static roundPercent(value: number, up: boolean, toNearest: RoundingAnchor) {
        let modValue = value % toNearest;
        if (modValue !== 0 ) {
            return up ? value + (toNearest - modValue) : value - modValue;
        } else return value; 
        
    }

    static fromResult(res: any): LightState {
        let lightState = new LightState();
        lightState.on = res.on;
        lightState.bri = res.bri; 
        lightState.hue = res.hue;
        lightState.sat = res.sat;
        lightState.effect = res.effect;
        lightState.reachable = res.reachable;
        return lightState;
    }
}