import React from 'react';
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Home from './components/Home'
import DetallePuesto from './components/puestos/DetallePuesto'
import Reportes from './components/Reportes'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import PuestoState from './context/puestos/puestoState'
import SectorState from './context/sectores/sectorState'


function App() {
  return (
    <SectorState>
      <PuestoState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/detalle-puesto/:id" component={DetallePuesto}/>
            <Route exact path="/reportes" component={Reportes}/>
          </Switch>
        </Router>

      </PuestoState>
    </SectorState>
  );
}

export default App;
