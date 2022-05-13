import Recipe from "../../../components/Recipe/Recipe"

export default function Brigadeiro(){
    return (
        <div>
            <Recipe
                name="Brigadeiro"
                picture="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.guiadasemana.com.br%2FcontentFiles%2Fsystem%2Fpictures%2F2016%2F3%2F156324%2Foriginal%2Fbrigadeiro-4.jpg&f=1&nofb=1v"
                time="25 minutos"
                serving="30 porções"
            >
                
                <h2>Ingredientes</h2>

                <ul>
                    <li>1 caixa de leite condensado</li>
                    <li>1 colher (sopa) de margarina sem sal</li>
                    <li>7 colheres (sopa) de achocolatado</li>
                    <li>chocolate granulado</li>
                </ul>

                <h2>Modo de Preparo</h2>
                <ol>
                    <li>Em uma panela funda, acrescente o leite condensado, a margarina e o achocolatado (ou 4 colheres de sopa de chocolate em pó).</li>
                    <li>Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.</li>
                    <li>Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.</li>
                </ol>

            </Recipe>
        </div>
    )
}