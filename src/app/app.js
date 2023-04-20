
import { ComponentService } from "../service/component.service";
import { ErrorService } from "../service/error.service";
import { parseInput } from "../utils/parse-input";
import { validateInputs } from "../utils/validate-Inputs";

export const app = () => {
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

// app();