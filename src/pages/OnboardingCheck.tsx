import Header from "../layouts/Header.tsx";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTripById } from "../mockData";
import {validateTripData} from "../utils/validators/validateTripData.ts";
import SmallFooter from "../layouts/SmallFooter.tsx";

const OnboardingCheck = () => {
    const { id } = useParams<{ id: string }>();
    const nav = useNavigate();

    const tripId = Number(id);
    const trip = tripId ? getTripById(tripId) : undefined;

    const missing = useMemo(() => {
        if (!trip?.tripData) return [];
        return validateTripData(trip.tripData);
    }, [trip]);

    const progress = useMemo(() => {
        const p = typeof trip?.progress === "number" ? trip.progress : 0;
        return Math.max(0, Math.min(100, Math.round(p)));
    }, [trip]);

    const progressText = progress >= 90
        ? "Почти готово! Осталось заполнить несколько обязательных полей для формирования документов."
        : progress >= 50
            ? "Хороший прогресс! Заполните оставшиеся поля, чтобы сформировать документы."
            : "Заполните анкету, чтобы мы смогли подготовить документы.";

    const canGenerate = missing.length === 0 && progress === 100;

    return (
        <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full flex-col">
                <Header />

                <div className="bg-[rgb(246,246,248)] py-6 sm:py-8">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-100">
                            <div className="flex items-center justify-between">
                                <h2 className="text-base sm:text-lg font-semibold text-slate-900">Прогресс заполнения</h2>
                                <span className="text-sm font-semibold text-blue-600">{progress}%</span>
                            </div>

                            <div className="mt-3 h-3 w-full rounded-full bg-slate-200 overflow-hidden">
                                <div className="h-full rounded-full bg-blue-600" style={{ width: `${progress}%` }} />
                            </div>

                            <p className="mt-4 text-sm text-slate-600">{progressText}</p>
                        </div>

                        {missing.length > 0 && (
                            <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50/60 p-5 sm:p-6">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.518 11.59c.75 1.335-.214 2.99-1.742 2.99H3.48c-1.528 0-2.492-1.655-1.742-2.99l6.518-11.59zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-8a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <h3 className="text-base sm:text-lg font-semibold text-rose-700">Необходимо исправить</h3>
                                </div>

                                <div className="mt-4 divide-y divide-rose-200/60 rounded-xl border border-rose-200/60 bg-white overflow-hidden">
                                    {missing.slice(0, 6).map((m, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4">
                                            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-rose-300 bg-rose-50" />
                                            <p className="text-sm text-rose-900">{m}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-10 flex items-center justify-between">
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Превью анкеты</h2>
                            <button
                                type="button"
                                onClick={() => nav(`/new-trip/${tripId}/personal`)}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                    <path d="M17.414 2.586a2 2 0 010 2.828l-9.9 9.9a1 1 0 01-.39.243l-3.2 1.066a1 1 0 01-1.266-1.266l1.066-3.2a1 1 0 01.243-.39l9.9-9.9a2 2 0 012.828 0z" />
                                    <path d="M15 4l1 1" />
                                </svg>
                                Редактировать все
                            </button>
                        </div>

                        <div className="mt-6 space-y-6">
                            <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-100">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-slate-900">1. Личные данные</h3>
                                    <button
                                        type="button"
                                        onClick={() => nav(`/new-trip/${tripId}/personal`)}
                                        className="text-slate-400 hover:text-slate-600"
                                        aria-label="Edit personal info"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path d="M17.414 2.586a2 2 0 010 2.828l-9.9 9.9a1 1 0 01-.39.243l-3.2 1.066a1 1 0 01-1.266-1.266l1.066-3.2a1 1 0 01.243-.39l9.9-9.9a2 2 0 012.828 0z" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-blue-600">ФАМИЛИЯ</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">{trip?.tripData?.personalInfo.secondName || "—"}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-blue-600">ИМЯ</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">{trip?.tripData?.personalInfo.firstName || "—"}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-blue-600">ДАТА РОЖДЕНИЯ</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">{trip?.tripData?.personalInfo.dateOfBirth || "—"}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-blue-600">ГРАЖДАНСТВО</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">{trip?.tripData?.personalInfo.citizenship || "—"}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-100">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-slate-900">2. Сведения о поездке</h3>
                                    <button
                                        type="button"
                                        onClick={() => nav(`/new-trip/${tripId}/visa`)}
                                        className="text-slate-400 hover:text-slate-600"
                                        aria-label="Edit trip info"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path d="M17.414 2.586a2 2 0 010 2.828l-9.9 9.9a1 1 0 01-.39.243l-3.2 1.066a1 1 0 01-1.266-1.266l1.066-3.2a1 1 0 01.243-.39l9.9-9.9a2 2 0 012.828 0z" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-blue-600">СТРАНА НАЗНАЧЕНИЯ</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">{trip?.country || trip?.tripData?.visaInfo.country || "—"}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-blue-600">ТИП ВИЗЫ</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">{trip?.visaType || trip?.tripData?.visaInfo.visaType || "—"}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-blue-600">ДАТА НАЧАЛА</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">{trip?.startDate || "—"}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-blue-600">ГОРОД ПОДАЧИ</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-900">
                                            {trip?.tripData?.visaInfo.applicationCity || "—"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 sm:p-6">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">Завершите заполнение</h3>
                                    <p className="mt-1 text-sm text-slate-600">Чтобы сформировать PDF анкету, необходимо устранить ошибки выше.</p>
                                </div>

                                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                                    <button
                                        type="button"
                                        onClick={() => nav(`/new-trip/${tripId}/personal`)}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:w-auto"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path d="M17.414 2.586a2 2 0 010 2.828l-9.9 9.9a1 1 0 01-.39.243l-3.2 1.066a1 1 0 01-1.266-1.266l1.066-3.2a1 1 0 01.243-.39l9.9-9.9a2 2 0 012.828 0z" />
                                        </svg>
                                        Заполнить недостающее
                                    </button>

                                    <button
                                        type="button"
                                        disabled={!canGenerate}
                                        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-sm sm:w-auto ${
                                            canGenerate
                                                ? "bg-slate-900 text-white hover:bg-slate-800"
                                                : "bg-slate-200 text-slate-400 cursor-not-allowed"
                                        }`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H5zm1 6a1 1 0 011-1h3a1 1 0 010 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 010 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Сформировать PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SmallFooter />
            </div>
        </div>
    );
};

export default OnboardingCheck;