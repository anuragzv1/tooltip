import React from 'react';

//importing the tooptip component
import ToolTip from './ToolTip';

class Button extends React.Component {
    render() {
        const { toolTipPosition, showToolTip } = this.props;
        return (
            <div className="button" style={this.styles.button}>
                <div className="hover-div" style={this.styles.hoverDiv}>
                    Hover Me!<br/>
                </div>
                {/* conditionally rendering the ToolTip if  showToolTip is true */}
                {showToolTip && <ToolTip toolTipPosition={toolTipPosition} />}
            </div>
        )
    }

    styles = {
        button: {
            display: "flex",
            justifyContent: "center",
        },
        hoverDiv: {
            marginTop: 50,
            lineHeight: 0.7,
            position: 'absolute',
            cursor: 'pointer',
            width: 150,
            height: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'white',
            borderRadius: 7,
            fontSize: 20
        },

    }
}

export default Button;