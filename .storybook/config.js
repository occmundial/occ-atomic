import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
    addonPanelInRight: true
});

function loadStories() {
    require('../stories/elements/Button.js');
    require('../stories/elements/Input.js');
    require('../stories/elements/Card.js');
    require('../stories/elements/Grid.js');
    require('../stories/elements/Flexbox.js');
    require('../stories/elements/Droplist.js');
    require('../stories/molecules/Autocomplete.js');
    require('../stories/elements/Label.js');
}

configure(loadStories, module);