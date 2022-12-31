import './Products.css';   

function Products(){
    return( 
            <div>{/*main <div> in Products component*/} 
                <div id='search' className='vh-100'>{/* <div> containing search bar*/}
                    <h1 style={{fontWeight:'bold'}}>Discover it. Tour it</h1>
                    <form className='form-horizontal'>
                        <div className=' form-floating form-group '>
                            <input type='text' className='form-control' placeholder='Enter an address, neighborhood or city'></input>
                        </div>
                    </form>
                </div>
                <div>{/*<div> containing other products*/}
                    <div id='product_accommodation' className='product col-sm-12'>{/*<div> accommodation product*/}
                            <div className='col-sm-8'>{/*<div containing accommodation image*/}
                                <img height={200} width={500} src={require('./assets/images/accommodation.jpg')}></img>
                            </div>
                            <div style={{paddingTop:'5%'}} id='accommodation_p' className='product col-sm-4'>{/*<div containing accommodation product text*/}
                                <p>Browse availabe accommodations </p>
                                <button>Find accommodation</button>
                            </div>
                            
                    </div>
                    <div id='product_rental' className='product col-sm-4'>{/*<div containing rent product*/}
                        <img height={200} width={300} src={require('./assets/images/rental.jpg')}></img>
                        <p> Browse availabe rental houses</p>
                        <button>Rent a house</button>
                    </div>
                    <div id='product_buy' className='product col-sm-4' >{/*div containing buy product*/}
                        <img height={200} src={require('./assets/images/buy.jpg')}></img>
                        <p>Browse available houses for sale</p>
                        <button>Buy a house</button>
                    </div>
                    <div id='product_sell' className='product col-sm-4'>{/* div containing sell product*/}
                        <img height={200} width={300} src={require('./assets/images/sell.jpg')}></img>
                        <p>Sell a house with us</p>
                        <button>Sell a house</button>
                    </div>
                    <div id='product_shop' className='product col-sm-4'>{/*div containing shop product*/}
                        <img height={200} src={require('./assets/images/shop.jpg')}></img>
                        <p>Browse available shops to let</p>
                        <button>Rent a shop</button>
                    </div>
                    <div id='product_office' className='product col-sm-4'>{/*div containing office product*/}
                        <img height={200} width={300} src={require('./assets/images/office.jpg')}></img>
                        <p>Find an office that suits your needs</p>
                        <button>Rent an office</button>
                    </div>
                    <div id='product_warehouse' className='product col-sm-4'>{/*div containing warehouse product*/}
                        <img height={200} width={300} src={require('./assets/images/warehouse.jpg')}></img>
                        <p>Find a godown that suits your storage needs</p>
                        <button>Find a godown</button>
                    </div>
                </div>    
            </div>
    );
};

export default Products;