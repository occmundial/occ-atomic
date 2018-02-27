import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
    addonPanelInRight: true
});

function loadStories() {
    require('../stories/elements/Button.js');
    require('../stories/elements/Input.js');
}

configure(loadStories, module);