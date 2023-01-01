import React from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";

export const NavData = [
  {
    category: "General",
    data: [
      {
        icon: <AiTwotoneAppstore />,
        name: "Home",
        to: "/home",
      },
      {
        icon: <AiOutlineInfoCircle />,
        name: "About",
        to: "/about",
      },
      {
        icon: <AiOutlineContacts />,
        name: "Contact",
        to: "/contact",
      },
    ],
  },
  {
    category: "Others",
    data: [
      {
        icon: <AiOutlineDatabase />,
        name: "Projects",
        to: "/project",
      },
      {
        icon: <AiOutlineBarChart />,
        name: "Skills",
        to: "/skill",
      }
    ],
  },
];
