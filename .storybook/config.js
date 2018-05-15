import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
    addonPanelInRight: true
});

function loadStories() {
    require('../stories/elements/Button.js');
    require('../stories/molecules/Input.js');
    require('../stories/elements/Card.js');
    require('../stories/elements/TourTip.js');
    require('../stories/elements/Grid.js');
    require('../stories/elements/Flexbox.js');
    require('../stories/molecules/Droplist.js');
    require('../stories/molecules/Autocomplete.js');
    require('../stories/elements/Label.js');
    require('../stories/elements/Check.js');
    require('../stories/molecules/SubHeader.js');
    require('../stories/molecules/LayerApp.js');
    require('../stories/molecules/Pager.js');
}

configure(loadStories, module);