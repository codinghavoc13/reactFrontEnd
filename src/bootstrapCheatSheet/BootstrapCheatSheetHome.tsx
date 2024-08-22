import React, { useState } from 'react';
import { HomeContent } from './HomeContent';
import { Accordion } from './components/Accordion';
import { Alerts } from './components/Alerts';
import { Buttons } from './components/Buttons';
import { Cards } from './components/Cards';
import { Collapse } from './components/Collapse';
import { Containers } from './components/Containers';
import { Dropdowns } from './components/Dropdowns';
import { Forms } from './components/Forms';
import { Modals } from './components/Modals';
import { RowsAndColumns } from './components/RowsAndColumns';
import { Spinners } from './components/Spinners';
import { Tables } from './components/Tables';
import { NavBar } from './components/NavBar';
import { ProgressBar } from './components/ProgressBar';

export const BootstrapCheatSheetHome = () => {
    const [viewFlag, setViewFlag] = useState('home');
    const updateViewFlag = (view: string) => {
        setViewFlag(view);

    }
    return (
        <div className="container-fluid">
            <NavBar updateViewFlag={updateViewFlag} />
            {viewFlag === 'home' && <HomeContent />}
            {viewFlag === 'containers' && <Containers />}
            {viewFlag === 'buttons' && <Buttons />}
            {viewFlag === 'dropdowns' && <Dropdowns />}
            {viewFlag === 'cards' && <Cards />}
            {viewFlag === 'alerts' && <Alerts />}
            {viewFlag === 'spinners' && <Spinners />}
            {viewFlag === 'collapse' && <Collapse />}
            {viewFlag === 'accordion' && <Accordion />}
            {viewFlag === 'rowsAndColumns' && <RowsAndColumns />}
            {viewFlag === 'tables' && <Tables />}
            {viewFlag === 'forms' && <Forms />}
            {viewFlag === 'modals' && <Modals />}
            {viewFlag === 'progressBar' && <ProgressBar/>}
        </div>
    )
}