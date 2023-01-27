const {shuffleArray} = require('./utils')

let arr1 = ['one', 'two', 'three', 'four']

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(arr1))).toBe(true)
    })
})

describe('', () => {
    test("Check to see if array result is the same length as the array passed in", () => {
        let result = shuffleArray(arr1)
        expect(arr1.length).toBe(result.length)
    })
})