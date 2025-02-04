import { Box } from "@mui/material";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

export default function LandingPage()
{
    return(
        <Box className="w-screen h-screen" sx={{ backgroundImage: "linear-gradient(45deg, #8587f3 30%, #fd84ae 100%)" }}>
            <NavbarComponent />

            {/* Conteúdo da Landing Page */}
            <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl font-bold mb-6">Bem-vindo ao Cardify!</h1>
                <p className="text-lg mb-6">Transforme sua produtividade com a organização visual do método Kanban. Gerencie tarefas de forma simples e eficaz.</p>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center bg-indigo-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Visualização Clara</h3>
                            <p className="text-gray-700">Acompanhe suas tarefas de forma simples e clara em diferentes fases do processo, como "A Fazer", "Em Andamento" e "Concluído".</p>
                        </div>
                    
                        <div className="flex flex-col items-center bg-indigo-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Organização Flexível</h3>
                            <p className="text-gray-700">Ajuste facilmente as tarefas, movendo-as entre as colunas conforme o progresso. O Kanban permite que você adapte o fluxo de trabalho conforme necessário.</p>
                        </div>
                        
                        <div className="flex flex-col items-center bg-indigo-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Colaboração em Equipe</h3>
                            <p className="text-gray-700">Compartilhe seu quadro Kanban com colegas e gerencie projetos colaborativamente, aumentando a produtividade e a comunicação da equipe.</p>
                        </div>
                    </div>
                </div>

                <div className="py-4">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md shadow-lg">
                        Comece Agora
                    </button>
                </div>
            </div>
        </Box>
    )
}