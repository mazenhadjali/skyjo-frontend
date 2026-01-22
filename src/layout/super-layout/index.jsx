import { cn } from '@/lib/utils'
import React from 'react'

function SuperLayout({ children }) {
    return (
        <div className={cn('max-w-106 w-full mx-auto')} >
            {children}
        </div>
    )
}

export default SuperLayout