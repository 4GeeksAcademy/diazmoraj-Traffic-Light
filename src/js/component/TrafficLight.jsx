import React, {useState} from "react";

const TrafficLight = () => {

    const [selected, setSelected] = useState("red")
    const changeColor =(color) =>{
        setSelected(color)
    }

	return (
		<div className="text-center">
			<div className="p-box bg-dark">

            </div>
            <div className="box-light bg-dark">
                <div 
                    className={`red ${selected == "red" ? "light-on" : ""} `}
                    onClick={()=>changeColor("red")}
                ></div>
                <div 
                    className={`yellow ${selected == "yellow" ? "light-on" : ""} `}
                    onClick={()=>changeColor("yellow")}
                ></div>
                <div 
                    className={`green ${selected == "green" ? "light-on" : ""} `}
                    onClick={()=>changeColor("green")}
                ></div>
            </div>
		</div>
	);
};

export default TrafficLight;