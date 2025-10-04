import { useEffect, useState } from "react";

import FullScreenLayout from "../FullScreenLayout";
import ServicePageOne from "./ServicePageOne";
import ServicePageTwo from "./ServicePageTwo";
import ServicePageThree from "./ServicePageThree";
import ServicePageFour from "./ServicePageFour";
import ServicePageFive from "./ServicePageFive";
import HomePageEight from "../Home/HomePageEight";
import Footer from "../Footer";

function ServicePage() {



  return (
     <FullScreenLayout>
    <div className="overflow-hidden">
   
  
       <div className="h-screen w-full overflow-hidden">
        <ServicePageOne/>
      </div>
     <div className="h-screen w-full overflow-hidden">
        <ServicePageTwo/>
      </div>
       <div className="h-screen w-full overflow-hidden">
        <ServicePageThree/>
      </div>
        <div className="h-screen w-full overflow-hidden">
        <ServicePageFour/>
      </div>
        <div className="h-screen w-full overflow-hidden">
        <ServicePageFive/>
      </div>
        <div className="m-h-screen w-full overflow-hidden">
        <HomePageEight/>
          <Footer/>
      </div>
  
    </div>
    </FullScreenLayout>
  );
}

export default ServicePage;
