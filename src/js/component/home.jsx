import React from "react";

//include images into your bundle
import Lights from "./lights";

//create your first component
const Home = () => {
	return (
		<div className="Text">
			<Lights />
		</div>
	);
};

export default Home;
