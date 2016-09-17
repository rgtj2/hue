export interface ILightHash {[id: number]: Light};

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
    brightnessPercent: number;
    hue: number;
    sat: number;
    effect: string;
    reachable: boolean;

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
        lightState.reachable = res.reachable;
        return lightState;
    }
}