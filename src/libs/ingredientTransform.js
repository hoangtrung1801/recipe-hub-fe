const toString = (data) => {
    const { name, unit, amount } = data;
    return `${amount}${unit === "none" || unit === null ? "" : unit} ${name}`;
};

const toIngredient = (data) => {
    const values = data.split(" ");
    return {
        name: values[2],
        amount: Number.parseFloat(values[0]),
        unit: values[1],
    };
};

export default { toString, toIngredient };
