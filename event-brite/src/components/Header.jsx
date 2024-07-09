import React from "react";
import { SearchBox } from "./SearchBox";
// import eventBriteLogo from '../assests/eventBriteLogo.svg'

export const Header = () => {
  return (
    <>
      <div className="flex gap-2">
       {/* <img src={eventBriteLogo} className="w-[15%]" alt="Event Brite" /> */}
       <SearchBox className="w-[20%]"/>
       <div className="w-[65%] flex justify-between px-2">
        <div>Find Events</div>
        <div>Create Events</div>
        <div>Help center</div>
        <div>Login</div>
        <div>Sign Up</div>
       </div>
      </div>
    </>
  );
};
