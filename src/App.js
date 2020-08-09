//importing React
import React, { Component } from 'react';

//importing tooltip selector
import Selector from './Selector';

//import the button
import Button from './Button';

//importing the css file
import './styles.css';

class App extends Component {
  constructor() {
    super();
    //setting intial states of the tooltip to be not visible
    //and setting the position default to top
    this.state = {
      showToolTip: false,
      toolTipPosition: 'top',
    }
  }

  //this function sets the position of tooltip
  changePostition = (pos) => {
    console.log('function called!');
    if (pos === 'top') {
      this.setState({ toolTipPosition: 'top' });
    }
    else if (pos === 'bottom') {
      this.setState({ toolTipPosition: 'bottom' });
    }
    else if (pos === 'right') {
      this.setState({ toolTipPosition: 'right' });
    }
    else {
      this.setState({ toolTipPosition: 'left' });
    }
  }

  //this function shows the tooltip
  showDiv = () => {
    this.setState({
      showToolTip: true
    })
  }

  //this function hides the tooltip 
  hideDiv = () => {
    this.setState({
      showToolTip: false
    })
  }

  //adding hover event listners as soon as component is mounted
  componentDidMount() {
    let showDiv = this.showDiv;
    let hideDiv = this.hideDiv;
    //this event is fired as soon as the mouse is over the button
    let hoverDiv = document.getElementsByClassName('hover-div')[0];
    hoverDiv.addEventListener('mouseover', function () {
      showDiv();
    });

    //this event is fired as soon as the mouse leaves the button
    hoverDiv.addEventListener('mouseout', function () {
      hideDiv();
    });
  }

  render() {
    const { toolTipPosition, showToolTip } = this.state;
    return (
      <div>
        <center><Selector toolTipPosition={toolTipPosition} changePostition={this.changePostition} /></center>
        <Button showToolTip={showToolTip} toolTipPosition={toolTipPosition} />
      </div>
    );
  }

}

export default App;
