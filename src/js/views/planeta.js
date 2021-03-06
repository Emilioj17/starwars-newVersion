import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/planeta.css";

let listaImagenes = [
	"https://www.jedipedia.net/w/images/thumb/d/d7/Tatoooineause1ig.jpg/250px-Tatoooineause1ig.jpg",
	"https://www.jedipedia.net/w/images/thumb/1/1e/Alderaan_Weltraum-Ansicht.jpg/250px-Alderaan_Weltraum-Ansicht.jpg",
	"https://www.jedipedia.net/w/images/thumb/d/d3/Yavin_4.JPG/250px-Yavin_4.JPG",
	"https://www.jedipedia.net/w/images/thumb/d/d1/Hoth.jpg/250px-Hoth.jpg",
	"https://www.jedipedia.net/w/images/thumb/1/1c/Dagobah.jpg/250px-Dagobah.jpg",
	"https://www.jedipedia.net/w/images/thumb/1/1a/Bespin2.png/250px-Bespin2.png",
	"https://www.jedipedia.net/w/images/thumb/9/96/Endor-DB.png/250px-Endor-DB.png",
	"https://www.jedipedia.net/w/images/thumb/b/b3/Naboo_TCW.jpg/250px-Naboo_TCW.jpg",
	"https://www.jedipedia.net/w/images/thumb/e/ea/Coruscant_Ep01.jpg/250px-Coruscant_Ep01.jpg",
	"https://www.jedipedia.net/w/images/thumb/a/a9/Eaw_Kamino.jpg/250px-Eaw_Kamino.jpg"
];

export const Planeta = (props) => {
	const [personajes, setPersonajes] = useState({
		nombre: "",
		diametro: "",
		poblacion: "",
		terreno: "",
		descripcion: "",
		clima: ""
	});
	const [charging, setCharging] = useState(true)
	const new_id = useParams();

	useEffect(() => {
		// //Get Data
		fetch("https://www.swapi.tech/api/planets/" + new_id.new_id)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setPersonajes({
					nombre: data.result.properties.name,
					diametro: data.result.properties.diameter,
					poblacion: data.result.properties.population,
					terreno: data.result.properties.terrain,
					descripcion: data.result.description,
					clima: data.result.properties.climate
				});
				setCharging(false);
			})
			.catch(err => (console.error(err)));
	}, []);

	return (
		<>
			<div className="d-flex justify-content-center pt-2">
				<div class="spinner-border text-warning" role="status" style={charging ? { display: "" } : { display: "none" }}>
					<span class="sr-only"></span>
				</div>
			</div>
			<div className="centralP container">
				<div className="izquierdaP pt-2">{personajes.nombre}</div>
				<div className="derecha card my-3 mx-0 px-0 py-2">
					<img
						className="card-img-top rounded imgp"
						src={listaImagenes[new_id.new_id - 1]}
						alt="Card cap"
					/>
					<div className="card-body container">
						<p className="card-text">
							{" "}
							Descripci??n: {personajes.descripcion}. Diametro: {personajes.diametro} Kg. Terreno:{" "}
							{personajes.terreno} cm. Poblaci??n: {personajes.poblacion}.
						</p>
						<p className="card-text">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat fugit laudantium beatae
							magni temporibus unde laboriosam tempore, quasi hic harum voluptatem, quae in quod, est nulla
							dolorum et sapiente.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
