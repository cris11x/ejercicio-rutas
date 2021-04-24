import React from 'react';
import { PeopleList } from '../people/PeopleList';

export const CoordinatorScreen = () => {
    return (
        <div>
            <h1>Coordinadores</h1>
            <hr/>
            <PeopleList role='Cordinador' />
        </div>
    )
}
