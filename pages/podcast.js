import 'isomorphic-fetch';
import Link from 'next/link';
import Layout from '../components/Layout';

export default class extends React.Component{
    static async getInitialProps({query}){
        let idClip = query.id;
        let reqAudioClip = await fetch(`https://api.audioboom.com/audio_clips/${idClip}.mp3`);
        let dataClipAudio = await reqAudioClip.json();
        let ClipAudio = dataClipAudio.body.audio_clip;

        return {ClipAudio};
    }
    
    render(){
        const { ClipAudio } = this.props;
        return(

            <Layout title={ClipAudio.title} audioClips=''>
                
                <div className="modal">
                    <div className="clip">
                        <nav>
                            <Link href={`/channel?id=${ClipAudio.channel.id}`}>
                                <a className="close">&lt;
                                
                                volver

                                </a>
                            </Link>
                        </nav>
                        <picture>
                            <img src={ClipAudio.urls.image || ClipAudio.channel.urls.logo_image.original}/>
                        </picture>
                            <div className="player">
                                <h3>{ClipAudio.title}</h3>
                                <h6>{ClipAudio.channel.title}</h6>
                                <audio controls autoPlay={true}>
                                    <source src={ClipAudio.urls.high_mp3} type="audio/mpeg">
                                </source>
                                </audio>
                            </div>
                        
                    </div>
                </div>
                <style jsx>
            {`  
                nav{
                    background:none;
                }
                nav a {
                    display:inline-block;
                    padding:15px;
                    color:white;
                    cursor:pointer;
                    text-decoration:none;
                }
                .clip{
                    display:flex;
                    height:100%;
                    flex-direction:column;
                    background:#8756ca;
                    color:white;
                }
                picture{ 
                  display:flex;
                  width:auto;
                  height:250px;
                  justify-content:center;
                  align-items:center;
                  flex-direction:column;
                  padding:10px;
                  flex: 1 1;
                 
                    
                    
                }
                picture img {
                   width:50%;
                   heigt:50%;
                   background-position:50% 50%;
                   background-size:contain;
                   background-repeat:no-repeat;
                  
                }
                .player{
                    padding:30px;
                    background:rgba(0,0,0,0.3);
                    text-align:center;
                }
                h3{
                    margin:0;
                }
                h6{
                   margin:0;
                   margin-top:1em; 
                }
                audio{
                    width:100%;
                    margin-top:2em;
                }
                .modal{
                    position:fixed;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    z-index:9999;
                }
                

            `}

            </style>
            
            </Layout>

           
        )
    }
}