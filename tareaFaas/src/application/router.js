import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import ListAutores from '../components/artistas/list';
import UpdateAutores from '../components/artistas/update';
import addArtista from '../components/artistas/add';
import showArtista from '../components/artistas/show';
import IndexMenu from '../components/index'
import ListPinturas from '../components/pinturas/list';
import ShowPinturas from '../components/pinturas/show';
import addPintura from '../components/pinturas/add';
import UpdatePinturas from '../components/pinturas/update';
import ListMuseos from '../components/museos/list';
import ShowMuseo from '../components/museos/show';
import addMuseo from '../components/museos/add';
import UpdateMuseos from '../components/museos/update';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={IndexMenu}/>

            <Route path="/artista/:id" component={UpdateAutores}/>
            <Route path="/artistas" component={ListAutores}/>
            <Route path="/artistaShow/:id" component={showArtista}/>
            <Route path="/addartistas" component={addArtista}/>

            <Route path="/pinturas" component={ListPinturas}/>
            <Route path="/showpintura/:id" component={ShowPinturas}/>
            <Route path="/addpintura" component={addPintura}/>
            <Route path="/pintura/:id" component={UpdatePinturas}/>

            <Route path="/museos" component={ListMuseos}/>
            <Route path="/museoShow/:id" component={ShowMuseo}/>
            <Route path="/addmuseo" component={addMuseo}/>
            <Route path="/museo/:id" component={UpdateMuseos}/>

            <Route path="*" component={() => <div>404</div> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;
