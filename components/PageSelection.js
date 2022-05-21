import React from 'react';

//import PageSelectionOption from './PageSelectionOption';
import { PageSelectionIndividual } from '../pages/exercises/styles';

const pageOptions = [
    {
        title: "Exercises",
        name: "/exercises",
    },
    {
        title: "Workout Plans",
        name: "workoutPlans/workoutPlans",
    },
    {
        title: "Other Options",
        name: "/testEmotion",
    }
]

export const PageSelection = ({className}) => {
   return (
    <ul className={className + " pageOptions"}>
        {pageOptions.map((page, index) => {
            return <PageSelectionIndividual page={page} key={index}></PageSelectionIndividual>
        }
        )}
    </ul>
   ) 
}