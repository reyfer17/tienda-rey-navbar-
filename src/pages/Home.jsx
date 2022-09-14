import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            {/*<ItemListContainer greeting= "Bienvenidos a la tienda de segunda mano de zona sur,
             lleve a precio de ganga hasta quedarse sin pesos en el bolsillo." />*/}
            <ItemDetailContainer />
        </>
    );
}

export default Home;