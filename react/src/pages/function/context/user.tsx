import React, { useContext, useEffect } from 'react';
import { UserContext } from './userContext';

export interface IUserProps {}

export default function User(props: IUserProps) {
    const {
        // @ts-ignore
        state: {
            user: { id, name },
        },
    } = useContext(UserContext);

    return (
        <div>
            <h2>user: </h2>
            <h2>user-id: {id}</h2>
            <h2>user-name: {name}</h2>
        </div>
    );
}
