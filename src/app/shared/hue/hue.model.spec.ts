import { TestBed, async } from '@angular/core/testing';
import { LightState } from './hue.model';

describe('Hue Model: LightState', () => {
  fdescribe('LightState.roundPercent(value: number, up: boolean)', () => {
    describe("up == true", () => {
        it("rounds up to the nearest 5", () => {
            expect(LightState.roundPercent(50, true, 5)).toBe(50);
            expect(LightState.roundPercent(51, true, 5)).toBe(55);
            expect(LightState.roundPercent(54, true, 5)).toBe(55);
            expect(LightState.roundPercent(57, true, 5)).toBe(60);
        });
    });
    describe("up == false", () => {
        it("rounds down to the nearest 5", () => {
            expect(LightState.roundPercent(50, false, 5)).toBe(50);
            expect(LightState.roundPercent(51, false, 5)).toBe(50);
            expect(LightState.roundPercent(54, false, 5)).toBe(50);
            expect(LightState.roundPercent(57, false, 5)).toBe(55);
        });
        it("rounds down to the nearest 10", () => {
            expect(LightState.roundPercent(50, false, 10)).toBe(50);
            expect(LightState.roundPercent(51, false, 10)).toBe(50);
            expect(LightState.roundPercent(54, false, 10)).toBe(50);
            expect(LightState.roundPercent(57, false, 10)).toBe(50);
        });
    });
  });
});
