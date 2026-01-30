
const Footer = () => {
    return (
        <footer className="bg-white text-gray-800">
            <div className="mx-auto max-w-7xl px-4 pt-15 pb-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7 text-blue-600"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.516 2.17a.75.75 0 00-1.032 0L3.696 9.244c-.24.3-.023.756.304.756h1.404v4.5c0 .828.672 1.5 1.5 1.5h8.192c.828 0 1.5-.672 1.5-1.5v-4.5h1.403c.327 0 .544-.456.304-.756L12.516 2.17zM12 11.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"
                                />
                                <path d="M3 13.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
                                <path
                                    fillRule="evenodd"
                                    d="M5.196 18.244l.003-.001a9.97 9.97 0 0113.602 0l.003.001a.75.75 0 01-.98 1.13l-.003-.001a8.47 8.47 0 00-11.642 0l-.003.001a.75.75 0 01-.98-1.13zM12 3.81L4.86 9.75h14.28L12 3.81z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-lg font-bold">Шенген без ошибок</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
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
                                <li><a href="#" className="text-gray-500 hover:text-blue-700">Бронь отелей</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold">Компания</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><a href="/" className="text-gray-500 hover:text-blue-700">О нас</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-blue-700">Контакты</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-blue-700">Публичная оферта</a></li>
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
                        © 2024 Шенген без ошибок. Все права защищены
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;