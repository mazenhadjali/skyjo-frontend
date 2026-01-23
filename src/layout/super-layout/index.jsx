import React from 'react'

function SuperLayout({ children }) {
    return (
        <div className="h-dvh max-w-105 w-full mx-auto" >
            {children}
        </div>
    )
}

export default SuperLayout