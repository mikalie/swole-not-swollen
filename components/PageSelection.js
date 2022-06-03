import React from 'react';

//import PageSelectionOption from './PageSelectionOption';
import { PageSelectionIndividual, ListContainer } from '../pages/exercises/styles';

const pageOptions = [
    {
        title: "Exercises",
        name: "/exercises",
    },
    {
        title: "Workout Plans",
        name: "/workoutPlans",
    },
    {
        title: "Other Options",
        name: "/testEmotion",
    }
]

const addClass = (element) => {
    element.classList.add("selected");
}

const toggleShow = () => {
    let element = document.getElementsByClassName("pageDropdown");
    console.log("element:", element);
    let elementArray = Array.from(element);
    elementArray.forEach(addClass);
}

export const PageSelection = ({className, pageName}) => {
   return (   
    <ul className={className + " pageOptions" + " pageDropdown"} onClick={toggleShow}>
        {pageOptions.map((page, index) => {
            if (pageName == page.title) {
                return <PageSelectionIndividual className="selected" page={page} key={index}></PageSelectionIndividual>
            }    
            return <PageSelectionIndividual page={page} key={index}></PageSelectionIndividual>
        }
        )}
    </ul> 
   ) 
}