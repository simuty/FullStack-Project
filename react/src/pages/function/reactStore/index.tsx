import * as React from 'react';
import { StoreProvider } from 'think-react-store';
import log from 'think-react-store/middlewares/log';
import * as store from './store';
import User from './user'

export interface IStoreProps {}

export default function Store(props: IStoreProps) {
    return (
        <StoreProvider store={store} middleware={[log]}>
            <User></User>
        </StoreProvider>
    );
}
