import './SearchBar.css';           
function SearchBar(){
    return( 
            <div>
                <h3>Discover it. Tour it</h3>
                <form className='form-horizontal'>
                    <div className=' form-floating form-group '>
                        <input type='text' className='form-control' placeholder='Enter an address, neighborhood or city'></input>
                    </div>
                </form>
            </div>
    );
};

export default SearchBar;