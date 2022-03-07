import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const UserSidebarData = [
    {
        title: 'Search Product',
        path: '/UserDashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text2'
    },

    {
        title: 'Profile',
        path: '/UserProfile',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text2'
    },

    {
        title: 'Product',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text2'
    },


]