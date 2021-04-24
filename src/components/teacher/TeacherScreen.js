import React from 'react'
import { PeopleList } from '../people/PeopleList'

export const TeacherScreen = () => {
    return (
        <div>
            <h1>Profesores</h1>
            <hr/>
            <PeopleList role='Profesor' />
        </div>
    )
}
