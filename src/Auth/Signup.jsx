import Axios  from 'axios';
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery'
import './Auth.css'


function Signup ()
{
      const [names, setnames] = useState('')
      const [phone, setphone] = useState('')
      const [ pass, setpass ] = useState( '' )
      const [ errors, seterrors ] = useState( '' )
      let nameregix = /^[a-zA-Z ]+$/;
      let phonenumb = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      let passwdregix = /^(?=.*[0-9])(?=.*[!@?#$%^&*])[a-zA-Z0-9!@?#$%^&*]{6,16}$/;

      //Asai


      const navigate = useNavigate();
      

      
    

      const handlechange = async ( e ) =>
      {
            e.preventDefault();

            let mainma = document.querySelector( "#names" );
            let unic = document.querySelector( "#unic" );
            let passes = document.querySelector( "#passes" );
            let signupb = document.querySelector( "#signupb" );
            let signuponme = document.querySelector( ".signuponme" );
            let signspi = document.querySelector( ".spinner-border" );
            
            var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var passwordLength = 100;
            var password = "";

            for ( var i = 0; i <= passwordLength; i++ )
            {
                  var randomNumber = Math.floor( Math.random() * chars.length );
                  password += chars.substring( randomNumber, randomNumber + 1 );

            }

            let joy = password.match( /.{1,10}/g );
            
          
            if ( names.length < 3 )
            {
                  mainma.style.border = "2px solid red";
                  mainma.focus();
                  unic.style.border = "1px solid #d8d8d8";
                  passes.style.border = "1px solid #d8d8d8";
                  seterrors( "Please Enter Your Name!" );
            }
            else if ( !names.match( nameregix ) )
            {
                  mainma.style.border = "2px solid red";
                  mainma.focus();
                  unic.style.border = "1px solid #d8d8d8";
                  passes.style.border = "1px solid #d8d8d8";
                  seterrors( "This is Not A Valid Name" );
            }
            else if ( phone.length < 4 )
            {
                  unic.style.border = "2px solid red";
                  unic.focus();
                  mainma.style.border = "1px solid #d8d8d8";
                  passes.style.border = "1px solid #d8d8d8";
                  seterrors( "Remember! Your have limited tries. please enter you phone number" );
            }
            else if ( !phone.match( phonenumb ) )
            {
                  unic.style.border = "2px solid red";
                  unic.focus();
                  mainma.style.border = "1px solid #d8d8d8";
                  passes.style.border = "1px solid #d8d8d8";
                  seterrors( "Please Enter Your Valid Phone Number..." );
            }
            else if ( pass.length < 8 )
            {
                  passes.style.border = "2px solid red";
                  passes.focus();
                  mainma.style.border = "1px solid #d8d8d8";
                  unic.style.border = "1px solid #d8d8d8";
                  seterrors( "Your Password is not Secured.. Please Enter a secured password up - 8" );
            }
            else if ( !pass.match( passwdregix ) )
            {
                  passes.style.border = "2px solid red";
                  passes.focus();
                  mainma.style.border = "1px solid #d8d8d8";
                  unic.style.border = "1px solid #d8d8d8";
                  seterrors( "Your Password must contain your Letters, either of these symbols '{@#$%^&*}' and numbers " );
            }
            else
            {
                  mainma.style.border = "1px solid #d8d8d8";
                  unic.style.border = "1px solid #d8d8d8";
                  passes.style.border = "1px solid #d8d8d8";
                  seterrors( "" );
                  signupb.innerHTML = "Please Wait...";
                  signupb.setAttribute( "disabled", "disabled" );
                  signspi.style.display = "block";
                  mainma.setAttribute( "disabled", "disabled" );
                  unic.setAttribute( "disabled", "disabled" );
                  passes.setAttribute( "disabled", "disabled" );
                  
                  let unic_id = joy.join( '-' );

                 
                  $.ajax( {
                        method: "POST",
                        url: "https://myapp-1.badzybaddest.repl.co/post/signup/now",
                        data: {
                              names: names,
                              phone: phone,
                              pass: pass,
                              unic_id: unic_id
                        },
                        success: function ( data )
                        {
                              if ( data === "success" )
                              {
                                    navigate("../Login")
                              }
                              else
                              {
                                    seterrors( data );
                                    signupb.innerHTML = "Sign Up";
                                    signupb.removeAttribute( "disabled" );
                                    signspi.style.display = "none";
                                    mainma.removeAttribute( "disabled" );
                                    unic.removeAttribute( "disabled" );
                                    passes.removeAttribute( "disabled" );
                              }
                        }
                  } );

                  
                  
            }
      };

      

      return (
            <div className='main'>
                  <title>Sign up - Hackfriends</title>
                  <form onSubmit={ handlechange } action="">
                        <h4 style={ { fontSize: '30px', fontWeight: '900' } }>Sign Up</h4>
                        <input onChange={ e => setnames( e.target.value ) } id='names' type="text" placeholder='Name' />
                        <input onChange={ e => setphone( e.target.value ) } id='unic' type="tel" placeholder='Phone Number' />
                        <input onChange={ e => setpass( e.target.value ) } autoComplete='false' id='passes' type="password" placeholder='Password' />
                        <button id='signupb' style={{textAlign: 'center',display: 'flex', justifyContent: 'center'}}>
                              <span  className='signuponme'>Sign Up</span>
                              <span style={{display: 'none', textAlign: 'center'}} className='spinner-border'></span>
                        </button>
                        <div className="errors">{ errors }</div>
                        <Link to="../Login">
                              Already Have An Account? Login
                        </Link>
                  </form>
            </div>
      );
}

export default Signup;