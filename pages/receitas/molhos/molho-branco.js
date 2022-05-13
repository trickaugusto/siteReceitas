import Recipe from "../../../components/Recipe/Recipe";

export default function MolhoBranco(){
    return(
        <div>

            <Recipe
                name="Molho Branco"
                picture="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freceitasnotadez.com.br%2Fwp-content%2Fuploads%2F2020%2F06%2Fmolho-branco.jpg&f=1&nofb=1"
                time="15 minutos"
                serving="4 porções"
            >

                <h2>Ingredientes</h2>

                <ul>
                    <li>2 xícaras de leite frio</li>
                    <li>2 colheres (sopa) de manteiga</li>
                    <li>2 dentes de alho picados</li>
                    <li>1/2 cebola média picada</li>
                    <li>2 colheres (sopa) de farinha de trigo</li>
                    <li>1 tablete de caldo de legumes</li>
                    <li>Sal a gosto</li>
                </ul>

                <h2>Modo de Preparo</h2>
                <ol>
                    <li>Dissolva a farinha de trigo (ou maisena) em 1/2 xícara de leite e reserve.</li>
                    <li>Em uma panela, doure o alho e a cebola na manteiga (ou margarina).</li>
                    <li>Adicione o leite com a farinha, mexa um pouco e acrescente o restante do leite.</li>
                    <li>Após fervura, adicione o caldo de legumes.</li>
                    <li>Mexa, constantemente, até ficar cremoso.4</li>
                </ol>

            </Recipe>

        </div>
    )
}