import React, { Component } from 'react';
import GetImageButton from  './GetImageButton';
import ImageDisplay from  './ImageDisplay';


export default class GetImageForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "",
    }

    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
  }

handleRover(e){
  this.setState({rower: e.target.value});
}

handleCamera(c){
  this.setState({rower: c.target.value});
}

handleSol(f){
  this.setState({rower: f.target.value});
}

  render() {
    console.log(this.state.sol);
    return (

        <div className="Main">

                <label htmlFor="rover">Rover</label>
                      <select onChange={this.handleRover} id="rover" value={this.state.value}>
                            <option value="Curiosity">Curiosity</option>
                            <option value="Opportunity">Opportunity</option>
                            <option value="Spirit">Spirt</option>
                      </select>

                      <label htmlFor="camera">Camera Type</label>
                          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
                              <option value="fhaz">FHAZ (Front Hazard)</option>
                              <option value="rhaz">RHAZ (Rear Hazard)</option>
                              <option value="navcam">NAVCAM (Navigation Cam)</option>
                        </select>

                      <label htmlFor="sol">Martian Sol: 1000-2000</label>
                      <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </div>
    );
  }
}
