export interface ILightList {[id: number]: Light};

export class Light {
    state: LightState;
    type: string;
    name: string;
    modelid: string;
    manufacturername: string;
    uniqueid: string;
    swversion: string;
    
    static fromResult(res: any): Light {
        let light = new Light();
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
    brightnessPercent: number;
    hue: number;
    sat: number;
    effect: string;

    static setBrigtnessPercentage(bri: number){
        return Math.floor(bri/254 * 100);
    }

    static fromResult(res: any): LightState {
        let lightState = new LightState();
        lightState.on = res.on;
        lightState.bri = res.bri;
        lightState.brightnessPercent = LightState.setBrigtnessPercentage(res.bri); 
        lightState.hue = res.hue;
        lightState.sat = res.sat;
        lightState.effect = res.effect;
        return lightState;
    }
}