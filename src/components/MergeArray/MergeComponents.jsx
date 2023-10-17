import { useState } from "react";
import mergeArrayItems from "../../utils/mergeArrayItems";
import './MergeComponents.css';


const MergeComponents = () => {


    //state not needed can use const too
    const [oldProdList, setOldProductList] = useState([
        { productName: "item A" },
        { productName: "item C" },
        { productName: "item D" },
        { productName: "item E" },
        { productName: "item F" },
        { productName: "item G" },
        { productName: "item H" },
    ]);

    const [newProdList, setNewProdList] = useState([ //10 nos
        { productName: "item I new" },
        { productName: "item J new" },
        { productName: "item K new" },
        { productName: "item L new" },
        { productName: "item M new" },
        { productName: "item N new" },
        { productName: "item O new" },
        { productName: "item P new" },
        { productName: "item Q new" },
        { productName: "item R new" },
    ]);



    const [meregedoldProdList, setMergedoldProdList] = useState([]);


 
    const handleMerge = () => {

        const copy = oldProdList.map(item => ({ ...item })); //done to prevent state mutation
        const mergedOldProdList = mergeArrayItems(copy, newProdList, [5, 8, 9]); 
        setMergedoldProdList(mergedOldProdList);
    }

    return (
        <>
            <h2>oldProdList</h2>

            <div className="flex-container">
                {oldProdList.map((item, index) =>
                    <div className="box" key={index}>{item.productName}</div>)}
            </div>


            <h2>newProdList</h2>
            <div className="flex-container">
                {newProdList.map((item, index) =>
                    <div className="box" key={index}>{item.productName}</div>)}
            </div>



            <button className="btn btn--primary" onClick={() => handleMerge()}>Click to Merge oldProdList</button>


            <h2>mereged oldProdList</h2>
            <div className="flex-container">
                {meregedoldProdList.map((item, index) =>
                    <div className="box" key={index}>{item.productName}</div>)}
            </div>


        </>
    );
}

export default MergeComponents;