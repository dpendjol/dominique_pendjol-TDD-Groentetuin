
// display value of yield property from plant
const get_yield_for_plant = (plant) => plant.yield;


// display num_plants * yield per plant
const get_yield_for_crop = (input) => input.num_plants * get_yield_for_plant(input.crop);

// total the sum of all yields of all crops
const get_total_yield = (input) => input.crops.reduce((total, item) => total + get_yield_for_crop(item),0)

// get the costs per plant
const get_costs_for_plants = (plant) => plant.costs;

// costs per crop is the costs per plant * number of plants
const get_costs_for_crop = (input) => input.num_plants * get_costs_for_plants(input.crop);

const get_revenue_for_plant = (plant) => {
    return plant.yield * plant.sales_price;
}

const get_revenue_for_crop = (input) => {
    return input.num_plants * get_revenue_for_plant(input.crop)
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_plants,
    get_costs_for_crop,
    get_revenue_for_plant,
    get_revenue_for_crop,
  }