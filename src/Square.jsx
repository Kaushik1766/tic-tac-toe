import React, { useState } from 'react'

function Square({ id, val, updateVal }) {
    const [cont, updateCont] = useState('X')

    return (
        <div className='border hover:opacity-100 hover:scale-[1.05] bg-black select-none border-white h-[10vh] w-[10vh] flex flex-col justify-center ' onClick={() => { updateVal(id) }} id={id}>
            <p className='text-center  text-white text-4xl h-max' >
                {val}
            </p>
        </div>
    )
}

export default Square