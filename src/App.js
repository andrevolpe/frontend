import React, {useState, useEffect} from 'react';
import api from './api';
import { XMLNS_1_0 } from 'xmlchars';
import { useState, useEffect } from 'react';


function App() {

const [lista, setLista] = useState([]);

  return (
      <table> 
          {lista.map(item =>(    
              <tr key={item.id}>
              <td> {item.id} </td>
              <td> {item.name} </td>
              <td> <input type="checkbox" checked={item.done}/> </td>
          </tr>       
          ))}
      </table>
  );
}

export default App;
