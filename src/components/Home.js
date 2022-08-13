import React from "react";
import img1 from "../assets/Google_Pixel_6_Pro.png";
import img2 from "../assets/Oneplus_10_Pro5g.png";
import img3 from "../assets/Oppo_A76_black.png";
import img4 from "../assets/Oppo_Find_X5_Pro.png";
import img5 from "../assets/Samsung_Galaxy_S22_Ultra.png";
import img6 from "../assets/Vivo_X80_Pro.png";
import img7 from "../assets/Xiaomi_11x_pro.png";
import img8 from "../assets/xiaomi-12.png";
import "./home.css";

function Home() {
  const images = [{ img1, img2, img3, img4, img5, img6, img7, img8 }];

  const mobilePhones = [
    {
      phoneName: "Google Pixels 6 pro",
      specifications: "6GB ram, 128gb memory, 66watt fast charging",
      colorVariants: "red/green/blue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, repudiandae perferendis tempora architecto accusantium suscipit!",
    },
    {
      phoneName: "Oneplus 10 Pro 5G",
      specifications: "128GB/256GB/512GB storage, no card slot",
      colorVariants: "red/green/blue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, repudiandae perferendis tempora architecto accusantium suscipit!",
    },
    {
      phoneName: "Oppo A76 black",
      specifications:
        "128GB storage, microSDXC,189g, 8.4mm thickness Android 11, ColorOS 11.1",
      colorVariants: "black/blue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, repudiandae perferendis tempora architecto accusantium suscipit!",
    },
    {
      phoneName: "Oppo Find X5 Pro",
      specifications:
        "Android 12, ColorOS 12, 1256GB/512GB storage, no card slot",
      colorVariants: "red/green/blue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, repudiandae perferendis tempora architecto accusantium suscipit!",
    },
    {
      phoneName: "Samsung Galaxy S22 Ultra",
      specifications: "Android 12, One UI 4.1, 128GB/256GB/1TB storage, no card slot",
      colorVariants: "red/green/blue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, repudiandae perferendis tempora architecto accusantium suscipit!",
    },
    {
      phoneName: "Vivo X80 Pro",
      specifications: "Android 12, Funtouch 12, Origin OS Ocean, 256GB/512GB storage, no card slot",
      colorVariants: "red/green/blue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, repudiandae perferendis tempora architecto accusantium suscipit!",
    },
    {
      phoneName: "Xiaomi 11x Pro",
      specifications: "Android 11, MIUI 12, 128GB/256GB storage, no card slot",
      colorVariants: "red/green/blue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, repudiandae perferendis tempora architecto accusantium suscipit!",
    },
    {
      phoneName: "Xiaomi 12",
      specifications: "Android 12, MIUI 13, 128GB/256GB storage, no card slot",
      colorVariants: "red/green/blue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, repudiandae perferendis tempora architecto accusantium suscipit!",
    },
  ];
  return (
    <div className="px-4 m-3">
      <h4 className="text-center py-2">BUY YOUR FAV PHONE</h4>
      {mobilePhones.map((items, index) => (
        <div className="all-items d-flex justify-content-between">
          <div className="left-items">
            {images.map((image) => {
              return (
                <img
                  src={image.img1}
                  className="small-image"
                  alt="mobile image"
                />
              );
            })}
          </div>
          <div className="d-flex justify-content-between border-box px-3 me-2">
            <ul className="mx-5 m-2">
              <h5 className="mb-2">{items.phoneName}</h5>
              <li className="mb-2">{items.specifications}</li>
              <li className="mb-2">{items.colorVariants}</li>
              <li>
                <small>{items.description}</small>
              </li>
            </ul>
            <div className="text-center w-100 mt-4">
              <button className="button-71">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
