export const toLocaleDate = dateString => {
    const parsedDate = new Date(dateString);
    return parsedDate.toLocaleDateString();
};