import React, { Component } from "react";
import "./home.css";
import { HomeData } from "./HomeData.js";
import { DiDatabase } from "react-icons/di";

class Home extends Component {
  constructor() {
    var date = new Date();
    var time =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    super();
    this.state = {
      currTime: time,
    };
  }

  render() {
    return (
      <div>
        <div className="flex items-center justify-between relative">
          <h2 className="font-black">
            Hello,{" "}
            <span className="bg-gradient-to-r from-blue-700 to-rose-400 bg-clip-text text-transparent">
              Everyone!
            </span>
          </h2>
          <div className="flex items-center w-2/12 p-1 h-8 bg-gradient-to-l from-blue-500 to-rose-400 rounded-md text-white font-bold">
            <marquee
              direction="up"
              behavior="scroll"
              scrollamount="1"
              className="h-5 w-1/2 text-center max-md:w-full"
            >
              <p className="py-2">Halo</p>
              <p className="py-2">你好</p>
              <p className="py-2">Bonjour</p>
              <p className="py-2">Hello</p>
              <p className="py-2">Hola</p>
              <p className="py-2">おはよう</p>
            </marquee>
            <p className="text-xs w-1/2 text-center max-md:hidden">{this.state.currTime}</p>
          </div>
        </div>
        <div className="mt-2 text-justify">
          <p>
            Welcome to my personal website, this website contains general
            information about me, yeeee haaa! Go explore, hope you guys love it.
            This website took about 3 days to make it which I started from
            design its UI/UX, informations to show, and framework to be used. I
            also want to inform that this website is already responsive which
            means the component of the website will fit based on your screen
            resolution, so you will get the different expereience when you are
            using the different device with different screen resolution.
            Additional information, this website is made with framework ReactJS
            and tailwind CSS for its styling.
          </p>
          <br />
          <p>
            Oooups, I almost forgot to introduce myself, Hello everyone! My name
            is Rico Susanto, you guys can call me Rico, Ric, or Co. Right now,
            I'm a Computer Science student at Bina Nusantara University, I'm
            very interested in position Full Stack Developer.
          </p>
        </div>

        <h3 className="mt-8 outline outline-blue-500  text-blue-500 rounded-md p-1 font-black">Expertise</h3>

        {/* cardy */}
        <div className="mt-3 resp-crd-hm relative overflow-x-auto h-96 mb-10">
          {HomeData.map((item, index) => {
            return (
              <div
                key={index}
                className="drop-shadow-lg rounded-md p-2 w-80 h-40 flex max-md:h-28 bg-blue-200"
              >
                <h1 className="text-6xl flex items-center">{item.icon}</h1>
                <div className="flex flex-col justify-center ml-2">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
