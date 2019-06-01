import React, { Component } from 'react';

class Box extends Component{
render() {
    return(
        <div style={ 
           (this.props.gender === "male")?{border:"3px solid blue"}:{border:"3px solid yellow"} } className="box">
            <img src={this.props.img} alt="Logo"/>
            <p className="nom">{this.props.nom}</p>
            <p className="des">{this.props.des}</p>
        </div>
    )
}

}
export default Box ;