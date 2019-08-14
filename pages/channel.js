import Layout from '../components/Layout';
import SerieGrid from '../components/SerieGrid';
import AudioList from '../components/AudioList';
import Banner from '../components/Banner';
import Error from './_error';
export default class extends React.Component{
   
    static async getInitialProps({ query,res }){
        let idChannel = query.id;
        try{
            let [reqChannel,reqAudio,reqSeries] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    
            ])
            
            if(reqChannel.status >= 400){
                res.statusCode= reqChannel.status
                return { channel:null,audioClips:null,seres:null,statusCode:404}
            }
            
            
            let dataChannel = await reqChannel.json();
            let channel = dataChannel.body.channel;
    
         
            let dataAudio = await reqAudio.json();
            let audioClips = dataAudio.body.audio_clips;
            
    
            let dataSeries = await reqSeries.json();
            let series = dataSeries.body.channels;
    
            return {  channel,audioClips,series,statusCode: 200  };
            
        }catch (e){
            res.statusCode=503;
            return { channel:null,audioClips:null,seres:null,statusCode:503}
        }
       
        

    }

   
    render(){
        const { channel,audioClips,series,statusCode } = this.props;
        
        if( statusCode !== 200 ){
            return <Error statusCode={statusCode} />
        }
            return (

                <Layout title={channel.title}>
                    <Banner banner={channel.urls.banner_image.original}/>
                    <h1>{channel.title}</h1>
                    {series.length > 0 ? <SerieGrid series={series} />:''}
                    {audioClips.length > 0 ?<AudioList audioClips={audioClips}/>: ''}
                </Layout>      
                  
        )
    }
}             
                    
                       
            
        
                      
                         
             
                                    
                                  
                        
                   
                   


           
            
            
            
