export default function NavbarComponent()
{
    return(
        <nav className="bg-transparent fixed top-0 left-0 w-full z-10 shadow-lg backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Nome do App */}
                    <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 text-white font-semibold text-4xl">
                            <span className="text-purple-900">Card</span><span className="text-white">ify</span>
                        </div>
                    </div>

                    {/* Links de Navegação Não Autenticado */}
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cadastrar-se</a>
                            <a href="#" className="text-white hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
                        </div>
                    </div>

                    {/* Links de Navegação Autenticado */}
                    {/* <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                            <a href="#" className="text-white hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tarefas</a>
                            <a href="#" className="text-white hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendário</a>
                            <a href="#" className="text-white hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Configurações</a>
                        </div>
                    </div> */}

                    {/* Ícone de Menu (para dispositivos móveis) */}
                    <div className="sm:hidden">
                        <button className="text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none">
                            {/* Ícone de menu hamburguer */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}