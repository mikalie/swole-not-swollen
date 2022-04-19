import React from 'react';
import ExerciseListItem from './ExerciseListItem';

let ExerciseList = () => {

    const exercises = [];

    for (let i = 0; i < 3; i++) {
        exercises.push(
            <tr>
                <td><ExerciseListItem item={i}/></td>
            </tr>);
    }    

    return (
        <table>
           {exercises}
        </table>
    )
   
}

export default ExerciseList;