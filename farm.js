//Kosten

const get_yield_for_plant = (plant) => {
    return plant.yield;
}

const get_yield_for_crop = (input) => {
    return input.num_crops * input.crop.yield;
}

const get_total_yield = () => {

}


module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
  }