import logo from '../assets/thaisaLogo.png'
import React, { useEffect, useState } from 'react';


export default function Header(){
    return(
        <header className="fixed h-28 flex flex-row items-center justify-center">
            <a href="" className="w-1/6 block"><img src={logo} className="width-fit" alt="" /></a>
            <p className="pfMarlet text-darkGreen px-12"> Há um caminho para obter a saúde mental e eu quero te ajudar a percorrê-lo. Vamos juntos?</p>
            <a href="" className="bg-darkGreen w-fit block px-4 py-2 rounded-full text-white poppins-light">Marcar minha consulta</a>
        </header>
        
    )
}
