import Link from 'next/link';
import Head from 'next/head';
import Banner from '../components/Banner';
export default class Layout extends React.Component{
    render(){
        const { children,title } = this.props;
        return(
            <div>
                <Head>
                    <title>{title}</title>
                </Head>
                <header><Link href="/"><a>Podcasts</a></Link></header>
                                                 
                {children}
                
                <style jsx>
                {`
                    header{
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                      }
                    header a{
                        color: #fff;
                        text-decoration: none;
                    }
                    h1{
                        font-weight:600;
                        padding:15px;
                    }
                `}
            </style>
             <style jsx global>
             {`
             
                    body{
                         margin:0;
                         font-family:system-ui;
                         
                     }

                     

             `}
            </style>
     
            </div>
           
        )
    }
}