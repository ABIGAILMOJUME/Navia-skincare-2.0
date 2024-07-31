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
import packageImg from "../assets/packages2.jpg"

const About = () => {
  return (
    <div>
      <div class="grid  grid-cols-1 md:grid-cols-2 h-auto  justify-items-centercenter bg-[#fdebd865] items-center">
        <div>
          <img
            src={aboutUsImg}
            className="w-full  h-[700px] object-cover"
            alt=""
          />
        </div>
        <div className=" px-4 flex justify-center items-center">
          <div className="">
            <p className="font-[Syne]">
              OREGON'S TOP MEDICAL AESTHETICIAN CLINIC
            </p>
            <h1 className=" text-7xl py-10 font-thin font-[PlayfairDisplay] ">
              Elevate Your Skincare Routine With Our Result-Driven Approach
            </h1>
            <p className="text-[15px]">
              Write an introduction of your business here. Everyone needs a
              friend. Friends are the most valuable things in the world. When
              things happen - enjoy them.
            </p>
          </div>
        </div>
      </div>

      {/* JESSIE JOHNSON */}
      <div className="">
        <div class="grid grid-cols-1 lg:grid-cols-2   w-auto md:w-[800px] mx-auto items-center">
          <div className="  ">
            <div className="w-auto md:w-[300px]">
              <div className="flex flex-col gap-3">
                <div className=" ">
                  <h1 className="text-5xl">Hi Gorgeous! I'm Jessie Johnson</h1>
                </div>

                <p>
                  A PORTLAND SKINCARE EXPERT WHO AIMS FOR FOR A TRULY CUSTOMIZED
                  EXPERIENCE
                </p>
                <p>
                  Write an introduction of your business here and how you can
                  solve their problem. Everyone needs a friend. Friends are the
                  most valuable things in the world. When things happen - enjoy
                  them. They're little gifts. This is probably the greatest
                  thing to happen in my life - to be able to share this with
                  you. Everyone needs a friend. Friends are the most valuable
                  things in the world. When things happen - enjoy them. This is
                  probably the greatest thing to happen in my life.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-auto md:w-[300px] h-[700px] ">
            <div className="absolute ">
              <img src={Jessie2} className=" h-[600px] " alt="" />
              <img
                src={sheetMask}
                className="object-cover  absolute top-[400px] left-[260px]  w-[200px] p-1 bg-white h-[200px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-slate-600">
          <h1 className="text-9xl">MY STORY</h1>
        </div>

        <div className="grid grid-cols-2 mt-10  container">
          <div>
            <h1 className="text-4xl font-[Assistant] w-auto md:w-[400px]">
              It All Started When I Was On Accutane And Felt Discouraged
            </h1>
            <p className="font-bold text-[10px]">
              WRITE ABOUT WHY YOU STARTED YOUR BUSINESS AND HOW THEY CAN RELATE
              TO YOU
            </p>
          </div>
          <div className=" w-auto md:w-[400px]">
            <p className="text-sm leading-6">
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

        <div className=" relative w-auto md:w-[1000px] mt-5 mx-auto  container ">
          <div className=" justify-center items-center">
            <img
              src={jessie3}
              className="  h-[600px] w-auto md:w-[600px] top-36 object-cover "
              alt=""
            />
            <div className=" lg:absolute left-[500px]  w-[500px] top-[80px]">
              <p
                className="top-[90px] left-0 md:left-[450px] w-auto md:w-[500px]  h-[450px] border text-black p-[80px] bg-white "
                alt=""
              >
                <span>
                  <h1>
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
        {/* image  */}
        <div>
          <div class="container mx-auto px-4 py-10">
            <h1 class="text-sm text-center mb-8">
              ASIDE FROM SKINCARE, HERE'S SOME OF MY FAVORITE THINGS IN LIFE!
            </h1>
            <h1 class="text-5xl  text-center mb-8">MY RIDE OR DIES IN LIFE</h1>
            <div class="flex flex-col justify-center items-center sm:flex-row gap-[22px]">
              <div class="bg-white  overflow-hidden">
                <div class="relative   h-[400px]">
                  <img
                    src={puppyImg}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute inset-0 flex items-center justify-center pt-[300px] bg-black bg-opacity-15">
                    <h2 className="text-white  ">MY PUPPY MAXIMUS</h2>
                  </div>
                </div>
              </div>

              <div class="bg-white  shadow-md overflow-hidden">
                <div class="relative   h-[400px] ">
                  <img
                    src={jessie4}
                    alt=""
                    className="  w-full  h-full  object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-15 ">
                    <h2 className="text-white   pt-[300px] ">THE COLOR PINK</h2>
                  </div>
                </div>
              </div>

              <div class="bg-white  shadow-md overflow-hidden">
                <div class="relative    h-[400px]">
                  <img
                    src={packageImg}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-15">
                    <h2 className="text-white pt-[300px] ">
                      LOVING TAN SELF-TANNER
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* comment  */}
        <div className="flex flex-col text-center mx-auto w-auto md:w-[600px]">
          <h1 className="text-5xl">"Jessie Is Life-Changing, You Won't Regret Working With Her!"</h1>
          <p>
            "Write your testimonials right here. Everyone needs a friend.
            Friends are the most valuable things in the world. When things
            happen - enjoy them. They're little gifts. This is probably the
            greatest thing to happen in my life - to be able to share this with
            you. Everyone needs a friend. Friends are the most valuable things
            in the world. When things happen - enjoy them."
          </p>
          <p>SARAH / FACIAL CLIENT</p>
        </div>
      </div>
      <ParallaxImg />
      <Footer />
      <Photogrid />
    </div>
  );
};

export default About;
