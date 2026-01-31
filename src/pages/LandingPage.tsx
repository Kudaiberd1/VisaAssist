import Header from '../layouts/Header.tsx';
import Footer from '../layouts/Footer.tsx';
import backgroundImage from "../assets/background.png"
import list_icon from "../assets/icons/list_icon.svg";
import file_icon from "../assets/icons/file_icon.svg";
import folder_icon from "../assets/icons/folder_icon.svg";
import check_icon from "../assets/icons/check_icon.svg";
import lock_icon from "../assets/icons/lock_icon.svg";
import {useNavigate} from "react-router-dom";

const LandingPage = () => {

    const nav = useNavigate();

    return (
        <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full flex-col">
                <Header />

                <main className="flex-grow bg-[rgb(246,246,248)]">
                    <div className="relative mt-6 mb-10 h-[520px] sm:h-[560px] rounded-2xl shadow-md mx-4 sm:mx-6 lg:mx-[50px]" id={"about"}>
                        <img
                            src={backgroundImage}
                            alt="Background"
                            className="absolute inset-0 h-full w-full rounded-xl object-cover brightness-45"
                        />

                        <div className="absolute z-10 left-0 right-0 mx-6 sm:mx-10 mt-10 sm:mt-12 text-white max-w-[645px]">
                            <div className="mb-1 flex">
                                <div
                                    className="flex items-center gap-2 rounded-lg border border-blue-400/30 bg-blue-900/40 px-3 py-1 backdrop-blur-sm">
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5 text-blue-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1.5c-4.142 0-7.5 3.234-7.5 7.225 0 4.93 6.15 9.29 7.15 9.97a.6.6 0 00.7 0c1-.68 7.15-5.04 7.15-9.97C17.5 4.734 14.142 1.5 10 1.5zm0 10.25a3 3 0 110-6 3 3 0 010 6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>


                                    <p className="text-blue-500">
                                        Доступно в Алматы
                                    </p>
                                </div>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold">
                                VisaAssist:
                            </h1>
                            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold mb-4 leading-tight">
                                <span>чек-листы</span> + анкета + PDF-пакет
                            </h1>

                            <h2 className={"text-base sm:text-lg lg:text-[22px] mt-0 mb-5 text-white/90"}>
                                Получите полный комплект документов для визы в Almaty за 15 минут. Мы автоматизировали процесс чтобы не допустили ни одной ошибки.
                            </h2>

                            <div className={"flex flex-col sm:flex-row gap-3"}>
                                <button className="bg-blue-500 px-6 py-3 rounded-xl w-full sm:max-w-[220px] transition-transform duration-200 hover:scale-[1.02]" onClick={() => nav("/profile")}>
                                    Начать бесплатно
                                </button>
                                <button
                                    className="w-full sm:max-w-[260px] rounded-xl px-6 py-3 text-white backdrop-blur-sm border border-white/30 hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
                                    onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                                >
                                    Посмотреть как работает
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 mx-4 sm:mx-6 lg:mx-[50px]"}>
                        <div className={"shadow-md px-5 py-4 rounded-xl w-full bg-white border border-slate-100 hover:shadow-lg transition-shadow"}>
                            <p className={"font-semibold"}> ОДОБРЕННЫХ ВИЗ </p>
                            <div className={"flex"}>
                                <h2 className={"text-[25px] font-semibold"}> 99% </h2>
                                <p className="text-[#07883b] text-sm font-bold mb-1 flex items-end ms-2">
                                    <span className="material-symbols-outlined text-sm">trending_up</span> +5%
                                </p>
                            </div>
                        </div>
                        <div className={"shadow-md px-5 py-4 rounded-xl w-full bg-white border border-slate-100 hover:shadow-lg transition-shadow"}>
                            <p className={"font-semibold"}> МИНУТ НА АНКЕТУ </p>
                            <div className={"flex"}>
                                <h2 className={"text-[25px] font-semibold"}> 15 </h2>
                                <p className="text-[#07883b] text-sm font-bold mb-1 flex items-end ms-2">
                                    <span className="material-symbols-outlined text-sm"> speed </span> -10%
                                </p>
                            </div>
                        </div>
                        <div className={"shadow-md px-5 py-4 rounded-xl w-full bg-white border border-slate-100 hover:shadow-lg transition-shadow"}>
                            <p className={"font-semibold"}> АКТУАЛЬНОСТЬ </p>
                            <div className={"flex"}>
                                <h2 className={"text-[25px] font-semibold"}> 2024 </h2>
                                <p className="ms-2 flex items-end mb-1 rounded-md px-2 text-[10px] font-bold text-green-700">
                                    ОБНОВЛЕНО
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={"items-center justify-center mb-10 mx-4 sm:mx-6 lg:mx-[50px] text-center"}>
                        <h1 className={"text-[36px] font-semibold"}> Почему выбирают нас </h1>
                        <p className={"max-w-xl text-wrap mx-auto"}> Мы автоматизировали сложную бюрократию, чтобы сделать процесс получения визы максимально прозрачным и надежным. </p>
                    </div>

                    <div className="mx-4 sm:mx-6 lg:mx-[50px] mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow">
                            <div className="mb-2 inline-block rounded-lg p-3">
                                <img src={list_icon} alt="List Icon"/>

                            </div>
                            <h3 className="mb-2 text-lg font-semibold">Персональный список</h3>
                            <p className="text-gray-600">
                                Получите индивидуальный перечень документов, сформированный на основе вашей занятости и истории поездок.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow">
                            <div className="mb-2 inline-block rounded-lg p-3">
                                <img src={file_icon} alt="File Icon"/>

                            </div>
                            <h3 className="mb-2 text-lg font-semibold">Анкета без ошибок</h3>
                            <p className="text-gray-600">
                                Наша система мгновенно проверяет введённые данные и блокирует типичные ошибки, которые приводят к отказу.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow">
                            <div className="mb-2 inline-block rounded-lg bg-blue-100 p-3">
                                <img src={folder_icon} alt="Folder Icon"/>

                            </div>
                            <h3 className="mb-2 text-lg font-semibold">Готовый пакет PDF</h3>
                            <p className="text-gray-600">
                                Скачайте профессионально оформленную анкету и дополнительные формы, полностью готовые к подаче в консульство.
                            </p>
                        </div>
                    </div>

                    <section id="how-it-works" className="mx-4 sm:mx-6 lg:mx-[50px] mb-20">
                        <div className="mb-10 text-center">
                            <h2 className="text-[36px] font-semibold">Как это работает</h2>
                            <p className="mx-auto mt-2 max-w-2xl text-gray-600">
                                3 простых шага — и вы получите персональный чек‑лист, проверенную анкету и готовый PDF‑пакет для подачи.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="rounded-2xl bg-white p-7 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xltext-blue-600">
                                        <img src={file_icon} />
                                    </span>
                                    <span className="text-sm font-semibold text-blue-600">Шаг 1</span>
                                </div>
                                <h3 className="text-lg font-semibold">Заполните анкету</h3>
                                <p className="mt-2 text-gray-600">
                                    Ответьте на вопросы о поездке и вашей ситуации. Мы сохраняем прогресс и подсказываем, что осталось.
                                </p>
                                <div className="mt-5 rounded-xl bg-[rgb(246,246,248)] p-4">
                                    <p className="text-sm text-gray-600">
                                        Прогресс считается честно: чем больше заполнено — тем выше %.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white p-7 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 001.734 1A1 1 0 0010 7zm-1 4a1 1 0 012 0v4a1 1 0 11-2 0v-4z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-sm font-semibold text-blue-600">Шаг 2</span>
                                </div>
                                <h3 className="text-lg font-semibold">Проверьте превью</h3>
                                <p className="mt-2 text-gray-600">
                                    На странице превью вы увидите, какие поля заполнены, а какие нужно исправить. Никаких сюрпризов перед подачей.
                                </p>
                                <ul className="mt-5 space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-0.5 h-5 w-5 rounded-md bg-rose-50 border border-rose-200" />
                                        <span>Покажем ошибки и недостающие данные</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-0.5 h-5 w-5 rounded-md bg-emerald-50 border border-emerald-200" />
                                        <span>Можно быстро перейти к нужному шагу</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-2xl bg-white p-7 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414l2.793 2.793 6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-sm font-semibold text-blue-600">Шаг 3</span>
                                </div>
                                <h3 className="text-lg font-semibold">Получите чек‑лист и PDF</h3>
                                <p className="mt-2 text-gray-600">
                                    Мы сформируем персональный список документов (как todo‑лист) и подготовим PDF‑пакет — удобно для печати и подачи.
                                </p>

                                <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold text-slate-900">Чек‑лист</p>
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Готово</span>
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-600">Загранпаспорт</span>
                                            <span className="h-5 w-5 rounded-full bg-emerald-50 border border-emerald-200" />
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-600">Страховка</span>
                                            <span className="h-5 w-5 rounded-full bg-emerald-50 border border-emerald-200" />
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-600">Справка с работы</span>
                                            <span className="h-5 w-5 rounded-full bg-slate-50 border border-slate-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="mx-4 sm:mx-6 lg:mx-[50px] mb-20 rounded-3xl bg-blue-600 p-8 sm:p-12 lg:p-16 text-center text-white shadow-lg">
                        <h1 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold">
                            Готовы получить визу без лишних хлопот
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-sm sm:text-base lg:text-lg text-blue-100">
                            Начните заполнение анкеты прямо сейчас и получите персональный чек-лист совершенно бесплатно.
                        </p>
                        <button className="mb-8 rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-transform duration-300 hover:scale-105 shadow-md" onClick={() => nav("/profile")}>
                            Начать бесплатно
                        </button>
                        <div className="flex items-center justify-center space-x-6 text-sm text-blue-200">
                            <div className="flex items-center gap-2">
                                <img src={lock_icon} />

                                <span>Защищенное соединение</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={check_icon} />

                                <span>Поддержка 24/7</span>
                            </div>
                        </div>
                    </div>

                    <section id="contacts" className="mx-4 sm:mx-6 lg:mx-[50px] mb-20" itemID={"contacts"}>
                        <div className="mb-10 text-center">
                            <h2 className="text-[36px] font-semibold">Свяжитесь с нами</h2>
                            <p className="mx-auto mt-2 max-w-2xl text-gray-600">
                                Есть вопросы по документам или анкете? Напишите нам — поможем быстро и без ошибок.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                            <div className="rounded-2xl bg-white p-10 shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold mb-6">Контакты</h3>

                                <div className="space-y-5 text-gray-700">
                                    <div className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M1.5 8.67v10.58A2.25 2.25 0 003.75 21.5h16.5A2.25 2.25 0 0022.5 19.25V8.67l-9.58 6.388a2.25 2.25 0 01-2.5 0L1.5 8.67z" />
                                                <path d="M22.5 6.75V6.5A2.25 2.25 0 0020.25 4.25H3.75A2.25 2.25 0 001.5 6.5v.25l10.08 6.72a.75.75 0 00.84 0L22.5 6.75z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <a href="mailto:support@schengen-safe.kz" className="font-medium hover:underline">
                                                support@schengen-safe.kz
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M11.54 22.351l.01-.007.03-.02a16.64 16.64 0 002.02-1.58c1.77-1.56 4.4-4.3 5.72-7.2.78-1.71 1.1-3.43.64-5.05C18.93 4.684 15.86 2.5 12 2.5S5.07 4.684 3.99 8.069c-.46 1.62-.14 3.34.64 5.05 1.32 2.9 3.95 5.64 5.72 7.2a16.65 16.65 0 002.02 1.58l.03.02.01.007a.75.75 0 00.86 0zM12 13.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <div>
                                            <p className="text-sm text-gray-500">Адрес</p>
                                            <p className="font-medium">г. Алматы, пр. Достык 105</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M12 1.5A10.5 10.5 0 1022.5 12 10.512 10.512 0 0012 1.5zm.75 5.25a.75.75 0 00-1.5 0v6c0 .2.08.39.22.53l3.75 3.75a.75.75 0 101.06-1.06l-3.53-3.53V6.75z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <div>
                                            <p className="text-sm text-gray-500">Время работы</p>
                                            <p className="font-medium">Пн–Пт: 09:00–19:00</p>
                                            <p className="font-medium">Сб: 10:00–15:00</p>
                                            <p className="text-sm text-gray-500 mt-1">Поддержка онлайн: 24/7</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-xl border border-gray-100 bg-[rgb(246,246,248)] p-5">
                                    <p className="text-sm text-gray-600">
                                        Хотите, чтобы мы ответили быстрее? Укажите тему обращения и ваш email — мы свяжемся с вами.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white p-10 shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold mb-2">Оставьте заявку</h3>
                                <p className="text-gray-600 mb-6">Мы ответим в ближайшее время.</p>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">Имя</label>
                                        <input
                                            type="text"
                                            placeholder="Ваше имя"
                                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">Сообщение</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Коротко опишите вопрос"
                                            className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                                    >
                                        Отправить сообщение
                                    </button>

                                    <p className="text-xs text-gray-500">
                                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </section>

                </main>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;