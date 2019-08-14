export default class Banner extends React.Component{
    render(){
        const {banner}=this.props;
        return(
            <div>
                <div className="banner" style={{    
                backgroundImage: 
                `url(${banner})` 
                }} />
            <style jsx>
                {`
                    .banner {
                        width: 100%;
                        padding-bottom: 25%;
                        background-position: 50% 50%;
                        background-size: cover;
                        background-color: #aaa;
                      }
                `}
            </style>
            </div>
        )
    }
}    
           