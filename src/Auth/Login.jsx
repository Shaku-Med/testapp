import Axios  from 'axios';
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery'


function Login ()
{
      const [phone, setphone] = useState('')
      const [ pass, setpass ] = useState( '' )
      const [ errors, seterrors ] = useState( '' )
      let phonenumb = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      let passwdregix = /^(?=.*[0-9])(?=.*[!@?#$%^&*])[a-zA-Z0-9!@?#$%^&*]{6,16}$/;

      //Asai


      const navigate = useNavigate();
      

      
    

      const handlechange = async ( e ) =>
      {
            e.preventDefault();

            let unic = document.querySelector( "#unic" );
            let passes = document.querySelector( "#passes" );
            let signupb = document.querySelector( "#signupb" );
            let signuponme = document.querySelector( ".signuponme" );
            let signspi = document.querySelector( ".spinner-border" );
            
            var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var passwordLength = 100;
            var password = "";

           
            
          
           
            if ( phone.length < 4 )
            {
                  unic.style.border = "2px solid red";
                  unic.focus();
                  passes.style.border = "1px solid #d8d8d8";
                  seterrors( "Remember! Your have limited tries. please enter you phone number" );
            }
            else if ( !phone.match( phonenumb ) )
            {
                  unic.style.border = "2px solid red";
                  unic.focus();
                  passes.style.border = "1px solid #d8d8d8";
                  seterrors( "Please Enter Your Valid Phone Number..." );
            }
            else if ( pass.length < 8 )
            {
                  passes.style.border = "2px solid red";
                  passes.focus();
                  unic.style.border = "1px solid #d8d8d8";
                  seterrors( "Your Password is not Secured.. Please Enter a secured password up - 8" );
            }
            else if ( !pass.match( passwdregix ) )
            {
                  passes.style.border = "2px solid red";
                  passes.focus();
                  unic.style.border = "1px solid #d8d8d8";
                  seterrors( "Your Password must contain your Letters, either of these symbols '{@#$%^&*}' and numbers " );
            }
            else
            {
                  unic.style.border = "1px solid #d8d8d8";
                  passes.style.border = "1px solid #d8d8d8";
                  seterrors( "" );
                  signupb.innerHTML = "Please Wait...";
                  signupb.setAttribute( "disabled", "disabled" );
                  unic.setAttribute( "disabled", "disabled" );
                  passes.setAttribute( "disabled", "disabled" );
            
            

                 
                  $.ajax( {
                        method: "POST",
                        url: "https://myapp-1.badzybaddest.repl.co/post/login/now",
                        data: {
                              phone: phone,
                              pass: pass,
                        },
                        success: function ( data )
                        {
                              if ( data.successmsg === "success")
                              { 
                                    localStorage.setItem( "_T_R_I_D_", data.unic_id )
                                     navigate( "../" )
                                    
                              }
                              else
                              { 
                                    seterrors( data );
                                    signupb.innerHTML = "Sign Up";
                                    signupb.removeAttribute( "disabled" );
                                    signspi.style.display = "none";
                                    unic.removeAttribute( "disabled" );
                                    passes.removeAttribute( "disabled" );
                                    unic.value = ""
                              }
                        }
                  } );

                  
                  
            }
      };

      useEffect( () =>
      { 
             
            $.ajax( {
                  method: "POST",
                  url: "https://myapp-1.badzybaddest.repl.co/apget/api/get/now",
                  data: {
                        unic_id: localStorage.getItem("_T_R_I_D_"),
                  },
                  success: function ( data )
                  {
                        if ( data.length == 0 )
                        { 
                        }
                        else
                        { 
                              navigate( "../")
                              window.location.reload();
                        }
                        
                  }
            })

      }, [])

      return (
            <div className='main'>
                   <title>Login - Hackfriends</title>
                  <form onSubmit={ handlechange } action="">
                        <h4 style={ { fontSize: '30px', fontWeight: '900' } }>Login</h4>
                        <input onChange={ e => setphone( e.target.value ) } id='unic' type="tel" placeholder='Phone Number' />
                        <input onChange={ e => setpass( e.target.value ) } autoComplete='false' id='passes' type="password" placeholder='Password' />
                        <button id='signupb' style={{textAlign: 'center',display: 'flex', justifyContent: 'center'}}>
                              <span  className='signuponme'>Login</span>
                              <span style={{display: 'none', textAlign: 'center'}} className='spinner-border'></span>
                        </button>
                        <div className="errors">{ errors }</div>
                        <Link to="../Signup">
                              Do Not Have An Account? Signup
                        </Link>
                  </form>
            </div>
      );
}

export default Login;