import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { CiBellOn } from "react-icons/ci";
import { TbUsersGroup } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import Image from '../assets/Musicas/Albun-1/cd_cover.jpeg'

const Painel = () => {
    return (
        <div>
            <div className='ml-[320px] mt-[-128px] rounded-[10px]  m-2 flex flex-col w-auto cor1 h-[85vh] '>
                <div className='m-4 flex gap-[85%]'>
                    <div className='flex gap-2'>
                        <SlArrowLeft fontSize={25} className='seta-btn h-8 w-8 items-center gap-2 p-[8px] text-white cursor-pointer' />
                        <SlArrowRight fontSize={25} className='seta-btn h-8 w-8 items-center gap-2 p-[8px] text-white cursor-pointer' />
                    </div>
                    <div className='flex gap-2'>
                        <CiBellOn fontSize={25} className='seta-btn h-8 w-8 items-center gap-2 p-[5px] text-white cursor-pointer' />
                        <TbUsersGroup fontSize={25} className='seta-btn h-8 w-8 items-center gap-2 p-[5px] text-white cursor-pointer' />
                        <FaCircleUser fontSize={25} className='seta-btn h-8 w-8 items-center gap-2 p-[5px] text-white cursor-pointer' />
                    </div>
                </div>
                <div className='verflow-y-scroll overflow-x-hidden scroll h-[100vh]  rounded-[10px]  p-2' >
                    <div className='flex gap-2 ml-4'>
                        <button type="button" class="btn-biblioteca text-white  rounded-[20px]  px-[12px] py-[5px]  focus:outline-none ">Tudo</button>
                        <button type="button" class="btn-biblioteca text-white  rounded-[20px]  px-[12px] py-[5px]  focus:outline-none ">Música</button>
                        <button type="button" class="btn-biblioteca text-white  rounded-[20px]  px-[12px] py-[5px]  focus:outline-none ">Podcast</button>
                    </div>
                    <div className='grid gap-2 mr-5 ml-4 mt-4 grid-cols-4 '>
                        <div className='flex w-[270px] cursor-pointer painel-block h-[60px] cor-1 items-center rounded-[7px]'>
                            <img src={Image} alt="" className='h-[60px] img-painel' />
                            <div>
                                <p className='text-white font-bold ml-3'>Nome da Musica</p>
                            </div>
                        </div>
                        <div className='flex w-[270px] cursor-pointer painel-block h-[60px] cor-1 items-center rounded-[7px]'>
                            <img src={Image} alt="" className='h-[60px] img-painel' />
                            <div>
                                <p className='text-white font-bold ml-3'>Nome da Musica</p>
                            </div>
                        </div>
                        <div className='flex w-[270px] cursor-pointer painel-block h-[60px] cor-1 items-center rounded-[7px]'>
                            <img src={Image} alt="" className='h-[60px] img-painel' />
                            <div>
                                <p className='text-white font-bold ml-3'>Nome da Musica</p>
                            </div>
                        </div>
                        <div className='flex w-[270px] cursor-pointer painel-block h-[60px] cor-1 items-center rounded-[7px]'>
                            <img src={Image} alt="" className='h-[60px] img-painel' />
                            <div>
                                <p className='text-white font-bold ml-3'>Nome da Musica</p>
                            </div>
                        </div>
                        <div className='flex w-[270px] cursor-pointer painel-block h-[60px] cor-1 items-center rounded-[7px]'>
                            <img src={Image} alt="" className='h-[60px] img-painel' />
                            <div>
                                <p className='text-white font-bold ml-3'>Nome da Musica</p>
                            </div>
                        </div>
                        <div className='flex w-[270px] cursor-pointer painel-block h-[60px] cor-1 items-center rounded-[7px]'>
                            <img src={Image} alt="" className='h-[60px] img-painel' />
                            <div>
                                <p className='text-white font-bold ml-3'>Nome da Musica</p>
                            </div>
                        </div>
                        <div className='flex w-[270px] cursor-pointer painel-block h-[60px] cor-1 items-center rounded-[7px]'>
                            <img src={Image} alt="" className='h-[60px] img-painel' />
                            <div>
                                <p className='text-white font-bold ml-3'>Nome da Musica</p>
                            </div>
                        </div>
                        <div className='flex w-[270px] cursor-pointer painel-block h-[60px] cor-1 items-center rounded-[7px]'>
                            <img src={Image} alt="" className='h-[60px] img-painel' />
                            <div>
                                <p className='text-white font-bold ml-3'>Nome da Musica</p>
                            </div>
                        </div>

                        <div className='mt-2'>
                            <div className=''>
                                <p className='text-white text-2xl font-bold cursor-pointer'>Feito para Você</p>
                                <div className='mt-3 grid grid-cols-6 gap-1 w-[403%]'>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                    <div className='items-center grid justify-center p-3 rounded-[10px] cursor-pointer cards-1'>
                                        <img src={Image} alt="" className='h-[170px] img-painel' />
                                        <div className='grid w-[168px] text-white h-[70px] mt-2'>
                                            <h2 className='font-bold'>Daily Mix 1</h2>
                                            <p className='truncate '>Nome cantor, Nome cantor, Nome cantor, Nome cantor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Painel
