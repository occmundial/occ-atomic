import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

class CodeExample extends React.Component {

    componentDidMount() {
        hljs.registerLanguage('javascript', javascript);
        hljs.registerLanguage('xml', xml);
        hljs.configure({useBR: true, tabReplace: true});
        hljs.highlightBlock(this.element);
    }

    render() {
        const { classes } = this.props;
        return (
            <pre className={classes.pre} ref={ref => { this.element = ref; }}>
                <code>
                    {this.props.children}
                </code>
            </pre>
        );
    }
}

CodeExample.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.string.isRequired
};

export default CodeExample;
