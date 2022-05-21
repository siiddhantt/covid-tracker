import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function Country() {
    const { state } = useLocation();
    const { name } = state;
    const [data, setData] = useState({countryInfo:{}});
    async function getCovidData() {
        const response = await fetch('http://localhost:5000/api/covid/countryspecific', {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            body: JSON.stringify({ country: `${name}` })
        });
        const json = await response.json();
        setData(json);
    }
    useEffect(() => {
        getCovidData();
    }, [name]);
    return (
        <div className=''>
            <a
                className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
            >
                <span
                    className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="justify-between sm:flex">
                    <div>
                        <h5 className="text-xl font-bold text-gray-900">
                            {data.country}
                        </h5>
                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                    </div>

                    <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <img
                            className="object-cover w-16 h-16 rounded-lg shadow-sm"
                            src={data.countryInfo.flag}
                            alt=""
                        />
                    </div>
                </div>

                <div className="mt-4 sm:pr-8">
                    <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                    </p>
                </div>

                <dl className="flex mt-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">31st June, 2021</dd>
                    </div>

                    <div className="flex flex-col-reverse ml-3 sm:ml-6">
                        <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                        <dd className="text-xs text-gray-500">3 minute</dd>
                    </div>
                </dl>
            </a>
        </div>
    )
}

export default Country
