function chooseProduct(segment) {
    // Add your solution here!
    switch (segment) {
        case "Beverage":
            return "Soda"

            break;

        case "Fruit":
            return "Apple"

            break;

        case "Hygiene":
            return "Soap"

            break;

        default:
            break;
    }
}

module.exports = chooseProduct;
