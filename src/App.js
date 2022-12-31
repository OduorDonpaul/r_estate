import './App.css';
import Products from './Products';


function App(){
    return(
        <div className='App'>
            
            <div>
                <nav className = 'navbar navbar-default'>
                        <div className = 'container-fluid'>
                            <div className='navbar-header'>
                                <a className='navbar-brand' href='#'>Logo</a>
                            </div>
                            <ul className = 'nav navbar-nav'>
                                <li><a href='#' >Buy</a></li>
                                <li><a href='#' >Sell</a></li>
                                <li><a href='#' >Rent</a></li>
                                <li><a href='#' >Accommodation</a></li>
                            </ul>
                            <ul className = 'nav navbar-nav navbar-right'>
                                <li><a href='#' >Advertise</a></li>
                                <li><a href='#' >Help</a></li>
                                <li><button type='button' className="btn btn-default navbar-btn btn-sm"><a href='#' >Sign in</a></button></li>
                                <li><button type="button" className="btn btn-default navbar-btn btn-sm"><a href='#' >Register</a></button></li>
                            </ul>
                        </div>
                </nav>
            </div>
            <Products />
            
            
            <footer>
                <div id='footer' className='container col-sm-12'>
                    <div className='col-sm-4' id='social_media'>
                            <div>
                                <span className='icon'><img src={require('./assets/images/facebook1.png')} height='35px' width='35px' alt='facebook_icon'></img></span>
                                <span className='icon'><img src={require('./assets/images/instagram1.png')} height='35px' width='35px' alt='instagram_icon'></img></span>
                                <span className='icon'><img src={require('./assets/images/twitter1.png')} height='35px' width='35px' alt='twitter_icon'></img></span>
                            </div>
                            
                    </div>
                    <div className='col-sm-4' id='about'>
                        <p>This is where to look if you want to know more about us</p>
                    </div>
                    <div className='col-sm-4' id='contact_us'>
                        <p>This is how to contact us</p>
                    </div>
                </div>
                <div className='col-sm-12'> <p style={{font:'1em', color:'grey'}}>logo&copy; 2022</p></div>
                
            </footer>
        </div>
    );
};

export default App;
