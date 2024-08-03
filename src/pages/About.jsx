import React from "react";
import aboutUsImg from "../assets/intro.jpg";
import Footer from "../components/Footer/Footer";
import ParallaxImg from "../components/ParallaxImage/ParallaxImage";
import Photogrid from "../components/PhotoGrid/photogrid";
import Jessie2 from "../assets/jessie2.jpg";
import sheetMask from "../assets/sheetmask.jpg";
import jessie3 from "../assets/jessie3.jpg";
import puppyImg from "../assets/puppy.jpg";
import jessie4 from "../assets/jessie4.jpg";
import packageImg from "../assets/packages2.jpg";

const About = () => {
  return (
    <div className="bg-[#f3e8e8] ">
      <div class="grid grid-col-1  md:grid-cols-2 xl:grid-cols-3 bg-[#F9f3f3]  h-auto     justify-items-center  ">
        <div className=" col-span-1 xl:col-span-2 2xl:col-span-2 md:col-span-1">
          <img
            src={aboutUsImg}
            className=" w-[1000px]   xl:w-[900px] 2xl:w-[1300px] xl:h-[500px] 2xl:h-[700px] md:-ms-14 pe-0  lg:pe-[100px]  object-cover"
            alt=""
          />
        </div>
        <div className="  px-4 md:px-0 col-span-1  md:h-[700px] xl:left-[800px] xl:absolute  2xl:left-[1200px] 2xl:absolute   lg:absolute lg:left-[450px] lg:w-[500px] md:col-span-1   ">
          <div className=" flex   gap-4 md:gap-[20px] justify-center p-5 md:mt-[90px] flex-col ">
            <div>
              <p className="font-[Syne] text-[#D4A7A7]  tracking-wide text-[15px] font-[500] ">
                OREGON'S TOP MEDICAL AESTHETICIAN CLINIC
              </p>
            </div>

            <h1 className=" text-2xl md:text-5xl  2xl:text-[70px] 2xl:leading-[77px] 2xl:p-0 text-[#2f2f2f] hero-text ">
              Elevate Your Skincare Routine With Our Result-Driven Approach
            </h1>
            <p className="text-[13px] font-[Assistant]  md:text-[15px]  text-[#2f2f2f]">
              Write an introduction of your business here. Everyone needs a
              friend. Friends are the most valuable things in the world. When
              things happen - enjoy them.
            </p>
          </div>
        </div>
      </div>

      {/* JESSIE JOHNSON */}
      <div className="bg-[#fcfbfa]">
        <div class="grid grid-cols-1 md:grid-cols-2 md:pt-10 2xl:justify-items-center 2xl:-mb-16  container  w-auto mx-auto items-center">
          <div className="w-auto xl:p-40   xl:w-[500px] order-1 md:-mt-16 md:w-[380px]">
            <div
              className="flex flex-col gap-3  text-center lg:ms-24 lg:p-7 2xl:left-0 2xl:bottom-0 lg:left-[50px] lg:bottom-32 
               lg:w-[400px] md:text-start md:gap-0 "
            >
              <div className="">
                <h1 className="text-3xl  md:text-5xl hero-text lg:text-[50px] 2xl:text-6xl lg:md:p-0   p-4">
                  Hi Gorgeous! I'm Jessie Johnson
                </h1>
              </div>

              <p className="px-7  md:text-[13px] font-[Syne] text-[#D4A7A7] text-[12px] font-[500] leading-0 lg:p-0">
                A PORTLAND SKINCARE EXPERT WHO AIMS FOR FOR A TRULY CUSTOMIZED
                EXPERIENCE
              </p>
              <p className="p-6 leading-relaxed text-start lg:p-0 text-[13px]  font-[Assistant]  md:text-[12px] ">
                Write an introduction of your business here and how you can
                solve their problem. Everyone needs a friend. Friends are the
                most valuable things in the world. When things happen - enjoy
                them. They're little gifts. This is probably the greatest thing
                to happen in my life - to be able to share this with you. <br />
                <br />
                <span className="pt-5 ">
                  {" "}
                  Everyone needs a friend. Friends are the most valuable things
                  in the world. When things happen - enjoy them. This is
                  probably the greatest thing to happen in my life.{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="w-auto md:w-[300px] md:order-2 -mt-28 flex justify-center 2xl:w-[1000px] 2xl:me-[400px] items-center  h-[650px] ">
            <div className="absolute ">
              <img
                src={Jessie2}
                className=" h-[400px]  md:w-[310px] object-cover md:h-[380px]"
                alt=""
              />
              <img
                src={sheetMask}
                className="object-cover  absolute top-[300px] left-[90px] md:left-[180px] w-[200px] md:top-[190px] md:w-[200px] p-2 bg-white h-[200px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9f3f3]">
        <div className=" ">
          <h1 className="text-7xl md:text-9xl lg:text-[150px]  hero-text text-[#f2e8e8]">
            MY STORY
          </h1>
        </div>

        <div
          className="flex p-4 grid-cols-2 md:grid-col-1 mt-10 md:p-7  
        justify-center items-center w-auto md:w-[1000px] flex-col md:flex-row 
        mx-auto container"
        >
          <div className="lg:w-[400px] md:w-[400px]">
            <h1 className="text-4xl hero-text md:text-[35px]  w-auto ">
              It All Started When I Was On Accutane And Felt Discouraged
            </h1>
            <p className=" md:text-[14px] font-[Syne] text-[#D4A7A7] pt-4 tracking-wide text-[15px] font-[500] ">
              WRITE ABOUT WHY YOU STARTED YOUR BUSINESS AND HOW THEY CAN RELATE
              TO YOU
            </p>
          </div>
          <div className=" w-auto md:w-[400px]">
            <p
              className="text-sm leading-6 p-6 text-start lg:p-0 text-[13px] 
             font-[Assistant]  md:text-[12px] lg:text-[15px] "
            >
              Write an introduction of your business here and how you can solve
              their problem. Everyone needs a friend. Friends are the most
              valuable things in the world. When things happen - enjoy them.
              They're little gifts. This is probably the greatest thing to
              happen in my life - to be able to share this with you. Everyone
              needs a friend. Friends are the most valuable things in the world.
              When things happen - enjoy them. This is probably the greatest
              thing to happen in my life.
            </p>
          </div>
        </div>

        {/* testing  */}

        <div className=" relative w-auto md:w-[1000px] md:pb-24 mt-5 mx-auto  container ">
          <div className=" flex lg:ms-12 sm:justify-center  md:justify-start items-center">
            <img
              src={jessie3}
              className="  h-[400px]  md:h-[550px] w-auto md:w-[500px] md:ps-10 object-cover "
              alt=""
            />
            <div className=" md:absolute md:left-[350px]  hidden md:block w-auto lg:left-[450px]  top-[80px]">
              <p
                className="top-[90px]  md:px-[50px]  md:leading-[25px] w-auto md:w-[400px]  md:h-[350px]
                 lg:h-[400px] lg:w-[450px] border text-black  bg-white p-6 leading-relaxed 
                 text-start lg:p-5 text-[13px] lg:text-[16px] font-[Assistant]  md:text-[12px]  "
                alt=""
              >
                <span className="">
                  <h1 className="md:text-[14px] pb-5 font-[Syne] text-[#D4A7A7] pt-4 tracking-wide text-[15px] lg:text-[20px] font-[500]">
                    IF I CAN GET THROUGH IT, YOU CAN TOO WITH MY RESULT-DRIVEN
                    APPROACH
                  </h1>
                </span>
                Write an introduction of your business here and how you can
                solve their problem. Everyone needs a friend. Friends are the
                most valuable things in the world. When things happen - enjoy
                them. They're little gifts. This is probably the greatest thing
                to happen in my life - to be able to share this with you.
                Everyone needs a friend. Friends are the most valuable things in
                the world. When things happen - enjoy them. This is probably the
                greatest thing to happen in my life.
              </p>
            </div>
          </div>
        </div>

        {/* for small screen this will show */}

        <div className=" text-center p-4  sm:block md:hidden">
          <p className=" " alt="">
            <span>
              <h1>
                IF I CAN GET THROUGH IT, YOU CAN TOO WITH MY RESULT-DRIVEN
                APPROACH
              </h1>
            </span>
            Write an introduction of your business here and how you can solve
            their problem. Everyone needs a friend. Friends are the most
            valuable things in the world. When things happen - enjoy them.
            They're little gifts. This is probably the greatest thing to happen
            in my life - to be able to share this with you. Everyone needs a
            friend. Friends are the most valuable things in the world. When
            things happen - enjoy them. This is probably the greatest thing to
            happen in my life.
          </p>
        </div>

        {/* image  */}
        <div className="bg-[#fcfbfa] ">
          <div class="container mx-auto bg-[#fcfbfa]  lg:relative md:relative px-4 py-10">
            <h1 class="text-sm text-center mb-8 md:text-[13px] pb-5 font-[Syne] text-[#2f2f2f] pt-4 tracking-wide  text-[15px] font-[500]">
              ASIDE FROM SKINCARE, HERE'S SOME OF MY FAVORITE THINGS IN LIFE!
            </h1>
            <h1
              class="text-5xl  text-center lg:text-7xl lg:absolute   2xl:absolute xl:absolute  md:absolute 
            2xl:top-[96px] 2xl:left-[400px] xl:top-[96px] xl:left-[240px]  md:text-[60px]  md:top-[150px] md:left-[80px] 
            lg:top-[99px] lg:left-[110px]  mb-8  hero-text text-[#eadbdb]"
            >
              MY RIDE OR DIES IN LIFE
            </h1>
            <div class="flex flex-col justify-center items-center  md:mt-[100px] lg:mt-[100px] sm:flex-row gap-[22px]">
              <div class="bg-white  overflow-hidden">
                <div class="relative lg:h-[340px] lg:w-[300px]  md:size-[280px]  h-[400px]">
                  <img
                    src={puppyImg}
                    alt=""
                    className="w-full h-full  md:right-6 md:relative xl:right-0 xl:relative object-cover "
                  />
                  <div className="absolute inset-0 flex items-center justify-center pt-[300px] bg-black bg-opacity-15">
                    <h2 className="text-white  lg:pb-10 md:pb-[120px] md:pe-[50px] font-[syne] font-semibold ">
                      MY PUPPY MAXIMUS
                    </h2>
                  </div>
                </div>
              </div>

              <div class="bg-white  shadow-md overflow-hidden">
                <div class="relative  md:size-[280px] lg:h-[340px] lg:w-[300px]  h-[400px] ">
                  <img
                    src={jessie4}
                    alt=""
                    className="  w-full  h-full   md:right-6 md:relative xl:right-0 xl:relative object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-15 ">
                    <h2 className="text-white   pt-[300px]  md:pb-[100px] md:pe-[50px]  lg:pb-10 font-[syne] font-semibold ">
                      THE COLOR PINK
                    </h2>
                  </div>
                </div>
              </div>

              <div class="bg-white  shadow-md overflow-hidden">
                <div class="relative md:size-[280px]  lg:h-[340px] lg:w-[300px]  h-[400px]">
                  <img
                    src={packageImg}
                    alt=""
                    className="w-full h-full  md:right-6 md:relative xl:right-0  xl:relative object-cover "
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-15">
                    <h2 className="text-white pt-[300px] md:pb-[100px] md:pe-[50px] lg:pb-10 md:text-[15px] font-[syne] font-semibold ">
                      LOVING TAN SELF-TANNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center ">
              <button className="h-[70px] w-[350px] mt-10 rounded-full bg-[#f3e8e8] text-sm text-center md:text-[14px] pb-5 font-[Syne] text-[#2f2f2f] pt-4 tracking-wide text-[15px] font-[500]">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* comment  */}
      <div className="w-full bg-[#f3e8e8]  pt-20">
        <div className="flex flex-col text-center mx-auto text-[#2f2f2f] bg-[#f3e8e8] lg:mb-10 lg:w-[700px] md:w-[600px]">
          <h1 className="text-2xl p-4 md:text-4xl lg:text-6xl  hero-text">
            "Jessie Is Life-Changing, You Won't Regret Working With Her!"
          </h1>
          <p
            className="p-6 text-sm leading-6  text-center lg:p-0 text-[13px] 
             font-[Assistant]  md:text-[17px] "
          >
            "Write your testimonials right here. Everyone needs a friend.
            Friends are the most valuable things in the world. When things
            happen - enjoy them. They're little gifts. This is probably the
            greatest thing to happen in my life - to be able to share this with
            you. Everyone needs a friend. Friends are the most valuable things
            in the world. When things happen - enjoy them."
          </p>
          <p className="font-[syne]  font-bold md:pb-10 text-[#2f2f2f]">
            SARAH / FACIAL CLIENT
          </p>
        </div>
      </div>
      <ParallaxImg />
      <Footer />
      <Photogrid />
    </div>
  );
};

export default About;
