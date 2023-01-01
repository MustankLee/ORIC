import React from "react";
import { CiDatabase } from "react-icons/ci";
import { HiOutlineRectangleStack } from "react-icons/hi2"
import { MdDevices } from "react-icons/md"
import { AiOutlinePartition } from "react-icons/ai"
import { VscSymbolStructure } from "react-icons/vsc"
import { AiOutlineApi } from "react-icons/ai"



export const HomeData = [
    {
        icon: <CiDatabase />,
        name: "Database",
        desc: "The place where we store our data that related with the website."
    },
    {
        icon: <HiOutlineRectangleStack />,
        name: "OOP",
        desc: "OOP is a programming that the concept is based on objects."
    },
    {
        icon: <MdDevices />,
        name: "UI/UX",
        desc: "User Interface/User Experience is what you see & feel while using software."
    },
    {
        icon: <AiOutlinePartition />,
        name: "Algorithm",
        desc: "Algorithm becomes one of the most important things in website development"
    },
    {
        icon: <VscSymbolStructure />,
        name: "Data Structure",
        desc: "The alogrithm that specific in structuring the data such as Create, Read, Update, Delete operations"
    },
    {
        icon: <AiOutlineApi />,
        name: "API",
        desc: "API is a concept that enable two different software can communicate with each other."
    },

]