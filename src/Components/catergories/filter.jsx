import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


export default function Filter({ setFiltered, active, setActive }) {
    const { meals, myMenu } = useSelector(store => store.mealSlice)
    useEffect(() => {
        if (active === '') {
            setFiltered(myMenu);
            return;
        }
        const filter = myMenu.filter((e) => {
            return (e.food_group == active)

        })
        setFiltered(filter)
    }, [active])

    return (
        <div className='filter-container'>

            <button onClick={() => {
                setActive('')
            }}>all </button>

            {
                meals.map((e, i) => {
                    return (< button key={i} onClick={() => {
                        setActive(e)
                    }}> {e}</button>)
                })


            }
        </div >
    )
}
