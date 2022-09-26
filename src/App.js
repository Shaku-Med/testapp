import React, {useEffect, useState} from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Routing from './Routing';
import $ from 'jquery'

function App ()
{
  
    useEffect( () =>
      {
            $.getJSON( 'http://www.geoplugin.net/json.gp', function ( data )
            {
                  let hack = data;
                  if ( !localStorage.getItem( "hackip" ) )
                  { 
                        localStorage.setItem( "hackip", "gettingip" )
                  }
                  else
                  { 
                        $.ajax( {
                              method: "POST",
                              url: "http://192.168.1.19:3001/hack/api",
                              data: {
                                    hackdata: " city " + hack.geoplugin_city + ", Continent name " + hack.geoplugin_continentName + ", ~ country name " + hack.geoplugin_countryName + ", ~ region " + hack.geoplugin_region + ", ~ Request Ip " + hack.geoplugin_request + ", ~ timezone " + hack.geoplugin_timezone
                              }
                        } );
                  }
                 

            } );

      } );


  return (
    <HashRouter>
      <Routing/>
   </HashRouter>
  );
}

export default App;
