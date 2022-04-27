import React from 'react';
import PageSelectionOption from './PageSelectionOption';

let PageSelection = () => {

const pages = ['Workout Plans', 'Exercises', 'Other Options', 'New Option'];
const pageOptions = [];

for (let i = 0; i < pages.length; i++) {
    pageOptions.push(
        <PageSelectionOption dropdownOption = {pages[i]}/>
    );
    console.log(pageOptions);
}

    return (
    <select className="pageDropdown">
        {pageOptions}
    </select>
    )
}

export default PageSelection;
