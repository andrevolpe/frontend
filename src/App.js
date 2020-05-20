import React from 'react';
import { XMLNS_1_0 } from 'xmlchars';

const lista = [
    { id: 1, name: 'Estudar', done: false},
        { id: 1, name: 'Estudar', done: true},
            { id: 1, name: 'Estudar', done: true}
]
 
function App() {
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
