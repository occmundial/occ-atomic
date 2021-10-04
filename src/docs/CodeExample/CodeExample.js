import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

export default function CodeExample({ children, classes }) {
    return (
        <Highlight
            {...defaultProps}
            theme={theme}
            code={children.trim()}
            language={'jsx'}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={`${className} ${classes.pre}`}
                    style={{
                        ...style,
                        overflow: 'scroll',
                        marginTop: 20,
                        marginBottom: 20,
                        padding: 16
                    }}
                >
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}

CodeExample.propTypes = {
    children: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};
