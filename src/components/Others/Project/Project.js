import React from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import "./project.css";
import { CgCheckR } from "react-icons/cg";
import Pro_1 from "../../Assets/project-3.1.jpg";
import Pro_2 from "../../Assets/project-3.2.jpg";
import Pro_3 from "../../Assets/project-3.3.jpg";
import Pro_4 from "../../Assets/project-3.4.jpg";
import Pro_5 from "../../Assets/project-2.1.png";
import Pro_6 from "../../Assets/project-2.2.png";
import Pro_7 from "../../Assets/ERD.png";
import Pro_8 from "../../Assets/project-1.png";
import Pro_9 from "../../Assets/project-1.2.png";
import Pro_10 from "../../Assets/project-1.3.png";
import Pro_11 from "../../Assets/Project-4.1.jpeg";
import Pro_12 from "../../Assets/Project-4.2.jpeg";
import Pro_13 from "../../Assets/Project-4.3.jpeg";
import Pro_14 from "../../Assets/Project-4.4.jpeg";
import Pro_15 from "../../Assets/Project-5.1.jpeg";
import Pro_16 from "../../Assets/Project-5.2.jpeg";
import Pro_17 from "../../Assets/Project-5.3.jpeg";
import Pro_18 from "../../Assets/Project-5.4.jpeg";
import Pro_19 from "../../Assets/Project-6.1.jpeg";
import Pro_20 from "../../Assets/Project-6.2.jpeg";
import Pro_21 from "../../Assets/Project-6.3.jpeg";
import Pro_22 from "../../Assets/Project-6.4.jpeg";
import pro_23 from "../../Assets/Project-7.1.png";
import pro_24 from "../../Assets/Project-7.2.png";
import pro_25 from "../../Assets/Project-7.3.png";
import pro_26 from "../../Assets/Project-7.4.png";


