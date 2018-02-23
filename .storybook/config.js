import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/elements/Button.js');
}

configure(loadStories, module);