import React from 'react'
import { CgAdd } from "react-icons/cg";
import { LiaRandomSolid,CgPlayTrackPrev,CgPlayTrackNext } from "react-icons/lia";
import { FaPlayCircle } from "react-icons/fa";

import Image from '../assets/Musicas/Albun-1/cd_cover.jpeg'

const Player = () => {
    return (
        <div className='flex  items-center'>
            <div className='ml-3 items-center flex gap-4'>
                <img src={Image} alt="" className='h-[60px] img-painel-2 cursor-pointer' />
                <div>
                    <p className='text-white font-bold cursor-pointer'>Nome da Musica</p>
                    <p className='mnt-music cursor-pointer'>Nome cantor, Cantor</p>
                </div>
                <CgAdd size={23} className='mnt-music' />
            </div>

            <div>
                <div>
                    <LiaRandomSolid className='mnt-music' size={25}/>
                    <CgPlayTrackPrev className='mnt-music' size={25}/>
                    <FaPlayCircle className='mnt-music' size={25}/>
                    <CgPlayTrackNext className='mnt-music' size={25}/>


                </div>
            </div>
        </div>
    )
}

export default Player
