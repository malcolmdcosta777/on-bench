
// try creating a component called calendar and just display message saying "Selected day is .....and date is ........"


import { useState } from "react";
import Calender from "../common/Calender";
import { getFormattedDate, getTodayDateFormatted, getWeekDay } from "../../utils/dateHelperFuncs";


//could have used a external library like i always do but wanted to try default input
//also didnt use library like moment, date-fns, daysjs like i always do cause wanted to do without using them

const DisplayDayDate = () => {


    // const [date, setDate] = useState("");
    const [date, setDate] = useState(getTodayDateFormatted);  //used use state initial function

    const handleChange = (e) => {
        //typeof e.target.value ---> 2023-10-18 ---> string
        setDate(e.target.value);
    };

    return (
        <div className="my-container-fluid">
            <div className="my-margin-bottom-10">
                <Calender value={date} onChange={handleChange} />
            </div>
            {date &&
                <div className="my-margin-bottom-10">
                    {`Selected day is ${getWeekDay(date)} and date is ${getFormattedDate(date, "D/M/Y")}`}
                </div>
            }
        </div>
    );
}

export default DisplayDayDate;