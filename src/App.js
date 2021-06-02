import logo from "./asset/logo.png"
import trophy from "./asset/1.png"
import priceGiving from './asset/2.png'
import products from './asset/3.png'
import './App.css';

function App() {
  return (<>
     <div className="container">
                <div className="nav">
             
                    <img src={logo} className="logo" alt="Company Logo"/>
                </div>
                <div className="body__left">
                    <img src={trophy} className="trophy" alt=""/>
                </div>
                <div className="body__right">
                    <h5> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
                    <ul className="achivments">
                        <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                    <img src={priceGiving} className="price-giving" alt=" price giving" />
                    <figcaption>
                        Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </figcaption>
                
                </div>
                <h6 className="company-title">
                
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
                </h6>
                <div className="company-products">
              <img src={products} className="products" alt="" />
            <span className="products-name"> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </span>
                </div>
                <div className="company-address">
                    <h5 className="title">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
                   
                    <p className="address-row-01">
                        <span>CHEMICALS & PROCESS</span>
                        <span>POWER</span>
                        <span>WATER & WASTE WATER</span>
                        <span>OILS & GAS</span>
                        <span>PHARMA</span>
                        <span>SUGARS & DISTILLERIES</span>
                        <span>PAPER & PULP</span>
                        <span>MARINE & DEFENCE</span>
                        <span> METAL & MINING</span>
                        <span>FOOD & BEVERAGE</span>
                     </p>
                      <p className="address-row-02">
                         <span>PETROCHEMICAL & REFINERIES</span>
                        <span>SOLAR</span>
                        <span>BUILDING</span>
                        <span>HVAC</span>
                        <span>FIRE FIGHTING</span>
                        <span> AGRICULTURE & RESIDENTIAL</span>
                     </p>
                </div>
                <div className="footer">
                  <span className="contact">
                    <img  className="icon" src="asserts/phone-call.svg" alt="" />
                    <p>+898989898989</p> 
                  </span>
                   <span><img className="icon" src="asserts/facebook.svg" alt=""/>
                  
                    +9898226554</span>
                    <span><img className="icon" src="asserts/global.svg" alt=""/>
                  
                      +9898226554</span>

                </div>
     </div>
     
     </>
  );
}

export default App;
