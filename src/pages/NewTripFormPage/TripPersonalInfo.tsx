import Header from "../../layouts/Header.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { getTripById, updateTripData } from "../../mockData";
import SmallFooter from "../../layouts/SmallFooter.tsx";

const TripPersonalInfo = () => {

    const { id } = useParams<{ id: string }>();

    const nav = useNavigate();

    const tripId = Number(id);
    const trip = tripId ? getTripById(tripId) : undefined;

    const [form, setForm] = useState({
      secondName: trip?.tripData?.personalInfo.secondName ?? "",
      firstName: trip?.tripData?.personalInfo.firstName ?? "",
      dateOfBirth: trip?.tripData?.personalInfo.dateOfBirth ?? "",
      citizenship: trip?.tripData?.personalInfo.citizenship ?? "",
      passportNumber: trip?.tripData?.personalInfo.passportNumber ?? "",
      passportIssueDate: trip?.tripData?.personalInfo.passportIssueDate ?? "",
      passportExpiryDate: trip?.tripData?.personalInfo.passportExpiryDate ?? "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!tripId) return;

      updateTripData(tripId, "personalInfo", {
        secondName: form.secondName,
        firstName: form.firstName,
        dateOfBirth: form.dateOfBirth,
        citizenship: form.citizenship,
        passportNumber: form.passportNumber,
        passportIssueDate: form.passportIssueDate,
        passportExpiryDate: form.passportExpiryDate,
      });

      nav(`/new-trip/${tripId}/visa`);
    };

    return (
        <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full flex-col">
                <Header />

                <div className="bg-[rgb(246,246,248)] py-6 sm:py-8">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm mb-6 sm:mb-8 border border-slate-100">
                            <div className="flex justify-between">
                                <p className="font-semibold text-gray-800">Заполнение профиля</p>
                                <p className="font-semibold text-gray-800">{trip?.progress ?? 0}%</p>
                            </div>

                            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                                <div className="h-2 rounded-full bg-blue-600" style={{ width: `${trip?.progress ?? 0}%` }}></div>
                            </div>

                            <div className="mt-3 flex items-center justify-between">
                                <p className="text-sm text-gray-500">Шаг 1 из 3: Паспортные данные</p>
                            </div>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Паспорт и личные данные</h1>
                        <p className="text-slate-600 mb-6">Пожалуйста, вводите данные в точном соответствии с вашим заграничным паспортом (латиницей).</p>

                        <form className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-slate-100" onSubmit={onSubmit}>
                            <div className="mb-8">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <FaUser className="h-4 w-4" />
                                    </span>
                                    <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Личная информация</h2>
                                </div>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-slate-600">Фамилия (Latin)</label>
                                        <input
                                          type="text"
                                          id="lastName"
                                          name="secondName"
                                          value={form.secondName}
                                          onChange={onChange}
                                          placeholder="IVANOV"
                                          className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-slate-600">Имя (Latin)</label>
                                        <input
                                          type="text"
                                          id="firstName"
                                          name="firstName"
                                          value={form.firstName}
                                          onChange={onChange}
                                          placeholder="IVAN"
                                          className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="dob" className="block text-sm font-semibold text-slate-600">Дата рождения</label>
                                        <input
                                          type="date"
                                          id="dob"
                                          name="dateOfBirth"
                                          value={form.dateOfBirth}
                                          onChange={onChange}
                                          className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="citizenship" className="block text-sm font-semibold text-slate-600">Гражданство</label>
                                        <select
                                          id="citizenship"
                                          name="citizenship"
                                          value={form.citizenship}
                                          onChange={onChange}
                                          className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        >
                                            <option>Российская Федерация</option>
                                            <option>Другое</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3.5 2A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-13zM12 11.5a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5zm0-4a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5z" />
                                        </svg>
                                    </span>
                                    <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Данные заграничного паспорта</h2>
                                </div>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-6">
                                    <div>
                                        <label htmlFor="passportNumber" className="block text-sm font-semibold text-slate-600">Номер паспорта</label>
                                        <input
                                          type="text"
                                          id="passportNumber"
                                          name="passportNumber"
                                          value={form.passportNumber}
                                          onChange={onChange}
                                          placeholder="12 3456789"
                                          className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="issueDate" className="block text-sm font-semibold text-slate-600">Дата выдачи</label>
                                            <input
                                              type="date"
                                              id="issueDate"
                                              name="passportIssueDate"
                                              value={form.passportIssueDate}
                                              onChange={onChange}
                                              className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="expiryDate" className="block text-sm font-semibold text-slate-600">Срок действия (Expiry Date)</label>
                                            <input
                                              type="date"
                                              id="expiryDate"
                                              name="passportExpiryDate"
                                              value={form.passportExpiryDate}
                                              onChange={onChange}
                                              className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                <p className="text-sm text-slate-700">
                                    Ваш паспорт должен быть действителен не менее 3-х месяцев после предполагаемой даты выезда из Шенгенской зоны и выдан в течение последних 10 лет.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="button"
                                    onClick={() => nav("/dashboard")}
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
                        </form>

                    </div>

                </div>
                <SmallFooter />
            </div>
        </div>
    )
}

export default TripPersonalInfo;