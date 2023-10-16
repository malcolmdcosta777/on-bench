// 1. oldProdList
// 2. newProdList

// Let itemsToMerge[5, 8, 9]

// Now merge these items from newProdList to oldProdList


export default function mergeArrayItems(oldProdList = [], newProdList = [], itemsToMerge = []) {


    if (oldProdList.length === 0 || newProdList.length === 0 || itemsToMerge.length === 0) {
        //ignore if empty
    } else {
        itemsToMerge.forEach(itemIndex => {

            const newItem = newProdList[itemIndex];

            if (!newItem) {
                //product at index does not exists in newProdList
            } else {  //adding new product or modify old
                oldProdList[itemIndex] = newItem;
            }

        });
    }

    return oldProdList;

}

