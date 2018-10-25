import React from 'react';
import PropTypes from 'prop-types';
import { Title, Card, colors } from '@occmundial/occ-atomic';

const primary = [
    {id:1, text:'Lighter', hex:colors.primLighter, code:'primLighter', color:colors.ink, height:1},
    {id:2, text:'Light', hex:colors.primLight, code:'primLight', color:colors.ink, height:1},
    {id:3, text:'Primary', hex:colors.prim, code:'prim', color:colors.white, height:2},
    {id:4, text:'Dark', hex:colors.primDark, code:'primDark', color:colors.white, height:1},
    {id:5, text:'Darker', hex:colors.primDarker, code:'primDarker', color:colors.white, height:1}
];

const secondary = [
    {id:1, text:'Lighter', hex:colors.secLighter, code:'secLighter', color:colors.ink, height:1},
    {id:2, text:'Light', hex:colors.secLight, code:'secLight', color:colors.ink, height:1},
    {id:3, text:'Secondary', hex:colors.sec, code:'sec', color:colors.white, height:2},
    {id:4, text:'Dark', hex:colors.secDark, code:'secDark', color:colors.white, height:1},
    {id:5, text:'Darker', hex:colors.secDarker, code:'secDarker', color:colors.white, height:1}
];

const ink = [
    {id:1, text:'Lightest', hex:colors.inkLightest, code:'inkLightest', color:colors.ink, height:1},
    {id:2, text:'Lighter', hex:colors.inkLighter, code:'inkLighter', color:colors.ink, height:1},
    {id:3, text:'Light', hex:colors.inkLight, code:'inkLight', color:colors.white, height:1},
    {id:4, text:'Ink', hex:colors.ink, code:'ink', color:colors.white, height:3}
];

const background = [
    {id:1, text:'White', hex:colors.bgWhite, code:'bgWhite', color:colors.ink, height:1},
    {id:2, text:'Grey', hex:colors.bgGrey, code:'bgGrey', color:colors.ink, height:5}
];

const grey = [
    {id:1, text:'50', hex:colors.grey50, code:'grey50', color:colors.ink, height:1},
    {id:2, text:'100', hex:colors.grey100, code:'grey100', color:colors.ink, height:1},
    {id:3, text:'200', hex:colors.grey200, code:'grey200', color:colors.ink, height:1},
    {id:4, text:'300', hex:colors.grey300, code:'grey300', color:colors.ink, height:1},
    {id:5, text:'400', hex:colors.grey400, code:'grey400', color:colors.ink, height:1},
    {id:6, text:'500', hex:colors.grey500, code:'grey500', color:colors.white, height:1},
    {id:7, text:'600', hex:colors.grey600, code:'grey600', color:colors.white, height:1},
    {id:8, text:'700', hex:colors.grey700, code:'grey700', color:colors.white, height:1},
    {id:9, text:'800', hex:colors.grey800, code:'grey800', color:colors.white, height:1},
    {id:10, text:'900', hex:colors.grey900, code:'grey900', color:colors.white, height:1}
];

const Colors = ({ classes }) => {
    return (
        <div className={classes.page}>
            <Card shadow={3}>
                <Title h={1}>Colors</Title>
                <p>OCC-Atomic includes a library of colors. The OCC styleguide is strongly based on this color palette.</p>
                <p>To use them, you just need to import the colors object and access to the desired color.</p>
            </Card>
            <Card shadow={3} style={{marginTop:30}}>
                <Title h={2}>Colors</Title>
                <div className={classes.colorBlock}>
                    {primary.map(color => (
                        <div className={classes.colorRow} style={{background:color.hex, color:color.color, height:color.height*48}} key={color.id}>
                            <div className={classes.colorName}>
                                <span className={classes.text}>{color.text}</span>
                                <span className={classes.code}>colors.{color.code}</span>
                            </div>
                            <div className={classes.hex}>{color.hex}</div>
                        </div>
                    ))}
                </div>
                <div className={classes.colorBlock}>
                    {secondary.map(color => (
                        <div className={classes.colorRow} style={{background:color.hex, color:color.color, height:color.height*48}} key={color.id}>
                            <div className={classes.colorName}>
                                <span className={classes.text}>{color.text}</span>
                                <span className={classes.code}>colors.{color.code}</span>
                            </div>
                            <div className={classes.hex}>{color.hex}</div>
                        </div>
                    ))}
                </div>
                <div className={classes.colorBlock}>
                    {ink.map(color => (
                        <div className={classes.colorRow} style={{background:color.hex, color:color.color, height:color.height*48}} key={color.id}>
                            <div className={classes.colorName}>
                                <span className={classes.text}>{color.text}</span>
                                <span className={classes.code}>colors.{color.code}</span>
                            </div>
                            <div className={classes.hex}>{color.hex}</div>
                        </div>
                    ))}
                </div>
                <div className={classes.colorBlock}>
                    {background.map(color => (
                        <div className={classes.colorRow} style={{background:color.hex, color:color.color, height:color.height*48}} key={color.id}>
                            <div className={classes.colorName}>
                                <span className={classes.text}>{color.text}</span>
                                <span className={classes.code}>colors.{color.code}</span>
                            </div>
                            <div className={classes.hex}>{color.hex}</div>
                        </div>
                    ))}
                </div>
                <div className={classes.colorBlock}>
                    {grey.map(color => (
                        <div className={classes.colorRow} style={{background:color.hex, color:color.color, height:color.height*48}} key={color.id}>
                            <div className={classes.colorName}>
                                <span className={classes.text}>{color.text}</span>
                                <span className={classes.code}>colors.{color.code}</span>
                            </div>
                            <div className={classes.hex}>{color.hex}</div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

Colors.propTypes = {
    classes: PropTypes.object,
};

export default Colors;