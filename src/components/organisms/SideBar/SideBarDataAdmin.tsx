import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Accueil',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Reservations',
        path: '/dashboardAdmin',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Clients',
        path: '/users',
        icon: <FaIcons.FaUser />
       
    },
    {
        title: 'Services',
        path: '/servicesAdmin',
        icon: <FaIcons.FaServicestack/>
       
    },
    {
        title: 'Forfaits',
        path: '/packagesAdmin',
        icon: <FaIcons.FaList/>
       
    },


   
    {
        title: 'Se Déconnecter',
        path: '/disconnect',
        icon: <FaIcons.FaSignOutAlt />
    }
]
