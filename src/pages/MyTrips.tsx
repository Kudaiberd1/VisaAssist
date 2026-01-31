import Header from "../layouts/Header.tsx";
import {useEffect, useState} from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { addTrip, getTrips, subscribeTrips } from "../mockData.ts";
import type {Trip} from "../features/trips/type.ts";
import Card from "../components/Card.tsx";
import {useNavigate} from "react-router-dom";
import {useGoToSection} from "../services/goToSection.ts";

const MyTrips = () => {

    const [selectedTab, setSelectedTab] = useState(1);
    const [trips, setTrips] = useState<Trip[]>(getTrips());

    const goToSection = useGoToSection();

    const nav = useNavigate();

    useEffect(() => {
        const unsubscribe = subscribeTrips(() => {
            setTrips([...getTrips()]);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const filteredTrips = trips.filter(trip => {
        const status = trip.progress === 100 ? "Завершена" : "В процессе";
        if (selectedTab === 1) return true;
        if (selectedTab === 2) return status === "В процессе";
        if (selectedTab === 3) return status === "Завершена";
        return true;
    });

    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full flex-col">
                <Header />

                <main className="flex-grow bg-[rgb(246,246,248)]">
                    <div className="mx-4 sm:mx-6 lg:mx-[50px] mt-4 mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h1 className="font-bold text-2xl leading-tight">Мои поездки</h1>
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white sm:w-auto" onClick={() => {
                            const newTrip = addTrip({
                                visaType: "",
                                country: "",
                                startDate: "",
                                endDate: "",
                                progressText: "Личная информация",
                                progress: 0,
                            });

                            nav(`/new-trip/${newTrip.id}/personal`);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            <span>Создать новую поездку</span>
                        </button>
                    </div>

                    <div className="mx-4 sm:mx-6 lg:mx-[50px] border-b border-gray-200 overflow-x-auto">
                        <nav className="-mb-px flex gap-4 min-w-max" aria-label="Tabs">
                            <button
                                type="button"
                                aria-current={selectedTab === 1 ? "page" : undefined}
                                className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm transition-colors ${selectedTab==1 ? "font-semibold border-blue-600 text-blue-600" : "font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
                                onClick={() => setSelectedTab(1)}
                            >
                                Все
                            </button>
                            <button
                                type="button"
                                aria-current={selectedTab === 2 ? "page" : undefined}
                                className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm transition-colors ${selectedTab==2 ? "font-semibold border-blue-600 text-blue-600" : "font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
                                onClick={() => setSelectedTab(2)}
                            >
                                Активные
                            </button>
                            <button
                                type="button"
                                aria-current={selectedTab === 3 ? "page" : undefined}
                                className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm transition-colors ${selectedTab==3 ? "font-semibold border-blue-600 text-blue-600" : "font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
                                onClick={() => setSelectedTab(3)}
                            >
                                Завершенные
                            </button>
                        </nav>
                    </div>

                    <div className="mx-4 sm:mx-6 lg:mx-[50px] mt-6 sm:mt-8 space-y-4 sm:space-y-6 mb-16">
                        {filteredTrips.length > 0 ? (
                            filteredTrips.map(trip => (
                                <Card key={trip.id} trip={trip} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500">
                                Поездки не найдены.
                            </p>
                        )}
                    </div>

                    <div className="mx-4 sm:mx-6 lg:mx-[50px] mb-10 rounded-2xl bg-blue-100/50 p-5 sm:p-6 border border-blue-200/50">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-start sm:items-center gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                                    <RiCustomerService2Fill />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Нужна помощь с документами?</h3>
                                    <p className="text-sm text-gray-600">Наши специалисты помогут собрать полный пакет документов для любой страны Шенгена.</p>
                                </div>
                            </div>
                            <button onClick={() => goToSection("contacts", "/")} className="inline-flex w-full justify-center sm:w-auto text-sm font-semibold text-blue-600 hover:underline">
                                Связаться с поддержкой
                            </button>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    );
}

export default MyTrips;