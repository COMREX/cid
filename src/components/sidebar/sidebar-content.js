import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from 'react-icons/fc';

export const SidebarContent = [
  {
    title: "Linux",
    path: "/",
    icon: <FaIcons.FaLinux />,
    cName: "nav-text",
  },
  {
    title: "Apple",
    path: "/apple",
    icon: <AiIcons.AiFillApple />,
    cName: "nav-text",
  },
  {
    title: "Docker",
    path: "/docker",
    icon: <FaIcons.FaDocker />,
    cName: "nav-text",
  },
  {
    title: "Windows",
    path: "/windows",
    icon: <FaIcons.FaWindows />,
    cName: "nav-text",
  },
  {
    title: "CmD",
    path: "/cmd",
    icon: <FcIcons.FcCommandLine />,
    cName: "nav-text",
  },
];
