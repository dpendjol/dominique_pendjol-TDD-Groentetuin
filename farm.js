//Kosten

const get_yield_for_plant = (plant) => {
    return plant.yield;
}

const get_yield_for_crop = (input) => {
    return input.num_crops * get_yield_for_plant(input.crop);
}

const get_total_yield = (input) => {
    return input.crops.reduce((total, item) => total + get_yield_for_crop(item),0)
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
  }