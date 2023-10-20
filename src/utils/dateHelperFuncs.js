export const getFormattedDate = (dateString, format = "D/M/Y") => {

    let dated = "";

    if (dateString) {
        let objectDate = new Date(dateString); //date object
        let day = objectDate.getDate();
        let month = objectDate.getMonth() + 1;
        let year = objectDate.getFullYear();

        if (format === "D/M/Y") {
            dated = `${day}/${month}/${year}`;
        }
    }

    return dated;
};


export const getTodayDateFormatted = () => { //default format used by input type date --> '2023-10-20' --> Y-M-D

    let objectDate = new Date(); //date object

    let day = objectDate.getDate();
    let month = objectDate.getMonth() + 1;
    let year = objectDate.getFullYear();

    return (`${year}-${month}-${day}`); 
};



export const getWeekDay = (dateString) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let dated = "";

    if (dateString) {
        const dayNo = new Date(dateString).getDay();
        dated = dayNo ? days[dayNo] : "";
    }

    return dated;
};




