import { AiFillHome, AiOutlineSearch } from "react-icons/ai"
import React from 'react'

const MenuInicio = () => {
    return (
        <div className="m-2 flex flex-col w-[300px] bg-gray-500 text-white h-[100px]">

            <div className="flex items-center gap-2 text-2xl">
                <AiFillHome fontSize={20} />
                <p>Inicio</p>
            </div>
            <div className="flex items-center gap-2 text-2xl">
                <AiOutlineSearch fontSize={20} />
                <p>Buscar</p>
            </div>
        </div>
    )
}

export default MenuInicio
