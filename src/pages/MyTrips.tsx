import Header from "../layouts/Header.tsx";
import {useEffect, useState} from "react";
import Card, {type Trip} from "../components/Card.tsx";
import { RiCustomerService2Fill } from "react-icons/ri";
import {mockData} from "../mockData.ts";

const MyTrips = () => {

    const [selectedTab, setSelectedTab] = useState(1);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                //await new Promise(resolve => setTimeout(resolve, 1000));

                setTrips(mockData);

            } catch (err) {
                setError('Failed to fetch trips.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    const filteredTrips = trips.filter(trip => {
        if (selectedTab === 1) return true; // Все
        if (selectedTab === 2) return trip.status === "В процессе";
        if (selectedTab === 3) return trip.status === "Завершена";
        return true;
    });

    if (loading) {
        return <div className="p-8 text-center">Loading trips...</div>;
    }

    if (error) {
        return <div className="p-8 text-center text-red-500">{error}</div>;
    }

    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full flex-col">
                <Header />

                <main className="flex-grow bg-[rgb(246,246,248)] max-w-8xl">
                    <div className={"mx-[50px] my-[25px] flex items-center justify-between"}>
                        <h1 className={"font-bold text-[40px]"}> Мои поездки </h1>
                        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-transform duration-200 hover:scale-[1.01]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            <span>Создать новую поездку</span>
                        </button>
                    </div>

                    <div className="mx-[50px] border-b border-gray-200">
                        <nav className="-mb-px flex gap-8" aria-label="Tabs">
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

                    <div className="mx-[50px] mt-8 space-y-6 mb-[84px]">
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

                    <div className="mx-[50px] mb-[40px] rounded-2xl bg-blue-100/50 p-6 border border-blue-200/50">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                                    <RiCustomerService2Fill />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Нужна помощь с документами?</h3>
                                    <p className="text-sm text-gray-600">Наши специалисты помогут собрать полный пакет документов для любой страны Шенгена.</p>
                                </div>
                            </div>
                            <a href="/#contacts" className="flex-shrink-0 text-sm font-semibold text-blue-600 hover:underline">
                                Связаться с поддержкой
                            </a>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    );
}

export default MyTrips;