import React from "react";


import NavBar from "./navbar";
import BigCard from "./bigcard";
//create your first component
const Home = () => {
	return (
	<>
		<NavBar />
		<BigCard
		titulo='A Warm Welcome!'
		texto='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum corporis cumque autem. Dolorem provident dolor, deleniti, iusto nulla ipsam veritatis quis vero neque nobis soluta, suscipit tempora ea sint at!'
		boton='Call to action!'/>
	</>
	

	);
};

export default Home;
