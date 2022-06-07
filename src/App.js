import React from "react";
import "./App.css";
import { Card } from "@material-ui/core";
import { Filters } from "./Components/Filters/filters";

function App() {
  return (
    <div className='App'>
      <Card 
        className='box-shadow box-shadow-hover' 
        style={{
          marginTop: '30px',
          height: '680px',
          background: 'linear-gradient(to bottom right, #df93e2, #ffffffee)'
        }}
      >
        <h1 
          style={{ 
            marginTop: '10px', 
            fontSize: '1.8rem', 
            textAlign: 'center', 
            color: '#fff' 
          }}
        >
          TODO APP
        </h1>
        <Filters />
      </Card>
    </div>
  );
}

export default App;