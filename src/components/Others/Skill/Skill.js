import React from "react";
import { CgCheckR } from "react-icons/cg";
import "./skill.css";

export default function Skills() {
  return (
    <div>
      <h2 className="font-black">Skills</h2>

      <div className="my-4">
        {/* Hard Skills */}
        <div className="my-5">
          <h3 className="w-max font-bold bg-gradient-to-r from-blue-500 to-pink-500 p-2 rounded-md text-white">
            Hard Skills
          </h3>
          <div className="flex gap-5 my-3 max-md:block">
            <div className="bg-white drop-shadow-md p-2 rounded-md w-1/3 max-md:w-full max-md:my-2">
              <h3 className="font-semibold">Programming and Markup Language</h3>
              <div className="resp-crd-skl">
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  C/C++
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Java
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  JavaScript
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  PHP
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Python
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  SQL
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  HTML5
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  CSS3
                </p>
              </div>
            </div>
            <div className="bg-white drop-shadow-md p-2 rounded-md w-1/3 max-md:w-full max-md:my-2">
              <h3 className="font-semibold">Implementation</h3>
              <div className="resp-crd-skl">
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Algorithm
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Data Structures
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Object Oriented Programming
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Big Data Processing
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Data Mining
                </p>
              </div>
            </div>
            <div className="bg-white drop-shadow-md p-2 rounded-md w-1/3 max-md:w-full max-md:my-2">
              <h3 className="font-semibold">Framework</h3>
              <div className="resp-crd-skl">
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Bootstrap
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Tailwind CSS
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  ReactJS
                </p>
                <p className="flex items-center bg-white drop-shadow-lg p-1 rounded-md w-max">
                  <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                  Laravel 8
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        {/* Soft Skills */}
        <div className="my-5">
          <h3 className="w-max font-bold bg-gradient-to-r from-blue-500 to-pink-500 p-2 rounded-md text-white">
            Soft Skills
          </h3>
          <div className="bg-white drop-shadow-md p-2 rounded-md my-3">
            <div className="">
              <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Teamwork
              </p>
              <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Problem Solving
              </p>
              <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Critical Thinking
              </p>
              <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Time Management
              </p>
              <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Public Speaking
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="my-5">
        <h3 className="w-max font-bold bg-gradient-to-r from-blue-500 to-pink-500 p-2 rounded-md text-white">
          Certification
        </h3>
        <div className="bg-white drop-shadow-md p-2 rounded-md my-3">
          <div className="">
            <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
              <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
              Coursera (Google), Crash Course on Python
            </p>
            <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
              <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
              GreatNusa, Unified Modelling Language (UML) using Visual Paradigm
            </p>
            <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
              <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
              HackerRank, SQL Basic
            </p>
            <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
              <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
              HackerRank, SQL Intermediate
            </p>
            <p className="flex items-center my-2 bg-white drop-shadow-lg p-1 rounded-md w-max">
              <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
              HackerRank, SQL Advanced
            </p>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1LVgBDtod6AeYXWtGAgHI_sEBqzXE0e6m"
            className="w-full flex justify-end cursor-pointer max-md:block"
          >
            <p className="text-center p-2 rounded-md btn-shdow font-semibold bg-white">
              Check
            </p>
          </a>
        </div>
      </div>

      <br />
      <div className="my-5">
        <h3 className="w-max font-bold bg-gradient-to-r from-blue-500 to-pink-500 p-2 rounded-md text-white">
          Languages
        </h3>
        <div className="flex gap-4 my-3 max-md:block">
          <div className="bg-white drop-shadow-lg w-1/5 p-2 rounded-md max-md:w-full max-md:my-2">
            <h3 className="font-bold">Indonesian</h3>
            <p className="bold">Native</p>
          </div>
          <div className="bg-white drop-shadow-lg w-1/5 p-2 rounded-md max-md:w-full max-md:my-2">
            <h3 className="font-bold">English</h3>
            <p className="bold">Intermediate</p>
          </div>
          <div className="bg-white drop-shadow-lg w-1/5 p-2 rounded-md max-md:w-full max-md:my-2">
            <h3 className="font-bold">Mandarin</h3>
            <p className="bold">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
