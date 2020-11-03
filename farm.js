
// display value of yield property from plant

const { getEnabledCategories } = require("trace_events");

// to account for enviroment used spread operator to pass multiple parameters to object with out changing al the current calls to the function.
const get_yield_for_plant = (...args) => {
  const plant = args[0];
  const num_amount_of_influence = [];
  if (args.length > 1) {
    const env_vars = args[1];

    const env_vars_of_influence = Object.getOwnPropertyNames(env_vars);

    // check if plant is susseptable to enviroment variables, other words, does the factor property exist
    if (plant.factors !== undefined) {
      // loop tru the factors
      env_vars_of_influence.forEach(item => {
        const text_amount_of_influence = env_vars[item];
        // check if the environment variabele influences the plant
        if (plant.factors[item] !== undefined) {
          // if so store the percentage in a array
          num_amount_of_influence.push(plant.factors[item][text_amount_of_influence]);
        }
      })
    }
  }
  if (num_amount_of_influence.length !== null) {
    const calculated_plant_yield = num_amount_of_influence.reduce((result, percentage) => {
      return result * ((100 + percentage) / 100)
    }, plant.yield);
    return Math.round(calculated_plant_yield*10) / 10;
  } else {
   return plant.yield;
  }
}

// display num_plants * yield per plant
const get_yield_for_crop = (input) => {
  // console.log('Heeft die property factors: ', input[0].hasOwnProperty('yield'));
  // console.log('alle object properties: ', Object.getOwnPropertyNames(input[0].crop))
  return input.num_plants * get_yield_for_plant(input.crop);
}

// total the sum of all yields of all crops
const get_total_yield = (input) => input.crops.reduce((total, item) => total + get_yield_for_crop(item),0)

// get the costs per plant
const get_costs_for_plants = (plant) => plant.costs;

// costs per crop is the costs per plant * number of plants
const get_costs_for_crop = (input) => input.num_plants * get_costs_for_plants(input.crop);

// revenue is the yield per plant * sales price per yield
const get_revenue_for_plant = (plant) => plant.yield * plant.sales_price;

// revenue per crop is the revenue per plant * number of plants in a crop
const get_revenue_for_crop = (input) => input.num_plants * get_revenue_for_plant(input.crop);

// profit is revenue - costs
const get_profit_for_crop = (input) => get_revenue_for_crop(input) - get_costs_for_crop(input);

// total profits is the sum of all seperate profits
const get_total_profit = (input) => input.crops.reduce((total, item) => total + get_profit_for_crop(item),0)

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_plants,
    get_costs_for_crop,
    get_revenue_for_plant,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
  }