import { useState } from "react";
import "./Disclaimer.css";


const Disclaimer = () => {


  const [show, setShow] = useState(
    localStorage.getItem("agree") !== "yes"
  );


  const agreeClick = () => {

    localStorage.setItem("agree","yes");

    setShow(false);

  };


  if(!show){
    return null;
  }



  return (

    <div className="overlay">


      <div className="disclaimer">


        <h2>
          Legal Disclaimer
        </h2>



        <p>

        As per the rules of the Bar Council of India,
        we are not permitted to solicit work and advertise.
        By clicking "I Agree" you confirm the following:

        </p>



        <ol>

          <li>
          No advertisement or solicitation has been made.
          </li>


          <li>
          You are visiting this website voluntarily.
          </li>


          <li>
          Information is only for general purposes.
          </li>


        </ol>



        <button onClick={agreeClick}>
          I Agree
        </button>



      </div>


    </div>

  );


};


export default Disclaimer;