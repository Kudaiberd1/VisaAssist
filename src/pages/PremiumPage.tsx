import React, { useMemo, useState } from "react";
import Footer from "../layouts/Footer.tsx";
import Header from "../layouts/Header.tsx";

type PlanKey = "monthly" | "yearly";

const PremiumPage: React.FC = () => {
    const [billing, setBilling] = useState<PlanKey>("monthly");

    const price = useMemo(() => {
        if (billing === "monthly") return { main: "9 990 ₸", sub: "в месяц" };
        return { main: "99 900 ₸", sub: "в год (экономия ~17%)" };
    }, [billing]);

    return (
        <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full flex-col">
                <Header />

                {/* Hero */}
                <div className={"bg-[rgb(246,246,248)]"}>
                    <div className=" mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                            <div className={" justify-start"}>
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                                    Премиум-доступ
                                </div>

                                <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                                    Оформите премиум и подготовьте документы без стресса
                                </h1>

                                <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-600">
                                    Премиум включает приоритетную проверку анкеты, персональные подсказки и
                                    полный чек-лист документов. Всё в одном месте — понятно и удобно.
                                </p>

                                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                                    <span>Оплата картой</span>
                                    <span>•</span>
                                    <span>Безопасный платеж</span>
                                    <span>•</span>
                                    <span>Можно отменить в любой момент</span>
                                </div>
                            </div>

                            <div className="rounded-3xl border bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Премиум</p>
                                        <p className="text-sm text-gray-500">Лучший выбор для подачи</p>
                                    </div>

                                    <div className="rounded-2xl bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                        Рекомендуем
                                    </div>
                                </div>

                                <div className="mt-5 rounded-2xl bg-gray-50 p-4">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-3xl font-semibold">{price.main}</p>
                                            <p className="text-sm text-gray-500">{price.sub}</p>
                                        </div>

                                        <div className="flex rounded-2xl border bg-white p-1">
                                            <button
                                                onClick={() => setBilling("monthly")}
                                                className={`rounded-xl px-3 py-2 text-xs font-semibold ${
                                                    billing === "monthly"
                                                        ? "bg-blue-600 text-white"
                                                        : "text-gray-600 hover:bg-gray-100"
                                                }`}
                                            >
                                                Месяц
                                            </button>
                                            <button
                                                onClick={() => setBilling("yearly")}
                                                className={`rounded-xl px-3 py-2 text-xs font-semibold ${
                                                    billing === "yearly"
                                                        ? "bg-blue-600 text-white"
                                                        : "text-gray-600 hover:bg-gray-100"
                                                }`}
                                            >
                                                Год
                                            </button>
                                        </div>
                                    </div>

                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        {[
                                            "Проверка анкеты и ошибок",
                                            "Персональные подсказки по документам",
                                            "Чек-лист и шаблоны",
                                            "Приоритетная поддержка",
                                        ].map((t) => (
                                            <li key={t} className="flex items-start gap-2">
                                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="/checkout?plan=premium"
                                        className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                                    >
                                        Перейти к оплате
                                    </a>

                                    <p className="mt-3 text-center text-xs text-gray-500">
                                        Нажимая «Перейти к оплате», вы соглашаетесь с условиями сервиса.
                                    </p>
                                </div>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-2xl border bg-white p-4">
                                        <p className="text-sm font-semibold">Срок проверки</p>
                                        <p className="mt-1 text-sm text-gray-500">в приоритете (быстрее)</p>
                                    </div>
                                    <div className="rounded-2xl border bg-white p-4">
                                        <p className="text-sm font-semibold">Подходит для</p>
                                        <p className="mt-1 text-sm text-gray-500">Шенгенской визы</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="pricing" className="mt-12">
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-semibold tracking-tight">Тарифы</h2>
                                    <p className="mt-2 text-sm text-gray-600">
                                        Выберите удобный вариант. Все функции премиум доступны сразу после оплаты.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-6 lg:grid-cols-3">
                                <div className="rounded-3xl border bg-white p-6 shadow-sm">
                                    <p className="text-sm font-semibold">Базовый</p>
                                    <p className="mt-1 text-sm text-gray-500">Для знакомства</p>
                                    <div className="mt-4">
                                        <p className="text-3xl font-semibold">0 ₸</p>
                                        <p className="text-sm text-gray-500">бесплатно</p>
                                    </div>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        {["Создание поездки", "Базовый список документов", "Статусы и прогресс"].map((t) => (
                                            <li key={t} className="flex items-start gap-2">
                                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-400" />
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="/dashboard"
                                        className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
                                    >
                                        Продолжить бесплатно
                                    </a>
                                </div>

                                <div className="relative rounded-3xl border bg-white p-6 shadow-sm">
                                    <div className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                                        Лучший выбор
                                    </div>
                                    <p className="text-sm font-semibold">Премиум</p>
                                    <p className="mt-1 text-sm text-gray-500">Максимум пользы</p>
                                    <div className="mt-4">
                                        <p className="text-3xl font-semibold">{price.main}</p>
                                        <p className="text-sm text-gray-500">{price.sub}</p>
                                    </div>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        {[
                                            "Проверка анкеты",
                                            "Подсказки и рекомендации",
                                            "Чек-лист + шаблоны",
                                            "Приоритетная поддержка",
                                            "История изменений",
                                        ].map((t) => (
                                            <li key={t} className="flex items-start gap-2">
                                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="/checkout?plan=premium"
                                        className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                                    >
                                        Купить премиум
                                    </a>
                                    <p className="mt-3 text-xs text-gray-500">
                                        Оплата безопасна. Данные карты не храним.
                                    </p>
                                </div>

                                <div className="rounded-3xl border bg-white p-6 shadow-sm">
                                    <p className="text-sm font-semibold">Премиум на 1 год</p>
                                    <p className="mt-1 text-sm text-gray-500">Выгодно для частых поездок</p>

                                    <div className="mt-4">
                                        <p className="text-3xl font-semibold">99 900 ₸</p>
                                        <p className="text-sm text-gray-500">в год (экономия ~17%)</p>
                                    </div>

                                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                        {[
                                            "Все функции премиум",
                                            "1 год доступа без продления каждый месяц",
                                            "Приоритетная поддержка",
                                            "Чек-листы и шаблоны",
                                        ].map((t) => (
                                            <li key={t} className="flex items-start gap-2">
                                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="/checkout?plan=premium&billing=yearly"
                                        className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
                                    >
                                        Оформить на 1 год
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 rounded-3xl bg-blue-600 p-6 text-white shadow-sm">
                            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <h3 className="text-xl font-semibold text-center lg:text-left">Готовы оформить премиум?</h3>
                                    <p className="mt-2 text-sm text-blue-100 text-center lg:text-left">
                                        Получите проверку анкеты, чек-лист и поддержку — всё для уверенной подачи.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                                    <a
                                        href="/checkout?plan=premium"
                                        className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 sm:w-auto"
                                    >
                                        Купить премиум
                                    </a>
                                    <a
                                        href="/dashboard"
                                        className="inline-flex w-full items-center justify-center rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto"
                                    >
                                        Вернуться к поездкам
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="h-10" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default PremiumPage;