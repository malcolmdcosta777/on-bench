
//you need to take such type of structure and on click on each square you need to change the color of it. random color

import { useState } from "react";
import { generateRandomColor } from "../utils/generateHexColor";

const RandomBoxes = () => {


    const [boxes, setBoxes] = useState(Array(9).fill(null))

    const handleColorChange = (index) => {
        // console.log('handleColorChange');
        let newBoxes = boxes.map(color => color);
        newBoxes[index] = "#" + generateRandomColor();
        setBoxes(newBoxes);  //change the color  asked  but using it as background instead
    };

    const changeFirstRow = () => {
        const newBoxes = boxes.map((color, index) => index === 0 || index === 1 || index === 2 ? "green" : color);
        setBoxes(newBoxes);
    };


    const changeFirstCol = () => {
        const newBoxes = boxes.map((color, index) => index % 3 === 0 ? "blue" : color); //can do 0%3 since 9 not present in index
        setBoxes(newBoxes);
    };


    return (
        <>



            <div className=" my-mx-auto w-80">

                <div className="my-display-flex  my-flex-center my-margin-bottom-10">

                    <div className="my-display-grid  my-grid-gap-10  my-grid-1x3">
                        {boxes.map((color, index) =>
                            <div
                                className="my-box my-box-white my-box-square-100 "
                                //  style={{ background: color ?? "inherit" }} key={index}
                                style={{ background: color ?? "#ff", color: '#fff' }} key={index} //else reset if hex color invalid
                                onClick={() => handleColorChange(index)}
                            >{color}</div>)}
                    </div>




                </div>

                <div className="my-display-flex  my-flex-center my-flex-gap-10 my-flex-wrap">

                    <div >
                        <button className="my-btn my-btn--primary" onClick={() => changeFirstRow()}>Green 1st Row</button>
                    </div>

                    <div>
                        <button className="my-btn my-btn--secondary" onClick={() => changeFirstCol()}>Blue 1st Column</button>
                    </div>

                </div>


            </div>

        </>
    );
}

export default RandomBoxes;