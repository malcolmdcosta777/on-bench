import { useState } from "react";
import mergeArrayItems from "../../utils/mergeArrayItems";
import { useEffect } from "react";


const MergeComponents = () => {


    //state not needed can use const too since no axios call
    const [oldProdList, setOldProductList] = useState();

    const [newProdList, setNewProdList] = useState();



    const [meregedoldProdList, setMergedoldProdList] = useState([]);


    useEffect(() => {
        //axios call

        setOldProductList([
            { productName: "item A" },
            { productName: "item C" },
            { productName: "item D" },
            { productName: "item E" },
            { productName: "item F" },
            { productName: "item G" },
            { productName: "item H" },
        ]);

        setNewProdList([ //10 nos
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

    }, [])

    const handleMerge = () => {

        const copy = oldProdList.length > 0 ? oldProdList.map(item => ({ ...item })) :[]; //done to prevent state mutation
        const mergedOldProdList = mergeArrayItems(copy, newProdList, [5, 8, 9]);
        setMergedoldProdList(mergedOldProdList);
    }

    return (
        <>
            <h2>oldProdList</h2>

            <div className="my-display-flex my-flex-wrap my-margin-bottom-10">
                {oldProdList?.length && oldProdList.map((item, index) =>
                    <div className="my-box" key={index}>{item.productName}</div>)}
            </div>


            <h2>newProdList</h2>
            <div className="my-display-flex my-flex-wrap my-margin-bottom-10">
                {newProdList?.length &&  newProdList.map((item, index) =>
                    <div className="my-box" key={index}>{item.productName}</div>)}
            </div>



            <button className="my-btn my-btn--primary" onClick={() => handleMerge()}>Click to Merge oldProdList</button>


            <h2>mereged oldProdList</h2>
            <div className="my-display-flex my-flex-wrap my-margin-bottom-10">
                {  meregedoldProdList.map((item, index) =>
                    <div className="my-box" key={index}>{item.productName}</div>)}
            </div>


        </>
    );
}

export default MergeComponents;