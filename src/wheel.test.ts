import wheel from "./wheel"

const item1 = {
    position: 0,
    offset: 0
}

const item2 = {
    position: .25,
    offset: 0,
}

const item3 = {
    position: .5,
    offset: 16,
}

const wheel1 = {
    radius: 10
}

const wheel2 = {
    radius: 5,
    angularSector: Math.PI / 2
}

const wheel3 = {
    radius: 5,
    angularSector: Math.PI / 2,
    rotation: Math.PI / 2
}

describe("wheel tests", () => {

    test(`default wheel: Place item1 into the default wheel.`, () => {
        expect(wheel(item1)).toEqual({
            angle: Math.PI / (-2),
            radius: 0
        })
    })

    test(`wheel radius: Place item1 into wheel1.`, () => {
        expect(wheel(item1, wheel1)).toEqual({
            angle: Math.PI / (-2),
            radius: 10
        })
    })

    test(`wheel angular sector: Place item1 into wheel2.`, () => {
        expect(wheel(item1, wheel2)).toEqual({
            angle: Math.PI / 4,
            radius: 5
        })
    })

    test(`wheel rotation: Place item1 into wheel3.`, () => {
        expect(wheel(item1, wheel3)).toEqual({
            angle: 3 * Math.PI / 4,
            radius: 5
        })
    })

})


describe("item tests", () => {

    test("item position: Place item2 into wheel1.", () => {
        expect(wheel(item2, wheel1)).toEqual({
            radius: 10,
            angle: 0,
        })
    })

    test("item position and wheel angular sector: Place item2 into wheel2.", () => {
        expect(wheel(item2, wheel2)).toEqual({
            radius: 5,
            angle: 3 * Math.PI / 8,
        })
    })

    test("item offset: Place item3 into wheel1.", () => {
        expect(wheel(item3, wheel1)).toEqual({
            radius: 26,
            angle: Math.PI / 2,
        })
    })
})