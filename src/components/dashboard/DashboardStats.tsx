import React from 'react'
import CountUp from 'react-countup'
import { getEveryNth } from './getEveryNth'
import { getRandomNumber } from './getRandomNumber'

export default function DashboardStats() {

  const ChartElement = () => {
    let randomNumber = getRandomNumber(20, 70)
    console.log(randomNumber)
    return <div className='flex gap-2 items-end'>
      <div className={`bg-[#0085ff] h-[60px] w-[13px] rounded-full`} />
      <div className={`bg-[#4F40FF] h-[50px] w-[13px] rounded-full`} />
    </div>
  }

  return (
    <div className='w-full'>
      <div className='bg-[#111111] w-[450px] h-[230px] rounded-[40px] ml-[50px] mt-[20px]'>
        <p className='pt-[30px] pl-[55px] font-bold text-lg text-[#414141]'>Total visits</p>
        <h1 className='pt-[30px] pl-[55px] mt-[-15px] text-4xl font-bold'><CountUp end={1234} duration={5}/> visits</h1>
        <div className='flex gap-3 mt-5 justify-center'>
          {Array.from({length: 8}, (_, i) => <ChartElement key={i}/>)}
        </div>
      </div>
    </div>
  )
}
