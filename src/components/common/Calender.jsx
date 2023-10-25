
//type="date" 
//type="datetime-local"
//type="time" 
//type="week"
//type="month" 

const Calender = ({ value, onChange }) => {


    return (
        <div>
            <label htmlFor="date" className="my-label my-label--secondary my-label--block">Select Date</label>
            <input
                type="date"
                name="date"
                id="date"
                className="my-input-calender"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Calender;