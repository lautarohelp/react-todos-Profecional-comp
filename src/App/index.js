/* import logo from './platzi.webp'; */
import React from 'react';
import { AppUI } from './AppUi.js';

import {useLocalStorage} from '../TodoContext/useLocalStorage.js'
import { TodoProvider } from '../TodoContext/index.js';




function App() {

  
  return(
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}


export default App;
