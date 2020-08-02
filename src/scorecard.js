import React,{Component} from 'react';
import App from './App';

class Score extends Component{

    handleForm(e){
        e.preventDefault();
        this.props.player(e.target.selectedplayer.value);
    }
    handlescorereset(){
        this.props.resetscore();
    }
    render(){
        return (
            <div>
                <h3>Score of X: {this.props.scoreX}</h3>
                <h3>Score of O: {this.props.scoreO}</h3>
                <button onClick={()=>this.handlescorereset()}>Reset Scores</button>
            </div>
            )
        
    }
}
export default Score;