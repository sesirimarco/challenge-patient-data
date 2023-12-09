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
			<div className="Card-card">
				<img
					src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg"
					alt="Avatar"
					className="Card-avatar"
				/>
				<div className="Card-card-content">
					<h2 className="Card-card-title">{patient.name}</h2>
					<p className="Card-card-details">{formatDateTime(patient.createdAt)}</p>
					<p className="Card-card-description">{patient.description}</p>
					<a href={patient.website} className="Card-card-details">
						{patient.website}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
