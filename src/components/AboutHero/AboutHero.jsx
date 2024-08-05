import React from 'react';
import AboutHeroImg from "../../assets/intro.jpg";

const AboutHero = () => {
    return (
      <>
        <div className="bg-[#f9f3f3] relative">
          <div className="flex  flex-col md:flex-row  justify-around ">
            <div className="w-full ">
              <img
                src={AboutHeroImg}
                alt=""
                className="w-full h-[400px] lg:h-[600px] md:h-[600px]  static  2xl:h-[700px] 2xl:pe-[100px] bottom-12 object-cover"
              />
            </div>
            <div className="">
              <div>
                <div className="  px-4 md:px-0    ">
                  <div className=" flex 2xl:w-[700px]  md:w-[500px] md:p-10 2xl:pe-[100px] gap-4 md:gap-[20px] justify-center p-5 md:mt-[90px] flex-col ">
                    <div>
                      <p className="font-[Syne] text-[#D4A7A7]   tracking-[2.3px] text-[15px] font-[500] ">
                        OREGON'S TOP MEDICAL AESTHETICIAN CLINIC
                      </p>
                    </div>

                    <h1 className=" text-2xl md:text-5xl  2xl:text-[70px] pt-5 2xl:leading-[77px] 2xl:p-0 text-[#2f2f2f] hero-text ">
                      Elevate Your Skincare Routine With Our Result-Driven
                      Approach
                    </h1>
                    <p className="text-[13px] font-[Assistant] font-thin  md:text-[14px] leading-[27px] 2xl:text-[16px] 2xl:w-[500px] translate-[0.5px] text-[#2f2f2f]">
                      Write an introduction of your business here. Everyone
                      needs a friend. Friends are the most valuable things in
                      the world. When things happen - enjoy them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default AboutHero;
