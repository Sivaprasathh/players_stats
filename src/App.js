import logo from './logo.svg';
import './App.css';
import Header from "./components/Profile"
import Body from "../src/components/Body"
import { useState } from 'react';
import data from "../src/data";
import { Form, Button, Select, Modal } from "react-bootstrap";
function App() {
 console.log(data);
  return (
    <div>
      
      <Body />

    </div>
  );
}

export default App;
