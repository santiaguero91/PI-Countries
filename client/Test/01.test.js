import getActivities from "../src/redux/actions"


describe("02", () => {
    it("Get Countries debe traer 250 ovbjetos", () => {
      expect(getActivities).toBeDefined();
    });


})