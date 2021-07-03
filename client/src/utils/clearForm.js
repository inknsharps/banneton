// Utility function to just clear out a form after it has been submitted. Pass in the event.target, and the number of inputs to clear as the arguments.
export const clearForm = (eventTarget, inputs) => {
    for (let i = 0; i < inputs; i++) {
        eventTarget[i].value = "";
    };
};