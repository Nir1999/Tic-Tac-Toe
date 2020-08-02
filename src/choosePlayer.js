import React,{Component} from 'react';
import App from './App';

class Player extends Component{

    handleForm(e){
        e.preventDefault();
        this.props.player(e.target.selectedplayer.value);
    }
    render(){
        return (
        
            <form onSubmit={(e)=>this.handleForm(e)}>
            <label>
                Player X
                <input type="radio" name="selectedplayer" value="X"/>
            </label>
            <br/>
            <label>
                Player O
                <input type="radio" name="selectedplayer" value="O"/>
            </label>
            <br/>
            <input style={{color:"red"}} type="submit" value="Start"/>
            <br/>
        </form>)
        
    }
}
export default Player;