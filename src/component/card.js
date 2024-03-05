import React from "react";
import star from "./Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="relative flex flex-col mx-5 text-xs w-44">
      {badgeText && (
        <div className="absolute px-1 py-2 font-bold bg-white rounded-sm top-2 left-2">
          {badgeText}
        </div>
      )}
      <img
        className="w-full h-64 mb-2 rounded-lg"
        src={props.item.coverImg}
        alt="katie"
      />
      <div className="mb-2 ml-2 text-xs w-44">
        <div className="flex items-center">
          <img className="h-3" src={star} alt="star" />
          <span>{props.item.stats.rating}</span>
          <span className="text-[#918E9B]">
            ({props.item.stats.reviewCount}) •{" "}
          </span>
          <span className="gray">{props.item.location}</span>
        </div>
        <h2 className="overflow-hidden text-ellipsis">{props.item.title}</h2>
        <p>
          <span className="font-bold">From ${props.item.price}</span> / person
        </p>
      </div>
    </div>
  );
}
