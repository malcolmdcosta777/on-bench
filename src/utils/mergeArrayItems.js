// 1. oldProdList
// 2. newProdList

// Let itemsToMerge[5, 8, 9]

// Now merge these items from newProdList to oldProdList


export default function mergeArrayItems(oldProdList = [], newProdList = [], itemsToMerge = []) {


    if (newProdList.length === 0 || itemsToMerge.length === 0) {
        //ignore if empty
    } else {
        itemsToMerge.forEach(itemIndex => {

            const newItem = newProdList[itemIndex];
            const oldItem = oldProdList[itemIndex];

            if (!newItem) {
                //product at index does not exists in newProdList
            } else if (oldItem) {  // modify old
                oldProdList[itemIndex] = newItem;
            } else if (!oldItem) {  // adding new product  --> cannot use  oldProdList[itemIndex] cause if array short the items before it show as 'undefined'
                oldProdList.push(newItem);
            }

        });
    }

// console.log('oldProdList', oldProdList)

    return oldProdList;

}

