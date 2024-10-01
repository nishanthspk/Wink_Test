import React from 'react'
import Assets from '../Assets'

const Info = ({ holdersCount, currentLiquidity, lpHolders }) => {
    return (
        <div className="text-[8px] lg:text-sm space-y-1 lg:space-y-4">
            <div className=" flex justify-between">
                <div className="">
                    <p>Holders</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Exclamatory} alt="" />
                        <p className=' font-semibold text-[10px]'>
                            {holdersCount}
                            </p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-2 lg:mx-5 lg:self-stretch"></div>
                <div className="">
                    <p >Current Liquidity</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-[10px]'>${currentLiquidity}</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-2 lg:mx-5 lg:self-stretch"></div>
                <div className="">
                    <p>LP Holders</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-md'>{lpHolders}</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-2 lg:mx-5 lg:self-stretch"></div>
                <div className="">
                    <p>Holders</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-3 lg:h-4' src={Assets.Caution} alt="" />
                        <p className=' font-semibold text-md'>1</p>
                    </div>
                </div>
            </div>

            <div className=" flex justify-center">
                <div className="">
                    <p>Buy Tax</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-md'>0%</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-10 self-stretch"></div>
                <div className="">
                    <p>Sell Tax</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-md'>0%</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-10 self-stretch"></div>
                <div className="">
                    <p>Transfer Tax</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-md'>0%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info