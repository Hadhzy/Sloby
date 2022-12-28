import React, {useState} from 'react'
import CountUp from 'react-countup'
import {getEveryNth} from './getEveryNth'
import {getRandomNumber} from './getRandomNumber'

export default function DashboardStats({
                                           title, subTitle = '', valueEnd, lightColor, darkColor, chartData
                                       }: { title: string, subTitle?: string, valueEnd: string, lightColor: string, darkColor: string, chartData: number[] }) {

    const ChartElement = ({values}: { values: number[] }) => {
        // Normalize randomNumbers between 0 and 1
        const max = Math.max(...values)
        const min = Math.min(...values)
        const modifier = 50;
        const normalized_values = values.map((n) => (n - min) / (max - min))
        return <div className='flex gap-2 items-end'>
            {normalized_values.map((n, i) => {
                return (
                    <div key={i} className={`relative rounded-full ${i & 1 ? darkColor : lightColor}`}>
                        <div className={`peer w-2 rounded-full z-30`}
                             style={{height: n * modifier + 'px', position: 'inherit'}}/>
                        <div
                            className="peer-hover:flex-center hidden -top-2 -left-[250%] -translate-y-full absolute bg-dark-border z-40 py-1 px-2 rounded-full text-sm">
                            {values[i]}
                        </div>
                    </div>
                )
            })}
        </div>
    }

    console.log('chartdata', chartData)

    return (
        <div className='w-[22rem]'>
            <div className='flex flex-col bg-dark-darkest rounded-large py-8 gap-1.5 px-10'>
                <p className='font-bold text-lg text-dark-mid'>{title}</p>
                <h1 className='text-4xl font-bold'><CountUp end={chartData.reduce((a, b) => a + b, 0)} duration={2}
                                                            useEasing={true}/> {valueEnd}</h1>
                <div className='flex gap-3 mt-5'>
                    <ChartElement values={chartData}/>
                </div>
                <p className='font-bold text-lg text-dark-mid'>{subTitle}</p>
            </div>
        </div>
    )
}
