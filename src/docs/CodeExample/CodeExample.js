import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

class CodeExample extends React.Component {
    
    componentDidMount() {
        hljs.registerLanguage('javascript', javascript);
        hljs.configure({useBR: true, tabReplace: true});
        hljs.highlightBlock(this.element);
    }
    
    render() {
        const { classes } = this.props;
        return (
            <pre className={classes.pre} ref={ref => { this.element = ref }}>
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