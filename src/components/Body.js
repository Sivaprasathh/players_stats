import React from "react";
import { Button} from "react-bootstrap";
import '../App.css';
import Profile from "./Profile"
import data from "../data";
class Body extends React.Component{
    constructor(){
        super();
        this.state={
            players:[],
            showModal:false
        }
        this.inputRef = React.createRef();
    }

searchPlayers = (e)=>{
    let temp=[]
let check = e.target.value;
if(check !== ""){
check = check.toLowerCase();
 temp  = this.state.players.filter((val)=>
{
    let str = val.name.toLowerCase();
    return str.includes(check)
});
this.setState({
    players:temp
})
}
else{
    this.setState({
        players:data
    })
}

}
displayModal=()=>{
    this.setState({
        showModal:true
    })
}
sortPlayers=(e)=>{
    
    if(e.target.value === "sort"){
    let temp = this.state.players;
    temp.sort((a, b) => {
        return a.rank - b.rank;
    });
    this.setState({
        players:temp
    })}
    else if(e.target.value === "default"){
        
        this.setState({
            players:[...data]
        })
    }
   
    
}

handleClose=()=>{
    this.setState({
        showModal:false
    })
}
componentDidMount(){
    
    this.setState({
        players:[...data]
    })
}

    render(){
        return(
            <div>
                  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
     
      <div className="collapse navbar-collapse" id="myNavbar">
       
        <ul class="navbar text-center">
          <input type="text" id="search" autocomplete="off" placeholder="🔍 Search by player name"
          ref={this.inputRef} onChange={this.searchPlayers} className="inpt"
          />
      <Button onClick = {this.sortPlayers} className="bbtn btn-success" value ="sort">Sort by Rank</Button>   
      <Button onClick = {this.sortPlayers} className="bbtn btn-danger" value ="default">Default</Button>   
        </ul>
     
      </div>
    </div>
  </nav>
  <div className="body">
      {this.state.players.length !== 0 ?
                this.state.players.map((d)=>{
                    return  <div className="col-sm-2">
                    <div className="panel panel-primary vegitable">
                      <div className="panel-heading">{d.name}</div>
                      <div className="panel-body"><img src={d.img_url} className="img-responsive" 
                           alt="Image"></img>
                          <div class="panel-footer">
                            <Profile name={d.name}/>
                          </div>
                    </div>
                  </div>
                  </div>
                }):"Loading" }
       </div>        
            </div>
            
        )
    }
}
export default Body;

