 
import React from "react";
import PortfolioWeb from "../images/PortfolioWeb.png"

function HeroPage() {
  return (
     <>
     <br>
     </br>
       <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h3 className="display-4 fw-bold ">Building Ideas As A Developer</h3>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-grey-400">
           From sleek designs to seamless functionality, I turn concepts into engaging digital experiences that users love.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
              Primary button
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img
              src={PortfolioWeb}
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example screenshot"
              width="700"
              height="300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
         <br></br>
         <br></br>
       <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-4 fw-bold lh-1 text-body-emphasis">About Me</h2>
                        <p className="lead">I design and build modern, responsive websites that blend clean design with smooth functionality. My focus is creating digital experiences that feel alive and perform beautifully on any device.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroPage;