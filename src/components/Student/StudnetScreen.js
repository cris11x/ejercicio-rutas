import React from 'react';
import { PeopleList } from '../people/PeopleList';

export const StudnetScreen = () => {
    return (
        <div>
            <h1>Estudiante</h1>
            <hr/>
            <PeopleList role='Estudiante' />
        </div>
    )
}
