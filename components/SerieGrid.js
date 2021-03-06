import Link from 'next/link';

export default class SerieGrid extends React.Component{
    render(){
        const { series } = this.props;
        return (
            <div>
                 
                <h2>Series</h2>
                    <div className="channels">
                        {   
                            series.map((serie)=>(
                                <Link href={`/channel?id=${serie.id}`} key={serie.id} prefetch>
                                    <a className="channel">
                                        <img src={serie.urls.logo_image.original} alt="LOGO"/>
                                        <h2>{serie.title}</h2>  
                                    </a>
                                </Link>   
                                    
                            )) 
                        }
                    </div>

                <style jsx>
                   {`
                    .channels{
                        display:grid;
                        grid-gap:15px;
                        padding:15px;
                        grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
                    }
                    a.channel {
                        display:block;
                        text-decoration:none;
                        color:#333;
                        margin-bottom:0.5em;
                    }
                    .channel img {
                        width:100%;
                        border-raduis:3px;
                        box-shadow:0px 2px 6px rgba(0,0,0,0.15);

                    } 
                    h2{
                        padding:5px;
                        font-size:0.9em;
                        font-weight:600;
                        margin:0;
                        text-align:center;
                    } 
                   `}     
                </style>
                
                        
            </div>
        )
    }
}

