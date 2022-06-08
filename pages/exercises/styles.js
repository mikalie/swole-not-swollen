import styled from '@emotion/styled';
import {PageSelection} from '../../Components/PageSelection';
import {PageSelectionOption} from '../../Components/PageSelectionOption';
import ExerciseList from '../../components/ExerciseList';

export const Button = styled.button`
    background-color: papayawhip;
`

export const TestSelect = styled.li`
    list-style-type: none;
`

export const StyledPageSelection = styled(PageSelection)`
    list-style-type: none;
    border-radius: 5px;
`
export const PageSelectionIndividual = styled(PageSelectionOption)`
    background-color: white;
    padding: 10px;
    border-style: solid;
`

export const StyledExerciseList = styled(ExerciseList)`
    color: blue;
`

export const ListContainer = styled.li`
    width: 150px;
`