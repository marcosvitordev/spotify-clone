import React from 'react'
import { CgAdd } from "react-icons/cg";
import { LiaRandomSolid} from "react-icons/lia";

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
            </div>

            <div>
                <div>
                   


                </div>
            </div>
        </div>
    )
}

export default Player
