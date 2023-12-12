import "./Card.scss";

import React, { FC } from "react";

import { Patient } from "../../interfaces/patients";
import { formatDateTime } from "../../utils/formatters";

interface CardProps {
	patient?: Patient;
	ellipsis?: boolean;
	viewAction?: boolean;
	editAction?: boolean;
	onSelect?: (data: Patient) => void;
	onEdit?: (data: Patient) => void;
}

const Card: FC<CardProps> = ({ patient, ellipsis, viewAction, editAction, onSelect, onEdit }) => {
	return patient?.id.length ? (
		<div onClick={() => (onSelect ? onSelect(patient) : null)}>
			<div className="Card">
				<div className="Card-header">
					{viewAction || editAction ? (
						<div className="Card-header-actions">
							{viewAction ? (
								<div onClick={() => (onSelect ? onSelect(patient) : null)}>
									<svg
										fill="none"
										color="white"
										height="16"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
										<circle cx="12" cy="12" r="3" />
									</svg>
								</div>
							) : null}
							{editAction ? (
								<div onClick={() => (onEdit ? onEdit(patient) : null)}>
									<svg
										fill="none"
										height="14"
										color="white"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
										<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
									</svg>
								</div>
							) : null}
						</div>
					) : null}

					<img src={patient.avatar} alt="Avatar" className="Card-header-image" />
				</div>
				<div className="Card-content">
					<h2 className="Card-title Card-ellipsis-text">{patient.name}</h2>
					<p className="Card-details">{formatDateTime(patient.createdAt)}</p>
					<p className={`Card-description ${ellipsis ? "Card-ellipsis-text" : ""}`}>
						{patient.description}
					</p>
					<a
						href={patient.website}
						className="Card-details Card-ellipsis-text"
						target="_blank"
						rel="noreferrer"
					>
						{patient.website}
					</a>
				</div>
			</div>
		</div>
	) : null;
};

export default Card;
