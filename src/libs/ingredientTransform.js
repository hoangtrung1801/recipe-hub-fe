const toString = (data) => {
    const { name, unit, amount } = data;
    return `${name}-${amount}-${unit}`;
};

const toIngredient = (data) => {
    const values = data.split("-");
    return {
        name: values[0],
        amount: Number.parseFloat(values[1]),
        unit: values[2],
    };
};

export default { toString, toIngredient };
