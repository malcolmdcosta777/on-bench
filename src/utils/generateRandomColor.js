export const generateRandomColor = () => {


    //     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // //might give invalid color?
    //     return  randomColor ;

    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string


    return rgb;

}