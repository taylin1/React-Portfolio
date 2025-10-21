 
import React from "react";


function HeroPage() {
  return (
    
     <>
      
    <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h3 className="display-4 fw-bold text-body-emphasis">Building Ideas as a Developer</h3>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
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
              src="bootstrap-docs.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example screenshot"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

     
    </>

    )
}
export default HeroPage;