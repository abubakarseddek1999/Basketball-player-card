import BasketballPlayerCards from "../../../Components/BasketballPlayerCard/BasketballPlayerCards";

const Home = () => {
    return (
        <div className="p-5 pt-12">
            <p className=" text-4xl md:text-6xl font-bold pt-10  text-center mb-10"> Basketball Players</p>
            <BasketballPlayerCards></BasketballPlayerCards>
        </div>
    );
};

export default Home;