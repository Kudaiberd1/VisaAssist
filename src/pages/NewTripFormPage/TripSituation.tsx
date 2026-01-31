import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../../layouts/Header.tsx";
import { getTripById, updateTripData } from "../../mockData";
import SmallFooter from "../../layouts/SmallFooter.tsx";

const TripSituation = () => {

    const { id } = useParams<{ id: string }>();
    const nav = useNavigate();

    const tripId = Number(id);
    const trip = tripId ? getTripById(tripId) : undefined;

    const [form, setForm] = useState({
        employmentStatus: trip?.tripData?.visaSituation.employmentStatus ?? "Работаю по найму",
        planTrip: trip?.tripData?.visaSituation.planTrip ?? "Еду один (одна)",
        hasSponsor: trip?.tripData?.visaSituation.hasSponsor ?? false,
        visaHistory: trip?.tripData?.visaSituation.visaHistory ?? false,
    });

    const setField = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!tripId) return;

        updateTripData(tripId, "visaSituation", {
            employmentStatus: form.employmentStatus,
            planTrip: form.planTrip,
            hasSponsor: form.hasSponsor,
            visaHistory: form.visaHistory,
        });

        nav("/dashboard");
    };

    return (
        <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full flex-col">
                <Header />

                <div className="bg-[rgb(246,246,248)] py-6 sm:py-8">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm mb-6 sm:mb-8 border border-slate-100">
                            <div className="flex justify-between">
                                <p className="font-semibold text-gray-800">Ваша ситуация</p>
                                <p className="font-semibold text-gray-800">{trip?.progress ?? 0}%</p>
                            </div>

                            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                                <div className="h-2 rounded-full bg-blue-600" style={{ width: `${trip?.progress ?? 0}%` }}></div>
                            </div>

                            <div className="mt-3 flex items-center justify-between">
                                <p className="text-sm text-gray-500">Шаг 3 из 3: Ваша ситуация</p>
                            </div>

                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"> Ваша ситуация </h1>
                        <p className="text-slate-600 mb-6">Ответьте на несколько вопросов, чтобы мы подготовили персональный список документов для вашей визы.</p>

                        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-slate-100">
                            <div className="mb-8">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                            <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h1a1 1 0 011 1v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8a1 1 0 011-1h1zm2 0h4V5a1 1 0 00-1-1H9a1 1 0 00-1 1v1z" />
                                        </svg>
                                    </span>
                                    <h2 className="text-lg font-semibold text-slate-900">Занятость</h2>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        {
                                            value: "Работаю по найму",
                                            title: "Работаю по найму",
                                            hint: "Потребуется справка с места работы",
                                        },
                                        {
                                            value: "ИП / Самозанятый",
                                            title: "ИП / Самозанятый",
                                            hint: "Документы о регистрации и выписки",
                                        },
                                        {
                                            value: "Студент / Школьник",
                                            title: "Студент / Школьник",
                                            hint: "Справка из учебного заведения",
                                        },
                                        {
                                            value: "Временно не работаю",
                                            title: "Временно не работаю",
                                            hint: "Потребуется спонсорство или выписка",
                                        },
                                    ].map((opt) => (
                                        <label
                                            key={opt.value}
                                            className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition ${
                                                form.employmentStatus === opt.value
                                                    ? "border-blue-500 bg-blue-50/40"
                                                    : "border-slate-200 hover:bg-slate-50"
                                            }`}
                                        >
                                            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center">
                                                <span
                                                    className={`h-5 w-5 rounded-full border-2 ${
                                                        form.employmentStatus === opt.value
                                                            ? "border-blue-600"
                                                            : "border-slate-300"
                                                    } flex items-center justify-center`}
                                                >
                                                    {form.employmentStatus === opt.value && (
                                                        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                                                    )}
                                                </span>
                                            </span>

                                            <span className="flex-1">
                                                <span className="block text-sm font-semibold text-slate-900">
                                                    {opt.title}
                                                </span>
                                                <span className="block text-sm text-slate-600">{opt.hint}</span>
                                            </span>

                                            <input
                                                type="radio"
                                                name="employmentStatus"
                                                className="sr-only"
                                                checked={form.employmentStatus === opt.value}
                                                onChange={() => setField("employmentStatus", opt.value)}
                                            />
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                            <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path fillRule="evenodd" d="M5 15a5 5 0 0110 0v1H5v-1z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <h2 className="text-lg font-semibold text-slate-900">Состав поездки</h2>
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {["Еду один (одна)", "С семьёй"].map((opt) => (
                                        <label
                                            key={opt}
                                            className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition ${
                                                form.planTrip === opt
                                                    ? "border-blue-500 bg-blue-50/40"
                                                    : "border-slate-200 hover:bg-slate-50"
                                            }`}
                                        >
                                            <span
                                                className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                                                    form.planTrip === opt ? "border-blue-600" : "border-slate-300"
                                                }`}
                                            >
                                                {form.planTrip === opt && <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />}
                                            </span>
                                            <span className="text-sm font-semibold text-slate-900">{opt}</span>
                                            <input
                                                type="radio"
                                                name="planTrip"
                                                className="sr-only"
                                                checked={form.planTrip === opt}
                                                onChange={() => setField("planTrip", opt)}
                                            />
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                            <path d="M4 4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2H4z" />
                                            <path fillRule="evenodd" d="M18 10H2v4a2 2 0 002 2h12a2 2 0 002-2v-4zm-11 3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <h2 className="text-lg font-semibold text-slate-900">Наличие спонсора</h2>
                                    <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600" title="Влияет на список документов">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                                            <path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 001.734 1A1 1 0 0010 7zm-1 4a1 1 0 012 0v4a1 1 0 11-2 0v-4z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {[
                                        { value: true, label: "Да, есть спонсор" },
                                        { value: false, label: "Нет, плачу сам" },
                                    ].map((opt) => (
                                        <label
                                            key={String(opt.value)}
                                            className={`flex cursor-pointer items-center justify-center gap-3 rounded-2xl border p-4 text-center transition ${
                                                form.hasSponsor === opt.value
                                                    ? "border-blue-500 bg-blue-50/40"
                                                    : "border-slate-200 hover:bg-slate-50"
                                            }`}
                                        >
                                            <span
                                                className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                                                    form.hasSponsor === opt.value ? "border-blue-600" : "border-slate-300"
                                                }`}
                                            >
                                                {form.hasSponsor === opt.value && <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />}
                                            </span>
                                            <span className="text-sm font-semibold text-slate-900">{opt.label}</span>
                                            <input
                                                type="radio"
                                                name="hasSponsor"
                                                className="sr-only"
                                                checked={form.hasSponsor === opt.value}
                                                onChange={() => setField("hasSponsor", opt.value)}
                                            />
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="mb-2 flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 002 0V7zm-1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <h2 className="text-lg font-semibold text-slate-900">Визовая история</h2>
                                </div>
                                <p className="mb-4 text-sm text-slate-600">Были ли у вас Шенгенские визы за последние 5 лет?</p>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {[
                                        { value: true, label: "Да" },
                                        { value: false, label: "Нет" },
                                    ].map((opt) => (
                                        <label
                                            key={String(opt.value)}
                                            className={`flex cursor-pointer items-center justify-center gap-3 rounded-2xl border p-4 text-center transition ${
                                                form.visaHistory === opt.value
                                                    ? "border-blue-500 bg-blue-50/40"
                                                    : "border-slate-200 hover:bg-slate-50"
                                            }`}
                                        >
                                            <span
                                                className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                                                    form.visaHistory === opt.value ? "border-blue-600" : "border-slate-300"
                                                }`}
                                            >
                                                {form.visaHistory === opt.value && <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />}
                                            </span>
                                            <span className="text-sm font-semibold text-slate-900">{opt.label}</span>
                                            <input
                                                type="radio"
                                                name="visaHistory"
                                                className="sr-only"
                                                checked={form.visaHistory === opt.value}
                                                onChange={() => setField("visaHistory", opt.value)}
                                            />
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="button"
                                    onClick={() => nav(`/new-trip/${tripId}/visa`)}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:w-auto"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.707 4.293a1 1 0 010 1.414L5.414 8H13a1 1 0 110 2H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Назад
                                </button>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:w-auto"
                                >
                                    Сформировать чек-лист
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <SmallFooter />
            </div>
        </div>
    );
}

export default TripSituation;