import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Accueil',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Mes Réservations',
        path: '/dashboard',
        icon: <FaIcons.FaTasks />
       
    },
    {
        title: 'Mon profile',
        path: '/profil',
        icon: <FaIcons.FaUser />
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaRocketchat />
    },
    {
        title: 'Se Déconnecter',
        path: '/disconnect',
        icon: <FaIcons.FaSignOutAlt />
    }
]
