import React from 'react';

let ExerciseListItem = ({item}) => { //item is now a named input because {}


    return (<p>Exercise #{item + 1}</p>)
}

export default ExerciseListItem;