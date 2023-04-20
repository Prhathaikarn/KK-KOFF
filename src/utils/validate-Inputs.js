export const validateInputs = (...inputs) => {
    return inputs.every((el) => typeof el === 'number' && !isNaN(el))
};
