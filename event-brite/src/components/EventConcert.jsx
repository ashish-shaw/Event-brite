import React from "react";
import { ReactComponent as Music } from "../assests/svg/music.svg";
import { ReactComponent as NightLife } from "../assests/svg/nightLife.svg";
import { ReactComponent as Arts } from "../assests/svg/arts.svg";
import { ReactComponent as Holiday } from "../assests/svg/holiday.svg";
import { ReactComponent as Dating } from "../assests/svg/dating.svg";
import { ReactComponent as Hobbies } from "../assests/svg/hobbies.svg";
import { ReactComponent as Business } from "../assests/svg/business.svg";
import { ReactComponent as Food } from "../assests/svg/food.svg";

export const EventConcert = () => {
  const Events = [
    {
      id: 1,
      component: Music,
      name: "Music",
    },
    {
      id: 2,
      component: NightLife,
      name: "Nightlife",
    },
    {
      id: 1,
      component: Arts,
      name: "Performing & Visual Arts",
    },
    {
      id: 1,
      component: Holiday,
      name: "Holidays",
    },
    {
      id: 1,
      component: Dating,
      name: "Dating",
    },
    {
      id: 1,
      component: Hobbies,
      name: "Hobbies",
    },
    {
      id: 1,
      component: Business,
      name: "Business",
    },
    {
      id: 1,
      component: Food,
      name: "Food & Drink",
    },
  ];
  return (
    <>
    <div className="flex space-x-4 justify-around mx-12">
      {Events.map((item) => {
        const SvgComponent = item.component;
        return (
          <div key={item.id}>
            <div className="border border-[#dee5ff] w-28 h-28 rounded-full flex items-center justify-center hover:bg-blue-200">
              <SvgComponent />
            </div>
            <div className="w-20 mx-auto font-semibold text-xs text-[#261b36] pt-4 hover:text-blue-700">{item.name}</div>
          </div>
        );
      })}
    </div>
    </>
  );
};
