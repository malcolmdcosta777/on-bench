export const generateRandomColor = () =>{


    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//might give invalid color?

    return  randomColor ;


}