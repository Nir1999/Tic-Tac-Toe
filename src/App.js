import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './choosePlayer';
import Score from './scorecard'

      

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      board:Array(9).fill(null),
      player:null,
      winner:null,
      winindexes:[null,null,null],
      scoreX:0,
      scoreO:0
    }
    
  }
  checkwinner(){
    let winLines=[
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"]

    ];
    for (let index=0;index<winLines.length;index++){
      const [a,b,c]=winLines[index];
      if(this.state.board[a]&&this.state.board[a]===this.state.board[b]&&this.state.board[a]===this.state.board[c]){
        
        this.setState({winner:this.state.player});
        let winstate=[a,b,c];
        this.setState({winindexes:winstate});
        
        let scorX=this.state.scoreX;
        let scorO=this.state.scoreO;
        console.log("winner"+this.state.player);
        if(this.state.player=="X")
        {
          this.setState({
            scoreX:scorX+1
            })
        }
        if(this.state.player=="O"){
          this.setState({
            scoreO:scorO+1
          });
        }
      
      }
    }
  }
  setPlayer(recievedplayerfromchoosePlayer){
      // console.log(recievedplayerfromchoosePlayer);
      // this function allows child to change data of parent
      this.setState(
        {player:recievedplayerfromchoosePlayer}
      );
  }
  handleClick(index){
    let newBoard=this.state.board;
    if(this.state.player&&!this.state.winner)
    if(this.state.board[index]==null)
    {
      newBoard[index]=this.state.player;
      let newPlayer=this.state.player==="X"?"O":"X";
      this.setState({
      board:newBoard,
      player:newPlayer
      });
      this.checkwinner();
    }
    
    //console.log(index);
  }
  
  rendersquares(){
      if(!this.state.winner)
      {
        // console.log("inside");
        return this.state.board.map(
        (square,index)=>
        <div className="box" 
        key={index} 
        onClick={()=>this.handleClick(index)}>
        {square}
        </div>);
        
        }
        else
        {
          let [a,b,c]=this.state.winindexes;
          // console.log(a,b,c);
          return (
            
              
                this.state.board.map(
                  (square,index)=>( (index==a||index==b||index==c)?
                  (<div className="winnerbox"
                    key={index} 
                    onClick={()=>this.handleClick(index)}>
                    {square}
                  </div>
                  ):
                  (
                    <div className="box"
                    key={index} 
                    onClick={()=>this.handleClick(index)}>
                    {square}
                  </div>
                  )))
              
            
          )
         
        }
    
  }
  handleReset(){
    this.setState({
      board:Array(9).fill(null),
      player:null,
      winner:null
    })
  }
  handleResetScore(){
    this.setState({
      scoreX:0,
      scoreO:0
    })
  }
  render(){
    
    let status;
    if(this.state.winner){
      status=<h2>Winner is {this.state.winner}</h2> 
    }
    else{
      status=this.state.player?<h2>Next Player is {this.state.player}</h2>:<Player player={(e)=>this.setPlayer(e)}/>
    }
    return <div className="container">
    <h1>Tic Tac Toe</h1>
    
    
    {status}
    <div className="board">
    {this.rendersquares()}
    </div>
    {/* <button  disabled={!this.state.winner} onClick={()=>this.handleReset()}>Reset</button> */}
    <button onClick={()=>this.handleReset()}>Reset Board</button>
    <Score scoreX={this.state.scoreX} scoreO={this.state.scoreO} resetscore={()=>this.handleResetScore()}/>
    <h2 style={{fontStyle:"italic", fontSize:10}}>Developed by Nirmal Kumar Singh</h2>
  </div>
  }
}

export default App;

