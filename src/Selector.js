import React from 'react';

//this component renders the Selector of the position of tooltip
class Selector extends React.Component {
    componentDidMount() {
        const { changePostition } = this.props

        //as soon as a new position is selected , change the state
        let e = document.getElementById('positionSelect');
        e.addEventListener('change', function () {
            var pos = e.options[e.selectedIndex].value;
            changePostition(pos);
        });
    }

    render() {
        const { toolTipPosition, changePostition } = this.props;
        return (
            <div className="selector">
                <h3>Select Tooltip Position :</h3>
                {/* Setting background of selected position different */}
                <select id="positionSelect" style={this.styles.dropdown}>
                    <option value='top' className={toolTipPosition === 'top' ? "active" : ""}>Top</option>
                    <option value='bottom' className={toolTipPosition === 'bottom' ? "active" : ""}>Bottom</option>
                    <option value='right' className={toolTipPosition === 'right' ? "active" : ""}>Right</option>
                    <option value='left' className={toolTipPosition === 'left' ? "active" : ""}>Left</option>
                </select>
            </div>
        )
    }

    //styles for the selector
    styles = {
        dropdown: {
            positon: 'sticky',
            backgroundColor: 'red',
            border: 0,
            borderBottom: '2px solid white',
            color: 'white',
            outline: 0,
            marginBottom:50,
        }
    }
}


export default Selector;