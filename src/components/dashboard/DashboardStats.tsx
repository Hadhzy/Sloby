import React from 'react'
import CountUp from 'react-countup'
import {getEveryNth} from './getEveryNth'
import {getRandomNumber} from './getRandomNumber'

export default function DashboardStats({
                                           title, subTitle = '', value, valueEnd, lightColor, darkColor
                                       }: { title: string, subTitle?: string, value: number, valueEnd: string, lightColor: string, darkColor: string }) {

    const ChartElement = ({values}: { values: number[] }) => {
        // Normalize randomNumbers between 0 and 1
        const max = Math.max(...values)
        const min = Math.min(...values)
        const modifier = 50;
        values = values.map((n) => (n - min) / (max - min))
        console.log(values)
        return <div className='flex gap-2 items-end'>
            {values.map((n, i) => {
                return (
                    <div key={i} className={`w-2 rounded-full ${lightColor}`} style={{height: n * modifier + 'px'}}/>
                )
            })}
        </div>
    }

    const visits = Array.from({length: 13}, () => getRandomNumber(100, 20000))

    return (
        <div className='w-full'>
            <div className='flex flex-col bg-dark-dark rounded-large py-8 gap-1.5 px-10'>
                <p className='font-bold text-lg text-dark-mid'>{title}</p>
                <h1 className='text-4xl font-bold'><CountUp end={visits.reduce((a, b) => a + b, 0)} duration={2}
                                                            useEasing={true}/> {valueEnd}</h1>
                <div className='flex gap-3 mt-5'>
                    <ChartElement values={visits}/>
                </div>
                <p className='font-bold text-lg text-dark-mid'>{subTitle}</p>
            </div>
        </div>
    )
}
