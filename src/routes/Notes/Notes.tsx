import "./Notes.scss";

const Notes = () => {
	return (
		<div className="Notes">
			<h4>A few notes:</h4>
			<p>
				This challenge was a great opportunity to showcase my React skills. I enjoyed implementing
				various features and enhancing the user interface.
			</p>
			<p>Here's a random cat image for a touch of delight:</p>
			<div className="Notes-image-container">
				<img
					src="https://cataas.com/cat"
					alt="Random Cat"
					style={{ maxWidth: "100%", height: "auto" }}
				/>
			</div>
		</div>
	);
};

export default Notes;
