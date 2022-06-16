import React from 'react';
import ExerciseListItem from './ExerciseListItem';

const exerciseInfo = [[
    {"id":1,"exercisename":"Push-ups","description":"An exercise where one lies prone and pushes up with the arms.","lastupdateon":"2022-04-01T04:43:12.654Z","lastupdatedby":"Mika","createdon":"2022-04-01T04:43:12.654Z","createdby":"Mika"},
    {"id":2,"exercisename":"Plank","description":"An exercise where one lies prone and holds themself off the ground with the arms.","lastupdateon":"2022-04-01T04:43:12.654Z","lastupdatedby":"Nico","createdon":"2022-04-01T04:43:12.654Z","createdby":"Nico"},
    {"id":3,"exercisename":"Rotator Cuff Lifts","description":"An exercise where one holds the elbows and wrists approximately shoulder-width apart and lifts.","lastupdateon":"2022-04-01T04:43:12.654Z","lastupdatedby":"Mika","createdon":"2022-04-01T04:43:12.654Z","createdby":"Mika"}
  ]];
  
let ExerciseList = ({className}) => {

    const exerciseName = exerciseInfo[0].map(x => x.exercisename);

    const exercises = [];

    for (let i = 0; i < exerciseName.length; i++) {
        exercises.push(
            <tr key={i}>
                <td className="mainList"><ExerciseListItem item={exerciseName[i]}/></td>
            </tr>);
    }    

    return (
        <table className={className}>
            <tbody>
                {exercises}
            </tbody>
        </table>
    )
   
}

export default ExerciseList;