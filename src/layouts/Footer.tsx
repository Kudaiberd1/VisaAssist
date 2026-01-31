import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {useGoToSection} from "../services/goToSection.ts";

const Footer = () => {

    const nav = useNavigate();

    const goToSection = useGoToSection();

    return (
        <footer className="bg-white text-gray-800">
            <div className="mx-auto max-w-7xl px-4 pt-15 pb-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <p onClick={() => nav("/")} className="flex items-center gap-3 cursor-pointer">
                            <img
                                src={logo}
                                className="h-[60px] w-[60px] rounded-lg object-contain"
                                alt="VisaAssist"
                            />
                            <span className="text-base font-semibold tracking-tight text-slate-900 ps-[55px] absolute">
                                VisaAssist
                            </span>
                        </p>
                        <p className="text-sm text-gray-500">
                            Автоматизированный сервис подготовки документов для Шингенской визы.
                            <br />
                            Работаем официально в Казахстане
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3">
                        <div>
                            <p className="font-bold">Сервис</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><p onClick={() => nav("/dashboard")} className="text-gray-500 cursor-pointer hover:text-blue-700">Проверка анкеты</p></li>
                                <li><p onClick={() => nav("/profile")} className="text-gray-500 cursor-pointer hover:text-blue-700">Чек-лист</p></li>
                                <li><p onClick={() => nav("/premium")} className="text-gray-500 cursor-pointer hover:text-blue-700">Купить премиум</p></li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold">Компания</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li>
                                    <p
                                        onClick={() => goToSection("about")}
                                        className="text-gray-500 cursor-pointer hover:text-blue-700"
                                    >
                                        О нас
                                    </p>
                                </li>
                                <li>
                                    <p
                                        onClick={() => goToSection("contacts")}
                                        className="text-gray-500 cursor-pointer hover:text-blue-700"
                                    >
                                        Контакты
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold">Контакты</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><a href="mailto:support@schengen-safe.kz" className="text-gray-500 hover:text-blue-700">support@schengen-safe.kz</a></li>
                                <li className="text-gray-500">Алматы пр. Достык 105</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 text-center">
                    <p className="text-sm text-gray-500">
                        © 2024 VisaAssist. Все права защищены
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;