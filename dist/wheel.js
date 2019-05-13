"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PI = Math.PI;
const PI_H = PI / 2;
function sectorEdges(angularSector) {
    return {
        start: (PI - angularSector) / 2,
        end: (angularSector - PI) / 2,
    };
}
/**
 * @return the polar coodinates of an item based on the wheel properties.
 * @param item item that needs to be positioned
 * @param wheel wheel to position item into
 */
function wheel(item, wheel = {}) {
    const angularSector = wheel.angularSector || 2 * PI;
    const radius = wheel.radius || 0;
    const rotation = wheel.rotation || 0;
    const start = sectorEdges(angularSector).start;
    const sectorPortion = angularSector * item.position;
    return {
        radius: radius + item.offset,
        angle: start + sectorPortion + rotation
    };
}
exports.default = wheel;
