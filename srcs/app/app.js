const app = () => {
    const componentService = new ComponentService();
    const errorService = new ErrorService();

    errorService.hideError();

    const calTotal = () => {
        errorService.hideError();
        const inputs = componentService.getInputs(); 
        const numbers = parseInput(...inputs); 
        const valid = validateInputs(...numbers);

        if (valid) {
            const [price, quantity, shipping] = numbers;
            const totalPrice = price * quantity + shipping;
            componentService.showPrice(totalPrice); 
        } else {
            errorService.showErrorMessage(inputs, numbers);
        }
    };

    componentService.onClick(calTotal);
};

app();