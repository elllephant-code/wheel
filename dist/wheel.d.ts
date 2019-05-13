export interface IWheelItem {
    /** position of item expressed in fraction of the angularSector. Must be a number between 0 and 1 */
    position: number;
    /** offset relative to wheel circle along the radius-axis */
    offset: number;
}
export interface IPolarCoodinates {
    radius: number;
    angle: number;
}
export interface IWheel {
    radius?: number;
    angularSector?: number;
    rotation?: number;
}
/**
 * @return the polar coodinates of an item based on the wheel properties.
 * @param item item that needs to be positioned
 * @param wheel wheel to position item into
 */
declare function wheel(item: IWheelItem, wheel?: IWheel): IPolarCoodinates;
export default wheel;
