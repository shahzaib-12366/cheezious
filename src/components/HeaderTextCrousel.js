import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function HeaderTextCarousel() {
  return (
    <div className="text-sm font-bold bg-danger text-white flex justify-center ">
      <Carousel
        slide={true}
        controls={false}
        indicators={false}
        className="h-8 flex justify-center pt-1 "
      >
        <Carousel.Item>
          <div className="flex flex-row">
            <p>FOR ANY QUERY, <a className="underline pl-2 cursor-pointer text-gray-300 hover:text-gray-200 hover:no-underline" >CONTACT US</a></p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <p>Contact no.: <a href="tel:+92323-4458529" className="underline pl-2 cursor-pointer text-gray-300 hover:text-gray-200 hover:no-underline">
            (0323-4458529)
          </a>
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p>FREE DELIVERY IN PAKISTAN</p>
        </Carousel.Item>
        <Carousel.Item>
          <p>FREE INTERNATIONAL SHIPPING</p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex flex-row">
            <p>To Cancel Your Order</p>
            <p className="underline pl-2 cursor-pointer text-gray-300 hover:text-gray-200 hover:no-underline">
              (Click Here)
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
