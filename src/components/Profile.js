import React ,{useState,useRef} from "react";
import { Button,Modal } from "react-bootstrap";
import '../App.css';
import data from "../data";
function Profile(props){
    const [show, setShow] = useState(false);
    const [namee,setName] = useState("");
    const ref = useRef(null);
     const {name} = props;
     
    const handleClose = (e) => {
      e.preventDefault();
  
      setShow(false);
    };
    const handleShow = (e) =>

    { 
        setName(e.target.value)
        setShow(true)
        
    };
  
    return (
      <>
     
        <Button variant="success" onClick={handleShow} value={name} >
          About 
        </Button>
      
        <Modal className="modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          fade={false}
          animation={false}
        >
          <Modal.Header>
            <Modal.Title>Player Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           {data.map((d)=>{
               return d.name === namee ? <div><img src={d.img_url} className="spanimg"/><span className="span-info">Rank : {d.rank}</span>
               <span className="span-info">Country : {d.country}</span>
               <div>
               <span className="infos">Role : {d.skills.Role}</span><span className="infos">Matches Played: {d.stats.matches}</span></div>
               <div>
                   <hr />
               <span className="infos">Runs : {d.stats.runs}</span> <span className="infos">Wickets : {d.stats.wickets}</span>
                </div>
                </div>
               :"" 
           })}
           
              <Button variant="warning" type="submit" onClick={handleClose} 
              className="cancel"
              >
                Cancel
              </Button>
           
          </Modal.Body>
        </Modal>
      </>
    );
}
export default Profile;