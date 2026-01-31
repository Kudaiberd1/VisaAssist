import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../../layouts/Header.tsx";
import { getTripById, updateTrip, updateTripData } from "../../mockData";
import SmallFooter from "../../layouts/SmallFooter.tsx";

const TripVisaDetails = () => {

    const { id } = useParams<{ id: string }>();
    const nav = useNavigate();

    const tripId = Number(id);
    const trip = tripId ? getTripById(tripId) : undefined;

    const [form, setForm] = useState({
        country: trip?.tripData?.visaInfo.country ?? "",
        visaType: trip?.tripData?.visaInfo.visaType ?? "Туризм",
        applicationCity: trip?.tripData?.visaInfo.applicationCity ?? "Алматы",
        startDate: trip?.startDate ?? "",
        endDate: trip?.endDate ?? "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };


    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!tripId) return;

        updateTrip(tripId, {
            startDate: form.startDate,
            endDate: form.endDate,
        });

        updateTripData(tripId, "visaInfo", {
            country: form.country,
            visaType: form.visaType,
            applicationCity: form.applicationCity,
        });

        nav(`/new-trip/${tripId}/situation`);
        //nav("/dashboard");
    };

    return (
        <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full flex-col">
                <Header />

                <div className="bg-[rgb(246,246,248)] py-6 sm:py-8">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm mb-6 sm:mb-8 border border-slate-100">
                            <div className="flex justify-between">
                                <p className="font-semibold text-gray-800"> Основная информация </p>
                                <p className="font-semibold text-gray-800">{trip?.progress ?? 0}%</p>
                            </div>

                            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                                <div className="h-2 rounded-full bg-blue-600" style={{ width: `${trip?.progress ?? 0}%` }}></div>
                            </div>

                            <div className="mt-3 flex items-center justify-between">
                                <p className="text-sm text-gray-500">Шаг 2 из 3: Страна и тип визы</p>
                            </div>

                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"> Страна и тип визы </h1>
                        <p className="text-slate-600 mb-6"> Укажите основные параметры вашей поездки для подбора документов </p>

                        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-slate-100">
                            <div className="space-y-5">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <span className="inline-flex h-5 w-5 items-center justify-center text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        Страна назначения
                                    </label>
                                    <div className="relative mt-2">
                                        <input
                                            name="country"
                                            value={form.country}
                                            onChange={onChange}
                                            placeholder="Выберите страну"
                                            className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-300 to-cyan-400" />
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <span className="inline-flex h-5 w-5 items-center justify-center text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                                <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6z" />
                                            </svg>
                                        </span>
                                        Тип визы
                                    </label>
                                    <div className="relative mt-2">
                                        <select
                                            name="visaType"
                                            value={form.visaType}
                                            onChange={onChange}
                                            className="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        >
                                            <option value="ШЕНГЕНСКАЯ">Шенгенская</option>
                                            <option value="ТУРИЗМ">Туризм</option>
                                            <option value="БИЗНЕС">Бизнес</option>
                                            <option value="ГОСТЕВАЯ">Гостевая</option>
                                        </select>
                                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                                <path fillRule="evenodd" d="M5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <span className="inline-flex h-5 w-5 items-center justify-center text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                                <path fillRule="evenodd" d="M9.049 2.927a1 1 0 011.902 0l.6 2.006a1 1 0 00.95.69h2.11a1 1 0 01.592 1.806l-1.707 1.247a1 1 0 00-.364 1.118l.65 2.042a1 1 0 01-1.53 1.118L10 12.347l-1.252.907a1 1 0 01-1.53-1.118l.65-2.042a1 1 0 00-.364-1.118L5.797 7.43a1 1 0 01.592-1.806h2.11a1 1 0 00.95-.69l.6-2.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        Город подачи
                                    </label>
                                    <input
                                        name="applicationCity"
                                        value={form.applicationCity}
                                        onChange={onChange}
                                        placeholder="Алматы"
                                        className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="startDate" className="block text-sm font-semibold text-slate-600">Дата начала поездки</label>
                                        <input
                                            type="date"
                                            id="startDate"
                                            name="startDate"
                                            value={form.startDate}
                                            onChange={onChange}
                                            className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="endDate" className="block text-sm font-semibold text-slate-600">Дата окончания поездки</label>
                                        <input
                                            type="date"
                                            id="endDate"
                                            name="endDate"
                                            value={form.endDate}
                                            onChange={onChange}
                                            className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <button
                                        type="button"
                                        onClick={() => nav(`/new-trip/${tripId}/personal`)}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:w-auto"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.707 4.293a1 1 0 010 1.414L5.414 8H13a1 1 0 110 2H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Назад
                                    </button>

                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:w-auto"
                                    >
                                        Сохранить и продолжить
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 15.707a1 1 0 010-1.414L14.586 12H7a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <SmallFooter />
            </div>
        </div>
    )
}

export default TripVisaDetails;