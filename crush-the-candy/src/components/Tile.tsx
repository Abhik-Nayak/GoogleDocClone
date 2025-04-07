import React from 'react'

const Tile = ({ candy, candyId }: { candy: string; candyId: number }) => {
    return (
        <div
            className="h-24 w-24 flex justify-center items-center m-0.5 rounded-lg select-none"
            style={{
                boxShadow: "inset 5px 5px 15px #062525,inset -5px -5px 15px #aaaab7bb",
            }}
        >
            {candy && (
                <img
                    src={candy}
                    alt=""
                    className="h-20 w-20"
                />)}
        </div>
    )
}

export default Tile