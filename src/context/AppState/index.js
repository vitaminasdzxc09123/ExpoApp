import { useContext }    from 'react';
import { AppStateContext } from './AppStateContext';

export function useAppState() {
    return useContext(AppStateContext);
}
