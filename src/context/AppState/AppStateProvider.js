/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';


import { AppStateContext } from './AppStateContext';

export function AppStateProvider({ children }) {
    const [ isVisibleDetailedFilmModal, setIsVisibleDetailedFilmModal ]  = useState(false);
    const [ isVisibleCreateFilmModal, setIsVisibleCreateFilmModal ]  = useState(false);

    const context = {
      isVisibleDetailedFilmModal,
      isVisibleCreateFilmModal,
      setIsVisibleDetailedFilmModal,
      setIsVisibleCreateFilmModal,
    };

    return (
        <AppStateContext.Provider value={context}>
            {children}
        </AppStateContext.Provider>
    );
}

