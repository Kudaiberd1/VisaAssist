
const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#e7ebf3] bg-white">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 lg:px-10">
                {/* Logo Section - Connected to Home */}
                <a href="/public" className="flex items-center gap-3 text-[#0d121b] hover:opacity-80 transition-opacity">
                    <div className="flex size-8 items-center justify-center text-blue-600">
                        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                            <path d="M12 2l7 4v6c0 5-3.1 9.7-7 10-3.9-.3-7-5-7-10V6l7-4zm-1 13l6-6-1.4-1.4L11 12.2 8.4 9.6 7 11l4 4z" />
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.01em]">Шенген без ошибок</h2>
                </a>

                {/* Navigation - Connecting the generic parts to your specific folders */}
                <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
                    <nav className="flex items-center gap-8">
                        {/* Links to sections based on your folder structure */}
                        <a className="text-[#0d121b] text-sm font-semibold leading-normal hover:text-blue-600 transition-colors" href="/dashboard">
                            Мои поездки
                        </a>
                        <a className="text-[#0d121b] text-sm font-semibold leading-normal hover:text-blue-600 transition-colors" href="/checklist">
                            Чек-лист
                        </a>
                         <a className="text-[#0d121b] text-sm font-semibold leading-normal hover:text-blue-600 transition-colors" href="/profile">
                            Профиль
                        </a>
                    </nav>
                </div>

                {/* Action Buttons */}
                <div className="ml-8 flex items-center gap-3">
                    <a
                        href="/login"
                        className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl bg-transparent px-4 text-sm font-bold text-[#0d121b] hover:bg-gray-100 transition-colors"
                    >
                        Войти
                    </a>
                    <a
                        href="/onboarding"
                        className="inline-flex h-10 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
                    >
                        Оформить визу
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;