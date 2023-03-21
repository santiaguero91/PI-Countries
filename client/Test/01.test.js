import {GET_COUNTRIES, FILTER_BY_CONTINENT} from "../src/redux/action-types"


describe("02", () => {
    it("Variables GET_COUNTRIES y FILTER_BY_CONTINENT estan declaradas", () => {
      expect(GET_COUNTRIES).toEqual("GET_COUNTRIES");
      expect(FILTER_BY_CONTINENT).toEqual("FILTER_BY_CONTINENT");
    });


})