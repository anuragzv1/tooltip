//importing react
import React, { Component } from 'react';

//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'


class ToolTip extends Component {
    render() {
        const { toolTipPosition } = this.props;
        //if the tooltip position is top render this
        if (toolTipPosition === 'top') {
            return (
                <div style={styles.toolTipTop} >
                    top<br />
                    <center><FontAwesomeIcon
                        style={{ color: 'black', position: "relative", top: 5 }}
                        icon={faCaretDown} />
                    </center>
                </div>
            )
        }

        //if the tooltip position is bottom render this
        if (toolTipPosition === 'bottom') {
            return (
                <div style={styles.toolTipDown}>
                    <FontAwesomeIcon style={{ color: 'black', position: "relative", top: -15, left: 25 }} icon={faCaretUp} />bottom
                </div>
            )
        }
         //if the tooltip position is left render this
        if (toolTipPosition === 'left') {
            return (
                <div style={styles.toolTipLeft}>
                    left<br />
                    <FontAwesomeIcon
                        style={{ color: 'black', position: "relative", top:5 }}
                        icon={faCaretDown} />
                </div>
            )
        }
         //if the tooltip position is right render this
        if(toolTipPosition==='right'){
            return (
                <div style={styles.toolTipRight}>
                    right<br />
                    <center><FontAwesomeIcon
                        style={{ color: 'black', position: "relative", top: 5 }}
                        icon={faCaretDown} />
                    </center>
                </div>
            )
        }

    }
}

//styles for various tool tips
const styles = {
    toolTipTop: {
        position: 'relative',
        fontFamily: 'sans-serif',
        top: 11,
        borderRadius: 10,
        backgroundColor: 'black',
        color:'white',
        padding: 5,
        height: 25,
        verticleAlign: 'center',
        zIndex: 1,
        width:50,
        textAlign:'center',
        left:5
    },
    toolTipDown: {
        position: 'relative',
        fontFamily: 'sans-serif',
        top: 153,
        left:0,
        width:60,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: 'black',
        color:'white',
        padding: 5,
        height: 25,
        verticleAlign: 'center',
        zIndex: 1
    },
    toolTipLeft: {
        transform: 'rotate(-90deg)',
        position: 'relative',
        fontFamily: 'sans-serif',
        top: 78,
        left:-96,
        width:50,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: 'black',
        color:'white',
        padding: 5,
        height: 25,
        verticleAlign: 'center',
        zIndex: 1
    },
    toolTipRight: {
        position: 'relative',
        fontFamily: 'sans-serif',
        top: 80,
        width:50,
        borderRadius: 10,
        backgroundColor: 'black',
        color:'white',
        padding: 5,
        height: 25,
        verticleAlign: 'center',
        zIndex: 1,
        left:96,
        textAlign:'center',
        transform:'rotate(90deg)'
    }
}

export default ToolTip;