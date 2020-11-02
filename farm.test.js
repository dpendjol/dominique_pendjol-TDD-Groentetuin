const {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_plants,
    get_costs_for_crop,
  } = require("./farm");
  
  describe("get_yield_for_plant", () => {
    const corn = {
      name: "corn",
      yield: 30,
    };
  
    test("Get yield for plant with no environment factors", () => {
      expect(get_yield_for_plant(corn)).toBe(30);
    });
  });
  
  describe("get_yield_for_crop", () => {
    test("Get yield for crop, simple", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        num_plants: 10, //origineel is num_crops, maar naamgeving verwarrend gekozen. Dit is een input in de grond van het gewas corn bestaande uit 10 planten
      };
      expect(get_yield_for_crop(input)).toBe(30);
    });
  });
  
  describe("get_total_yield", () => {
    test("Calculate total yield with multiple crops", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
      };
      const crops = [
        { crop: corn, num_plants: 5 },
        { crop: pumpkin, num_plants: 2 },
      ];
      expect(get_total_yield({ crops })).toBe(23);
    });
  
    test("Calculate total yield with 0 amount", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const crops = [{ crop: corn, num_plants: 0 }];
      expect(get_total_yield({ crops })).toBe(0);
    });
  });

  describe("get_costs_for_crop", () => {
    test("Get costs for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 0.5,
          };
          const input = {
            crop: corn,
            num_plants: 10,
          };
      expect(get_costs_for_crop(input)).toBe(5);
    });
});

describe("get_revenue_for_crop", () => {
  test("Get revenue for crop, simple", () => {
      const corn = {
          name: "corn",
          yield: 3,
          costs: 0.5,
          sales_price: 2,
        };
        const input = {
          crop: corn,
          num_plants: 10,
        };
    // revenue is the sales price per yield * yield per plant * numer of plants in crop
    expect(get_revenue_for_crop(input)).toBe(60);
  });
});