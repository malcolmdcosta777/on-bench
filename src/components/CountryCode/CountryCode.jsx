
// Create a component called country code which will allow the user to select a country code and depending on this will filter the states of the selected country, will list on right side drop down list
// and with the country code u also need to display small flag logo besides the code


//ISO Country Codes --> IN, US
//Country Codes --> +91, etc

//<img> cannot appear as a child of <option>.

import US from '../../assets/images/US.png';
import DE from '../../assets/images/DE.png';
import UK from '../../assets/images/UK.png';


import { useState } from 'react';

const countries = [
    { ccode: 'US', image: US },
    { ccode: 'DE', image: DE }, //germany
    { ccode: 'UK', image: UK },
];

const states = {
    US: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    DE: ['Bavaria', 'Bremen', 'Hamburg', 'Hesse'],
    UK: ['England', 'Scotland', 'Wales', 'Northern Ireland']
};


const CountryCode = () => {


    const [selectedCountry, setSelectedCountry] = useState("US");
    const [dropdown, setDropDown] = useState(false);


    const toggleDropDown = () => {
        setDropDown((dropdown) => !dropdown)
    };

    return (
        <>

            <div className='country-codes'>
                <div className="dropdown">
                    <button className='dropdown-toggle' onClick={() => toggleDropDown()}>
                        <div className='dropdown-items-container'>
                            <img src={countries.filter(c=>c.ccode===selectedCountry)[0].image} alt="" className="dropdown-img" />
                            <span className='dropdown-option-label'>{selectedCountry}</span>
                        </div>

                    </button>

                    <ul className={`dropdown-menu ${dropdown ? "open" : ""}`}>
                        {countries.map(country => <li key={country.ccode} className='dropdown-item' onClick={() => { setSelectedCountry(country.ccode); toggleDropDown(); }}>
                            <div className='dropdown-items-container'>

                                <img src={country.image} alt="" className="dropdown-img" />
                                <span className='dropdown-option-label'>{country.ccode}</span>
                            </div>

                        </li>
                        )}
                    </ul>
                </div>



                <select className='select'>
                    {states[selectedCountry].map(state => <option className='select-item' value={state}
                        key={state} >{state}</option>)
                    }
                </select>
                
            </div>


        </>
    );
}

export default CountryCode;