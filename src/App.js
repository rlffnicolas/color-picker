import React, { useState, useEffect } from 'react';
import Palette from './ShowPalette/Palette';
import PaletteList from './PaletteList/PaletteList';
import SingleColorPalette from './ShowPalette/SingleColorPalette';
import NewPaletteForm from './NewPalette/NewPaletteForm';
import seedPalettes from './seedPalettes';
import { generatePalette } from './helpers/colorHelpers';
import { Route, Switch } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Page from './Page';
import './App.css';
import './Page.css';

function App() {

  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

  const [palettes, setPalettes] = useState(savedPalettes || seedPalettes)

  const findPalette = id => {
    return palettes.find(palette => {
      return palette.id === id
    })
  }

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette])
  }

  const deletePalette = id => {
    setPalettes(palettes.filter(palette => {
      return palette.id !== id
    }))
  }
  
  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes))
  }, [palettes])

  return (
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition classNames='page' timeout={500} key={location.key}>
          <Switch location={location}>
          <Route
            exact
            path='/'
            render={routeProps => 
                        <Page>
                          <PaletteList 
                            palettes={palettes} 
                            {...routeProps} 
                            deletePalette={deletePalette} 
                          />
                        </Page>
                  }
          />
          <Route
            exact
            path='/palette/new'
            render={routeProps => 
                        <Page>
                          <NewPaletteForm 
                            savePalette={savePalette} 
                            palettes={palettes} 
                            {...routeProps} />
                        </Page>
                  }
          />
          <Route
            exact
            path='/palette/:id'
            render={routeProps =>
                        <Page>
                          <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
                        </Page>
                    }
          />
          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={routeProps =>
              <Page>
                <SingleColorPalette
                  colorId={routeProps.match.params.colorId}
                  palette={generatePalette(findPalette(routeProps.match.params.paletteId))} />
              </Page>}
          />
          <Route 
            exact
            render={routeProps => 
                        <Page>
                          <PaletteList 
                            palettes={palettes} 
                            {...routeProps} 
                            deletePalette={deletePalette} 
                          />
                        </Page>
                  }
            />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    )}/>
  );
}

export default App;
