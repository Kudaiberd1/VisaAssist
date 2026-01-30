import React from 'react';
import {CityMapEmbed} from "./CityMapEmbed.tsx";

export interface Trip {
    id: number;
    visaType: string;
    country: string;
    status: string;
    startDate: string;
    endDate: string;
    progressText: string;
    progress: number;
    paymentStatus: string;
}

const Card: React.FC<{ trip: Trip }> = ({ trip }) => {
    const isFinished = trip.status === "Завершена";

    const statusBgColor = isFinished ? "bg-gray-100" : (trip.status === "В процессе" ? "bg-blue-100" : "bg-yellow-100");
    const statusTextColor = isFinished ? "text-gray-500" : (trip.status === "В процессе" ? "text-blue-800" : "text-yellow-800");

    const progressBarColor = isFinished ? "bg-green-500" : "bg-blue-600";
    const progressTextColor = isFinished ? "text-green-500" : "text-blue-600";

    const paymentDotColor = `bg-${trip.paymentStatus === "Оплачено" ? "green-500" : "yellow-500"}`;


    return (
        <div className="flex cursor-pointer items-center gap-6 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className={"object-cover"}>
                <CityMapEmbed city={trip.country} />
            </div>

            <div className="flex-grow">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-xs font-medium text-gray-500">{trip.visaType}</p>
                        <h3 className="text-2xl font-bold text-gray-800">{trip.country}</h3>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBgColor} ${statusTextColor}`}>
                        {trip.status}
                    </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400">
                        <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c0-.414.336-.75.75-.75h10.5a.75.75 0 010 1.5H5.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    <span>{trip.startDate} — {trip.endDate}</span>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-800">{trip.progressText}</span>
                        <span className={`font-semibold ${progressTextColor}`}>{trip.progress}%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                        <div className={`h-2 rounded-full ${progressBarColor}`} style={{ width: `${trip.progress}%` }}></div>
                    </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                    {isFinished ? (
                        <div></div>
                    ) : (
                        <div className="flex items-center gap-2 text-sm">
                            <span className={`h-2 w-2 rounded-full ${paymentDotColor}`}></span>
                            <span className="text-gray-600">Статус оплаты: <span className="font-medium text-gray-800">{trip.paymentStatus}</span></span>
                        </div>
                    )}
                    <button className={isFinished
                        ? "rounded-lg bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
                        : "rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                    }>
                        {isFinished ? "Детали поездки" : "Продолжить"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
