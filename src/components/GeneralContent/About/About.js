import React from "react";
import { AboutData } from "./AboutData.js";
import Gambar from "../../Assets/SDMeth.jpg";
import "./about.css";

export default function About() {
  return (
    <>
      <h2 className="font-black">About Me</h2>
      <div className="my-5 flex max-md:block">
        {/* Expereince */}
        <div className="w-1/2 pr-3 max-md:w-full max-md:pr-0">
          <div className="outline outline-blue-500 rounded-md py-1 px-2">
            <h3 className="font-bold text-blue-500">Experience</h3>
            {/* Detail Exp */}
            {AboutData.filter((item) => item.category.includes("exp")).map(
              (data, index) => {
                return (
                  <div className="" key={index}>
                    <div className="bg-blue-500 text-white rounded-md p-3 flex my-1 max-md:block">
                      <img
                        src={data.data.logo}
                        alt=""
                        className="rounded-md w-28 h-28"
                      />
                      <div className="ml-2.5 max-md:ml-0 max-md:mt-3">
                        <h3 className="font-semibold">{data.data.name}</h3>
                        <p>{data.data.desc}</p>
                        <div className="mt-0.5 bg-blue-200 text-black p-1 rounded-md">
                          <div className="font-semibold">Activity:</div>
                          <li>{data.data.act}</li>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Education */}
        <div className="outline outline-blue-500 rounded-md w-1/2 py-1 px-2.5 max-md:w-full max-md:my-5">
          <h3 className="font-bold text-blue-500 mb-1">Education</h3>
          <div className="rounded-md resp-crd">
            {AboutData.filter((cat) => cat.category.includes("edu")).map(
              (edu, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-3 bg-blue-500 rounded-md w-1/3 flex"
                  >
                    <img
                      src={edu.data.logo}
                      alt=""
                      className="rounded-md w-28 h-28"
                    />
                    <div className="text-white ml-2.5">
                      <p className="font-semibold">{edu.data.name}</p>
                      <p>{edu.data.year}</p>
                    </div>
                  </div>
                );
              }
            )}
          <a
            href="https://spektate999w.github.io/Portfolio/HTML/home.html"
            className="w-full cursor-pointer mt-14 mb-4" target="_blank"
          >
            <p className="text-center p-2 rounded-md btn-shdow font-semibold bg-white">
              Check out my other portfolio
            </p>
          </a>
          </div>
        </div>
      </div>
    </>
  );
}
