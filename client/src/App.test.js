   // es necesario importar
import {add} from "../src/redux/actions"


describe("actions.js", function() {
  test("add two numbers", function() {
    expect(add(1,2)).toBe(3)
  })
})


  // node --experimental-vm-modules node_modules/jest/bin/jest.js