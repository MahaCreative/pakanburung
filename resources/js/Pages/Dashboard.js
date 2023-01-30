import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

import App from "../Layout/App";
export default function Dashboard(props) {
    const [date, setDate] = useState(new Date());
    const { suhu } = props;
    const { status } = props;
    const { stok } = props;
    const [suhus, setSuhu] = useState([]);
    const { data, setData, put } = useForm({
        status: status[0].status === "mati" ? "aktif" : "mati",
    });
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });
    function tick() {
        setDate(new Date());
    }
    Echo.channel("data-suhu").listen("DataSuhuSent", (e) => {
        Inertia.reload({ preserveScroll: true });
    });
    Echo.channel("data-stok").listen("DataStokEvent", (e) => {
        Inertia.reload({ preserveScroll: true });
        console.log("g");
    });
    Echo.channel("status").listen("StatusMakanSent", (e) => {
        Inertia.reload({ preserveScroll: true });
    });
    var icon = "";
    let textcuaca = "Cuaca Normal";
    if (suhu.length > 0) {
        if (suhu[0].temperature >= 35) {
            icon = (
                <img src="/images/sun.png" className="w-52 md:w-44 lg:w-52" />
            );
            textcuaca = "Cuaca Panas";
        } else {
            icon = (
                <img src="images/cool.png" className="w-52 md:w-44 lg:w-52" />
            );
            textcuaca = "Cuaca Normal";
        }
    } else {
        icon = <img src="images/cool.png" className="w-52 md:w-44 lg:w-52" />;
        textcuaca = "Cuaca Normal";
    }
    const statusHandler = (e) => {
        setData({ ...data, status: e });
        console.log(data);
        put("button-set-makan");
    };

    return (
        <div className="flex justify-center w-full px-8">
            <div className="w-full">
                <div className="flex items-center justify-center gap-2">
                    <p className="bg-slate-700 w-[200px] text-center rounded-lg shadow-sm shadow-gray-200 text-emerald-400 p-3 my-3 font-electro text-3xl font-semibold">
                        {date.toLocaleTimeString("ID", {
                            timeZone: "Asia/Jakarta",
                        })}
                    </p>
                    <button
                        type="submit"
                        onClick={() => statusHandler("aktif")}
                        className={clsx(
                            status[0].status == "mati"
                                ? "text-red-500"
                                : "text-emerald-400",
                            "hover:cursor-pointer bg-slate-700 w-[200px] text-center rounded-lg shadow-sm shadow-gray-200  p-3 my-3 font-electro text-lg md:text-xl lg:text-3xl font-semibold hover:bg-slate-800 flex items-center justify-between"
                        )}
                    >
                        <p>Beri Pakan</p>
                        <div
                            className={clsx(
                                status[0].status == "mati"
                                    ? "bg-red-400"
                                    : "bg-emerald-400",
                                "h-6 w-6 rounded-full  border-dashed border-4 border-spacing-5 border-white "
                            )}
                        />
                    </button>
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-3 my-5">
                    {/* suhu */}
                    <div className="bg-white w-[100%] h-[400px] md:w-1/2 rounded-lg py-2.5 px-4 flex-col">
                        <div className="flex justify-between px-2">
                            <p className="font-bold">Temperature</p>
                            <p>
                                {date.toLocaleTimeString("ID", {
                                    timeZone: "Asia/Jakarta",
                                })}
                            </p>
                        </div>
                        <div className="flex items-center justify-center flex-col h-36 bg-gray-50 shadow-emerald-400/30 shadow-sm">
                            <p className="text-xl md:text-5xl lg:text-7xl font-bold font-electro">
                                {suhu.length > 0 ? suhu[0].temperature : "0"}{" "}
                                <span>&#8451;</span>
                            </p>
                            <p> {textcuaca}</p>
                        </div>

                        <div className="flex items-center justify-between gap-3 px-6 my-3">
                            <div className="flex flex-col gap-3 justify-center ">
                                <p className="flex gap-3 items-center ">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 font-semibold text-emerald-400"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                            />
                                        </svg>
                                    </span>
                                    <p className="text-base md:text-md lg:text-xl font-electro">
                                        {date.toDateString()}
                                    </p>
                                </p>
                                <div className="flex gap-3 items-center">
                                    <img
                                        src="/images/air.png"
                                        className="w-6"
                                    />
                                    <p className="text-base md:text-md lg:text-xl font-electro">
                                        {suhu.length > 0
                                            ? suhu[0].temperature
                                            : "0"}{" "}
                                        %
                                    </p>
                                </div>
                            </div>
                            <div className="px-10">{icon}</div>
                        </div>
                    </div>
                    {/* Humidity */}
                    <div className="bg-white w-[100%] h-[400px] md:w-1/2 rounded-lg py-2.5 px-4 flex-col">
                        <div className="flex justify-between px-2">
                            <p className="font-bold">Temperature</p>
                            <p>
                                {date.toLocaleTimeString("ID", {
                                    timeZone: "Asia/Jakarta",
                                })}
                            </p>
                        </div>
                        <div className="flex items-center justify-center flex-col h-36 bg-gray-50 shadow-emerald-400/30 shadow-sm">
                            <p className="text-xl md:text-5xl lg:text-7xl font-bold font-electro">
                                {suhu.length > 0 ? suhu[0].humidity : "0"}{" "}
                                <span>&#8451;</span>
                            </p>
                            <p> {textcuaca}</p>
                        </div>
                        <div className="flex items-center justify-between gap-3 px-6 my-3">
                            <div className="flex flex-col gap-3 justify-center ">
                                <p className="flex gap-3 items-center ">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 font-semibold text-emerald-400"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                            />
                                        </svg>
                                    </span>
                                    <p className="text-base md:text-md lg:text-xl font-electro">
                                        {date.toDateString()}
                                    </p>
                                </p>
                                <div className="flex gap-3 items-center">
                                    <img
                                        src="/images/air.png"
                                        className="w-6"
                                    />
                                    <p className="text-base md:text-md lg:text-xl font-electro">
                                        {suhu.length > 0
                                            ? suhu[0].temperature
                                            : "0"}{" "}
                                        %
                                    </p>
                                </div>
                            </div>
                            <div className="px-10">{icon}</div>
                        </div>
                    </div>
                    {/* Stok Makan */}
                    <div className="bg-white w-[100%] h-[400px] md:w-1/2 rounded-lg py-2.5 px-4 flex-col">
                        <div className="flex justify-between px-2">
                            <p className="font-bold">Stok Pakan</p>
                            <p>
                                {date.toLocaleTimeString("ID", {
                                    timeZone: "Asia/Jakarta",
                                })}
                            </p>
                        </div>
                        <div className="flex items-center justify-center flex-col h-36 bg-gray-50 shadow-emerald-400/30 shadow-sm">
                            <p className="text-xl md:text-5xl lg:text-7xl font-bold font-electro">
                                {stok.length > 0 ? stok[0].stok : "0"} %
                            </p>
                        </div>
                        <div className="flex items-center justify-between gap-3 px-6 my-3">
                            <div className="flex flex-col gap-3 justify-center ">
                                <p className="flex gap-3 items-center ">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 font-semibold text-emerald-400"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                            />
                                        </svg>
                                    </span>
                                    <p className="text-base md:text-md lg:text-xl font-electro">
                                        {date.toDateString()}
                                    </p>
                                </p>
                            </div>
                            <div className="px-10">
                                <img
                                    src="/images/food.png"
                                    className="w-52 md:w-44 lg:w-52"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tombol Pakan */}
            </div>
        </div>
    );
}
Dashboard.layout = (page) => <App children={page} />;
