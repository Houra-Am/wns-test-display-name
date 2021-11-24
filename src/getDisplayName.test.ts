import getDisplayName from "./getDisplayName";

describe("getDisplayName", () => {
  describe("when no specified city", () => {
    it("returns question mark and full name", () => {
      expect(getDisplayName("Jane", "Doe")).toBe("[?] Jane Doe");
    });
  });

  describe("when specified city", () => {
    it("returns city and full name", () => {
      expect(getDisplayName("John", "Doe", "London")).toBe("[London] John Doe");
    });
  });

  describe("when curriculum is specified as work-study", () => {
    it("returns city and full name - WnS", () => {
      expect(getDisplayName("John", "Doe", "London", "work-study")).toBe(
        "[London] John Doe - WnS"
      );
    });
  });

  describe("when curriculum is different", () => {
    it("returns city and full name no - WnS", () => {
      expect(getDisplayName("John", "Doe", "London", "different")).toBe(
        "[London] John Doe"
      );
    });
  });
});
