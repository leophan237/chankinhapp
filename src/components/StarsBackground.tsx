'use client'

import React from 'react'
import '@/app/stars.css'

export const StarsBackground = () => {
    return (
        <div className="stars-container pointer-events-none">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
        </div>
    )
}

export default StarsBackground
