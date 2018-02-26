import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// import '@storybook/addon-console';

setOptions({
    addonPanelInRight: true
});

function loadStories() {
    require('../stories/elements/Button.js');
}

configure(loadStories, module);