import SearchBar from './SearchBar';
import './Home.css';

function Home(){
    return(
        <div className='Homepage'>
            <div>
                <nav className = 'navbar navbar-default'>
                    <div className = 'container-fluid col-sm-8'>
                        <div className = 'navbar-header'>
                            <ul className = 'nav navbar-nav'>
                                <li><a href='#' >logo</a></li>
                                <li><a href='#' >Buy</a></li>
                                <li><a href='#' >Sell</a></li>
                                <li><a href='#' >Rent</a></li>
                                <li><a href='#' >Accommodation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className = 'container-fluid'>
                        <div className = 'navbar-header'>
                            <ul className = 'nav navbar-nav'>
                                <li><a href='#' >Advertise</a></li>
                                <li><a href='#' >Help</a></li>
                                <li><button type="button" className="btn btn-default navbar-btn">Sign in</button></li>
                                <li><button type="button" className="btn btn-default navbar-btn">Register</button></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <SearchBar />
            <footer>
                <div id='footer'>
                    <div className='col-sm-4' id='social_media'>
                            <div>
                                <span className='icon'><img src='./facebook1.png' height='35px' width='35px' alt='facebook_icon'></img></span>
                                <span className='icon'><img src='./instagram1.png' height='35px' width='35px' alt='instagram_icon'></img></span>
                                <span className='icon'><img src='./twitter1.png' height='35px' width='35px' alt='twitter_icon'></img></span>
                            </div>
                            
                    </div>
                    <div className='col-sm-4' id='about'>
                        <p>This is where to look if you want to know more about us</p>
                    </div>
                    <div className='col-sm-4' id='contact_us'>
                        <p>This is how to contact us</p>
                    </div>
                </div>
                <div className='col-sm-12'> logo <span>&copy; 2022</span></div>
                
            </footer>
        </div>
    );
};

export default Home;