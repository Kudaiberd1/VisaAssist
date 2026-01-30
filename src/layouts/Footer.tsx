import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800">
            <div className="mx-auto max-w-7xl px-4 pt-15 pb-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <a href="/" className="flex items-center gap-3">
                            <img
                                src={logo}
                                className="h-[60px] w-[60px] rounded-lg object-contain"
                                alt="VisaAssist"
                            />
                            <span className="text-base font-semibold tracking-tight text-slate-900 ps-[55px] absolute">
                                VisaAssist
                            </span>
                        </a>
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
                                <li><a href="#" className="text-gray-500 hover:text-blue-700">Проверка анкеты</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-blue-700">Чек-лист</a></li>
                                <li><a href="/premium" className="text-gray-500 hover:text-blue-700">Купить премиум</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold">Компания</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><a href="/#about" className="text-gray-500 hover:text-blue-700">О нас</a></li>
                                <li><a href="/#contacts" className="text-gray-500 hover:text-blue-700">Контакты</a></li>
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