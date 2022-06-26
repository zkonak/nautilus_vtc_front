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
        title: 'Se Déconnecter',
        path: '/disconnect',
        icon: <FaIcons.FaSignOutAlt />
    }
]
