import { AiFillHome, AiOutlineSearch } from "react-icons/ai"
import React from 'react'

const MenuInicio = () => {
    return (
        <div className="rounded-[10px]  m-2 flex flex-col w-[300px] cor1 h-[120px]">

            <div className="m-3">
                <div className="flex items-center gap-4 text-1xl m-2 cursor-pointer text-white">
                    <AiFillHome fontSize={35} />
                    <p className="font-bold	">Inicio</p>
                </div>
                <div className="flex items-center gap-4 text-1xl m-2 cursor-pointer hover:text-white text-h1">
                    <AiOutlineSearch fontSize={35} />
                    <p>Buscar</p>
                </div>
            </div>
        </div>
    )
}

export default MenuInicio