export default function Projects() {
  return (
    <div>
      <section id="top-pr">
        <h2 className="font-black">Projects</h2>
      </section>
      <a
        href="#top-pr"
        className="absolute top-1/2 right-2 text-4xl rounded-md text-yellow-400 bg-black anim z-20"
      >
        <BsArrowUpSquareFill />
      </a>

      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 mt-5 mb-10">
        <div className="flex gap-4">
          <div>
            <img src={pro_23} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={pro_24} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="h-4"></div>
        <div className="flex gap-4">
          <div>
            <img src={pro_25} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={pro_26} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">
            Educom
          </h3>
          <p className="text-justify">
          This web application is designed to display and visualize company sales data through interactive dashboards. 
          The primary focus is on transforming raw data into meaningful visual representations that support decision-making 
          and enhance service quality. The process involves applying data visualization techniques, exploratory data analysis (EDA), 
          and publishing interactive dashboards using Tableau Desktop/Public. These dashboards provide a dynamic and insightful way to 
          explore data, helping businesses to better understand their sales performance and make informed decisions.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/3 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                HTML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                CSS
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                JavaScript
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Tableau
              </li>
            </div>
            <div className="w-1/3 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Framework</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                React JS
              </li>
            </div>
            <div className="w-1/3 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Interactive Chart
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Visualization Data
              </li>
            </div>
          </div>
        </div>
        <a href="https://github.com/MustankLee/Educom/tree/master" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 mt-5 mb-10">
        <div className="flex gap-4">
          <div>
            <img src={Pro_19} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_20} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="h-4"></div>
        <div className="flex gap-4">
          <div>
            <img src={Pro_21} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_22} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">
            Event Organizer Web App
          </h3>
          <p className="text-justify">
          The Event Organizer Website Application is a specially designed web application aimed at 
          addressing the challenges faced by event service providers. The application is divided into two 
          sections. The first section provides information about the services offered and enables monitoring 
          of the progress status of event projects managed by the event organizer. The second section is 
          intended for internal use by event organizers, focusing on project management, service management, 
          employee scheduling, automated event project report generation, and tracking the progress steps 
          during event project execution.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                HTML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                CSS
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                JavaScript
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                PHP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Framework</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Tailwind CSS
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Laravel
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Local Web Server</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                XAMPP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Load Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Delete Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Insert Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Update Data
              </li>
            </div>
          </div>
        </div>
        <a href="https://github.com/MustankLee/event-organizer-web-app" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 mt-5 mb-10">
        <div className="flex gap-4">
          <div>
            <img src={Pro_11} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_12} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="h-4"></div>
        <div className="flex gap-4">
          <div>
            <img src={Pro_13} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_14} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">
            Travel IND
          </h3>
          <p className="text-justify">
          Travel IND is a website that provides users with comprehensive information about popular tourist 
          destinations across Indonesia. Users can explore a curated list of top travel spots, complete 
          with detailed information on locations, pricing, and operational hours. The site also features 
          reviews from other travelers, allowing users to read about others' experiences. Additionally, 
          users can contribute by leaving their own reviews, making it a valuable resource for planning 
          trips and discovering the best places to visit in Indonesia.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                HTML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                CSS
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                JavaScript
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                PHP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Framework</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Bootstrap 5
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Laravel
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Local Web Server</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                XAMPP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Load Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Delete Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Insert Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Update Data
              </li>
            </div>
          </div>
        </div>
        <a href="https://github.com/MustankLee/TravelIND" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      
      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 mt-5 mb-10">
        <div className="flex gap-4">
          <div>
            <img src={Pro_16} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_15} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="h-4"></div>
        <div className="flex gap-4">
          <div>
            <img src={Pro_17} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_18} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">
            Recycon
          </h3>
          <p className="text-justify">
          Recycon is a website dedicated to selling second-hand and recycled items, such as accessories, 
          household tools, and much more. Users can browse and purchase a variety of products through the platform. 
          Admins have the ability to manage and organize the products available for sale. Even users without an account 
          can explore the products offered, making it an accessible platform for everyone interested in sustainable shopping.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                HTML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                CSS
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                JavaScript
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                PHP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Framework</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Bootstrap 5
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Laravel
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Local Web Server</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                XAMPP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Load Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Delete Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Insert Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Update Data
              </li>
            </div>
          </div>
        </div>
        <a href="https://github.com/MustankLee/Recycon" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 mt-5 mb-10">
        <div className="flex gap-4">
          <div>
            <img src={Pro_1} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_2} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="h-4"></div>
        <div className="flex gap-4">
          <div>
            <img src={Pro_3} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_4} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">
            Recycle Hops 2
          </h3>
          <p className="text-justify">
            Recycle Hops 2 is an intuitive application designed for sellers to 
            efficiently manage and publish their products. This platform empowers users 
            to easily add new products and remove items as needed. W
            ith a user-friendly interface, 
            Recycle Hops 2 simplifies product management, allowing sellers to keep their 
            inventory current and accessible. Whether adding new entries, 
            the application ensures a seamless experience for maintaining a dynamic 
            and organized product catalog.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                HTML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                CSS
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                JavaScript
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                PHP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Framework</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Bootstrap 5
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Laravel
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Local Web Server</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                XAMPP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Load Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Delete Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Insert Data
              </li>
            </div>
          </div>
        </div>
        <a href="https://github.com/MustankLee/GSLC_2440057363_RICO_SUSANTO_Feature_Blade_Website_Programming" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      {/* 2 */}
      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 my-10">
        <div className="flex gap-4">
          <div>
            <img src={Pro_5} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_6} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">
            Recycle Hops 1
          </h3>
          <p className="text-justify">
            Recycle Hops 1 is a website with e-commerce theme that selling about recycle
            product, the website allows user load data.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                HTML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                CSS
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                JavaScript
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                PHP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Framework</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Bootstrap 5
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Laravel
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Local Web Server</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                XAMPP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Load Data
              </li>
            </div>
          </div>
        </div>
        <a href="https://github.com/MustankLee/WebsiteView_2" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      {/* 3 */}
      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 my-10">
        <div className="flex gap-4">
          <img src={Pro_7} alt="" className="w-screen rounded-md" />
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">Design ERD</h3>
          <p className="text-justify">
            Design of the ERD based on the problem of cloth company which must
            be considered about relationships between entities and how does it
            integrates using SQL.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/2 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                SQL
              </li>
            </div>
            <div className="w-1/2 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                DDL
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                DML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Subquery
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Alias Subquery
              </li>
            </div>
          </div>
        </div>
        <a href="https://gitfront.io/r/MustankLee/XBxMHcWtHiv7/SQL-Simulation/" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      {/* 4 */}
      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 my-10">
        <div className="flex gap-4 relative justify-between">
          <img src={Pro_8} alt="" className="w-1/4 rounded-md" />
          <img src={Pro_9} alt="" className="w-1/4 rounded-md" />
          <img src={Pro_10} alt="" className="w-1/4 rounded-md" />
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">Fork & Spoon</h3>
          <p className="text-justify">
            The user interface and user experience of the restaurant ordering application have been meticulously crafted using Figma, a web-based design tool. This design caters to two distinct user groups: customers and restaurant owners. For an enhanced experience, you are invited to explore the interface and functionality by clicking the button below.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/2 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Figma
              </li>
            </div>
            <div className="w-1/2 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Specification</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                100+ frames & wiring animation
              </li>
            </div>
          </div>
        </div>
        <a href="https://www.figma.com/proto/8eH0ed8VuhHAsxwW1qAHtR/Savebackup?node-id=14%3A1480&starting-point-node-id=14%3A1480" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
            Try it out
          </p>
        </a>
      </div>
    </div>
  );
}
