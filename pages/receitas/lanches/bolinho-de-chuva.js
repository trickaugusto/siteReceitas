import Recipe from "../../../components/Recipe/Recipe";

export default function BolinhoDeChuva(){
    return (
        <div>
            <Recipe
                name="Bolinho de Chuva"
                picture="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FfkEEpe_wirA%2Fmaxresdefault.jpg&f=1&nofb=1"
                time="30 minutos"
                serving="8 porções"
            >
                <h2>Ingredientes</h2>

                <ul>
                    <li>2 ovos</li>
                    <li>1 xícara de açúcar</li>
                    <li>1 xícara (chá) de leite</li>
                    <li>2 e 1/2 xícaras de farinha de trigo</li>
                    <li>1 colher (sopa) de fermento em pó</li>
                    <li>3 colheres (sopa) de açúcar para polvilhar</li>
                    <li>1 colher (sopa) de canela para polvilhar</li>
                    <li>1 litro de óleo para fritar</li>
                </ul>

                <h2>Modo de Preparo</h2>
                <ol>
                    <li>Misture todos os ingredientes até obter uma massa cremosa e homogênea.</li>
                    <li>Deixe aquecer uma panela com bastante óleo para que os bolinhos possam boiar.</li>
                    <li>Quando o óleo estiver bem quente (180º C), com uma colher, comece a colocar pequenas quantidades de massa, e frite até que dourem por inteiro.</li>
                    <li>Coloque os bolinhos sobre papel absorvente e depois passe-os no açúcar com canela.</li>
                </ol>


            </Recipe>
        </div>
    )
}