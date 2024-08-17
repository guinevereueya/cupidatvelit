function visitInputs(form, f, options = {}) {
    // Set default values for options using destructuring
    const {
        filterTag = 'INPUT', // Default tag to filter inputs
        logErrors = true     // Default option to log errors
    } = options;

    // Check if the provided form is valid
    if (!form || !form.elements) {
        if (logErrors) {
            console.error("Invalid form provided");
        }
        return;
    }

    // Iterate over all elements in the form
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        
        // Apply the callback function to each filtered element
        if (element.tagName === filterTag) {
            f(element);
        }
    }
}

// Example usage
const myForm = document.getElementById("myForm");

// Define a callback function that does something with each input element
function exampleCallback(input) {
    console.log("Visiting input: ", input.name);
}

// Visit all input elements in the form and apply the callback function with options
visitInputs(myForm, exampleCallback, { filterTag: 'INPUT', logErrors: false });
