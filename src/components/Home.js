import React from "react";
import img1 from "../assets/Google_Pixel_6_Pro.png";
import "./home.css";

function Home() {
  return (
    <div className="px-4 m-3">
      <h4 className="text-center py-2">BUY YOUR FAV PHONE</h4>
      <div className="all-items d-flex justify-content-between">
        <div className="left-items">
          <img src={img1} className="small-image" />
        </div>
        <div className="d-flex justify-content-between border-box px-3 me-2">
          <ul className="mx-5 m-2">
            <h5 className="mb-2">Phone name</h5>
            <li className="mb-2">short specification</li>
            <li className="mb-2">variants</li>
            <li>
              <small>
                <b> description :</b> Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Fugit totam minima earum eius praesentium quo
                corrupti reiciendis vitae nostrum inventore voluptatibus sit
                aliquid aperiam ipsa rerum, sequi placeat libero expedita
                molestiae atque consequuntur sequi placeat libero expedita amet possimus!
              </small>
            </li>
          </ul>
          <div className="text-center w-100 mt-4">
            <button className="button-71">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
