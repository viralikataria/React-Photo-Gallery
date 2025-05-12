import React, {useState} from "react";

const Test = () =>{

    return (
        <div>
            <div className="bg-amber-950">
                <p className="ml-6 text-white">Regular Text</p>
                <p className="ml-6 text-white text-sm">Small Text</p>
                <p className="ml-6 text-white text-xl">Large Text</p>
                <p className="ml-6 font-bold text-white">Bold Text</p>
                <p className="ml-6 text-white uppercase">Uppercase Text</p>

            </div>

            <div className="bg-blue-50 p-6">
                <p className="text-white font-bold">Blue-50</p>
            </div>
            <div className="bg-blue-500 p-6">
                <p className="text-white font-bold">Blue-500</p>
            </div>
            <div className="bg-blue-900 p-6 font-bold">
                <p className="text-white">Blue-900</p>
            </div>

            <div >
                <p className="ml-6"> Regular font</p>
                <p className="ml-6 text-amber-900"> Color Amber</p>
                <p className="ml-6 font-serif">Font Serif</p>
                <p className="ml-6 font-thin">Font Thin</p>
            </div>
        </div>
        
    )
};
export default Test;
