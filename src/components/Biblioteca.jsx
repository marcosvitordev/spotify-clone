import { IoLibrarySharp } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai"
import { FiList } from "react-icons/fi";


import React from 'react'
import Biblioteca_musica from "./Biblioteca_musica";

const Biblioteca = () => {
    return (
        <div>
            <div className='fixed rounded-[10px]  m-2 flex flex-col w-[300px] cor1 h-[65vh] '>
                <div className="ml-5 mt-5 w-[250px]">
                    <div className="text-h1 flex items-center gap-3 ">
                        <div className="text-h1 flex items-center gap-3 hover:text-white cursor-pointer">
                            <IoLibrarySharp fontSize={35} />
                            <p>Sua Biblioteca</p>
                        </div>
                        <div className="flex gap-2 ml-7">
                            <CgMathPlus fontSize={25} className="hover:text-white cursor-pointer" />
                            <GoArrowRight fontSize={25} className="hover:text-white cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button type="button" class="btn-biblioteca text-white  rounded-[20px]  px-[12px] py-[5px]  focus:outline-none ">Playlist</button>
                        <button type="button" class="btn-biblioteca text-white  rounded-[20px]  px-[12px] py-[5px]  focus:outline-none ">Álbuns</button>
                    </div>
                    {/* botão e musicas */}

                    <div className="mt-2 text-h1 scroll w-[280px] overflow-y-scroll overflow-x-hidden ">
                        <div className="flex items-center gap-[130px]">
                            <AiOutlineSearch fontSize={25} className="cursor-pointer hover:text-white" />
                            <div className="flex items-center gap-1 cursor-pointer hover:text-white">
                                <p className="text-[16px]">Recentes</p>
                                <FiList fontSize={25} />
                            </div>
                        </div>
                        {/*musicas */}
                        <div>
                            <div>
                                <Biblioteca_musica />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biblioteca
