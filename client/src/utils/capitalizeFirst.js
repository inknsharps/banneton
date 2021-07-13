export const capitalizeFirst = string => {
    if (!string[0]) {
        return;
    };
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
};