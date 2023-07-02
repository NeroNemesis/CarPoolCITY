import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const search = () => {
    return ( 
        <div style={{overflowX: "hidden"}}>
            <div className="row mt-5 mb-5 hRow">
                <div id="colToHide" className="col"></div>
                <div className='col'>
                    <p className="text-center home-title mt-auto mb-0">Où allez-vous ?</p>
                </div>
                <div className='col d-flex justify-content-end' id="colToMove">
                    <a href="#" style={{textDecorationColor: "black", fontStyle: "italic", color: "black"}} className="mt-auto mb-0 pe-5 me-5">
                        <h5 style={{fontSize: "2.6vmin"}}>Devenir un conducteur&nbsp;&nbsp;<FontAwesomeIcon id="driverIcon" icon="fa-solid fa-arrow-right" style={{color: "#c30606"}} /></h5>
                    </a>
                </div>
            </div>
            <form action="search.php" method="post">
                <div className="row mt-5 ms-5 me-5 topSearchRow">
                    <div className="col">
                        <div className="row leftRighSearchRow">
                            <div className="col searchInput">
                                <FontAwesomeIcon className='searchIcon' icon="fa-solid fa-location-dot" style={{color: "#000000",}} />
                                <input className="input-field" type="text" placeholder="Lieu de départ" required/>
                            </div>
                            <div className="col searchInput">
                                <FontAwesomeIcon className='searchIcon' icon="fa-solid fa-location-dot" style={{color: "#000000",}} />
                                <input className="input-field" type="text" placeholder="Lieu d'arrivée" required/>
                            </div>
                        </div>
                    </div>
                    <div className="col middleSearchCol">
                        <div className='row middleSearchRow'>
                            <div className="col"></div>
                            <div className="col-md-auto searchInput text-center">
                                <FontAwesomeIcon className='searchIcon' icon="fa-solid fa-calendar-days" style={{color: "#000000",}} />
                                <input className="input-field2 date-input" type="date" placeholder="Quand ?" required/>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row leftRighSearchRow">
                            <div className="col searchInput">
                                <FontAwesomeIcon className='searchIcon' icon="fa-solid fa-clock" style={{color: "#000000",}} />
                                <input id='time-input1' className="input-field" type="time" required/>
                            </div>
                            <div className="col searchInput">
                                <FontAwesomeIcon className='searchIcon' icon="fa-solid fa-clock" style={{color: "#000000",}} />
                                <input id="time-input2" className="input-field" type="time" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-5 justify-content-center">
                    <label className="switch mb-1">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label> 
                    <p className='my-auto ms-2' style={{fontSize: "2.6vmin"}} id='tq'>
                        <strong>Trajet quotidien</strong>
                        &nbsp;&nbsp;
                        <FontAwesomeIcon 
                            icon="fa-solid fa-circle-info" 
                            title={"cliquez sur le boutton switch si ceci est un trajet qui vous ferez sur quotidiennement. Vous verez des conducteurs en mesure d'effectuer ce trajet quotidiennement avec vous."} 
                            style={{color: "#000000", fontSize: '3vmin'}} 
                        />
                    </p>
                </div>
                <div className='d-flex justify-content-center'>
                    <button id='searchButton' className='bg-transparent border-0 home-title mt-5 mx-auto' type='submit'>C'est parti ! <img className='redArrow' src={process.env.PUBLIC_URL + '/Images/arrowRedRight.jpg'} alt="red arrow" /></button>
                </div>
            </form>
        </div>
     );
}
 
export default search;