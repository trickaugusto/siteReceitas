import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';

export default function Index(){
  return (
    <div>
     
      <Header title="TreinaCook - Receitas" />

      <Cards 
        link="/receitas/bolos/bolo-de-cenoura" 
        srcImg="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.clubedaanamariabraga.com.br%2Fwp-content%2Fuploads%2F2019%2F07%2Freceitas-bolo-de-cenoura.jpg&f=1&nofb=1" 
        category="Bolos" 
        name="Bolo de Cenoura"
      />

      <Cards 
        link="/receitas/doces/brigadeiro" 
        srcImg="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.guiadasemana.com.br%2FcontentFiles%2Fsystem%2Fpictures%2F2016%2F3%2F156324%2Foriginal%2Fbrigadeiro-4.jpg&f=1&nofb=1" 
        category="Doces" 
        name="Brigadeiro"
      />

      <Cards 
        link="/receitas/lanches/bolinho-de-chuva" 
        srcImg="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FfkEEpe_wirA%2Fmaxresdefault.jpg&f=1&nofb=1" 
        category="Lanches" 
        name="Bolinho de chuva"
      />

      <Cards 
        link="/receitas/molhos/molho-branco" 
        srcImg="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freceitasnotadez.com.br%2Fwp-content%2Fuploads%2F2020%2F06%2Fmolho-branco.jpg&f=1&nofb=1" 
        category="MOlhos" 
        name="Molho branco"
      />
      
      <Footer />

    </div>
  )
}