import React, { createContext } from 'react'

const Usercontext = createContext({
    users: [
        { id: '1', name: 'Nirav' },
        { id: '2', name: 'Digjay' },
        { id: '3', name: 'Jaydeep' }
    ]
})

export default Usercontext
