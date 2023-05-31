import React from "react";
import "./homepage.css";

import tripeImage from "./assets/tripe.webp";
import droneImage from "./assets/drone.jpg";
import bipeImage from "./assets/bipe.jpg";
import bastaoImage from "./assets/bastao.jpg";

const HomePage = () => {
    return (
        <div>
            <div className="content-left">
                <div className="wrapper">
                    <nav>
                        <div className="items">
                            <span className="item active" data-name="todos">Todos</span>
                            <span className="item" data-name="tripé">Tripé</span>
                            <span className="item" data-name="mira">Mira</span>
                            <span className="item" data-name="bipé">Bipé</span>
                            <span className="item" data-name="bastão">Bastão</span>
                            <span className="item" data-name="teodólito">Teodólito</span>
                            <span className="item" data-name="receptor">Receptores</span>
                            <span className="item" data-name="veículo">Veículos</span>
                            <span className="item" data-name="esteroscópico">Esteroscópico</span>
                            <span className="item" data-name="carta">Cartas</span>
                        </div>
                    </nav>
                </div>
        
                <div className="gallery">
                    <div className="image" data-name="tripé"><span><img src={tripeImage} alt=""/></span></div>
                    <div className="image" data-name="veículo"><span><img src={droneImage} alt=""/></span></div>
                    <div className="image" data-name="veículo"><span><img src={droneImage} alt=""/></span></div>
                    <div className="image" data-name="veículo"><span><img src={droneImage} alt=""/></span></div>
                    <div className="image" data-name="bipé"><span><img src={bipeImage} alt=""/></span></div>
                    <div className="image" data-name="bastão"><span><img src={bastaoImage} alt="" /></span></div>
                    <div className="image" data-name="teodólito"><span><img src={bipeImage} alt=""/></span></div>
                    <div className="image" data-name="esteroscópico"><span><img src={tripeImage} alt="" /></span></div>
                </div>

                <div className="preview-box">
                <div className="details">
                    <span className="title">Categoria: <p></p></span>
                    <span className="icon">&#10006;</span>
                </div>
                <div className="image-box"><img src="" alt=""/></div>
            </div>
            </div>
        </div>
    );
};

export default HomePage;
