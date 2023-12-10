import "./Card.scss";

import React, { FC } from "react";

import { Patient } from "../interfaces/patients";
import { formatDateTime } from "../utils/formatters";

interface CardProps {
	patient: Patient;

	onSave: (data: Patient) => void;
}

const Card: FC<CardProps> = ({ patient, onSave }) => {
	return (
		<div key={patient.id}>
			<div className="Card">
				<img
					src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg"
					alt="Avatar"
					className="Card-image"
				/>
				<div className="Card-content">
					<h2 className="Card-title">{patient.name}</h2>
					<p className="Card-details">{formatDateTime(patient.createdAt)}</p>
					<p className="Card-description Card-ellipsis-text">{patient.description}</p>
					<a href={patient.website} className="Card-details">
						{patient.website}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
