import React from 'react';
import ReactDOM from 'react-dom';

import Settings from '../addons/settings/settings.jsx';
import SettingsStore from '../addons/settings-store';
import appTarget from './app-target';

const onReloadNow = () => {
    if (window.opener) {
        window.opener.postMessage({
            type: 'reload'
        }, location.origin);
    }
};

const onSettingsChanged = () => {
    if (window.opener) {
        window.opener.postMessage({
            type: 'settings-changed',
            store: SettingsStore.store
        }, location.origin);
    }
};

ReactDOM.render((
    <Settings
        onReloadNow={window.opener && onReloadNow}
        onSettingsChanged={onSettingsChanged}
    />
), appTarget);