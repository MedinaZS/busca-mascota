import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_ROUTES, showFormattedDate } from "../../helper/utility";
import { ResultReporte } from "../../helper/types";

interface PropsListaReporte {
	reportes: ResultReporte[];
	currentPage: number;
	totalPages: number;
	handleNextPage: () => void;
	handlePreviousPage: () => void;
	handlePageClick: (page: number) => void;
}

const ListaReportes = (props: PropsListaReporte) => {

	const [lista, setLista] = useState<ResultReporte[]>(props.reportes);

	useEffect(() => {
		setLista(props.reportes);
	}, [props.reportes]);


	return (
		<div>
			{props.reportes && (
				<div className="container-fluid">
					<div className="col-lg-7 mx-auto">
						<ul className="list-group mb-2">
							{props.reportes.map((item: ResultReporte, i: number) => (
								<li className="list-group-item" key={i}>
									<div className="media d-flex">
										<Link to={`/reporte/${item.id}`}>
											<img
												className="align-self-center mr-3 mt-1"
												width="150px"
												height="150px"
												src={`${API_ROUTES.JUST_IP}${item.picture}`}
												alt="report picture"
											/>
										</Link>
										<div className="media-body mx-3">
											<h5 className="mt-0 text-uppercase text-dark mr-2">
												<Link to={`/reporte/${item.id}`}>{item.specie.toUpperCase() == 'OTRO' ? 'ANIMAL' : item.specie.toUpperCase()} {item.report_type.toUpperCase()}</Link>
											</h5>
											<h6 className="mr-2 small">
												Últ. vez visto el {showFormattedDate(item.last_time_seen)}
											</h6>
											<p className="mr-2">{item.description}</p>
											{item.phone &&(
												<p className="mr-2"> Contacto: {item.phone}</p>
											)}
											{item.city ? (
												<p>
													{item.city}, {item.country}
												</p>
												) : (
												<p>{item.country}</p>
											)}
											<Link
												className="btn btn-sm btn-warning mt-3 amarillo"
												to={`/reporte/${item.id}`}
											>
												{" "}
												Ver reporte completo
											</Link>
										</div>
									</div>
								</li>
							))}
						</ul>
						{/* Render pagination buttons */}
						<div>

							{Array.from({ length: props.totalPages }, (_, index) => (
								<button
									key={index + 1}
									onClick={() => props.handlePageClick(index + 1)}
									disabled={props.currentPage === index + 1}
								>
									{index + 1}
								</button>
							))}

						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ListaReportes;
