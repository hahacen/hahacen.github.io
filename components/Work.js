import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Skills = ({ title, skill_bar }) => {
	return (
		<div id="skills" className="bg-light py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{skill_bar.map((value, index) => (
						<Skill_bar
							key={index}
							title={value.title}
							skills={value.skills} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Experiences = ({ title, experience_card }) => {
	return (
		<div id="experiences" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{experience_card.map((card, index) => (
						<div key={index} className="card my-3" style={{ width: '50rem' }}>
							<div className="card-body">
								<div className="d-flex justify-content-between align-items-center">
									<img src={card.logo} alt={card.company} style={{ height: '50px' }} />
									<span className="text-muted">{card.role}</span>
								</div>
								<h5 className="card-title mt-2 fw-bold">{card.company}</h5>
								<ul className="custom-bullet">
									{card.details.map((detail, index) => (
										<li key={index}>{detail}</li>
									))}
								</ul>
								<div className="fw-bold">Tools: Python, Flask, MongoDB</div>
								<div className="text-muted">{`${card.time} | ${card.location}`}</div>
							</div>
						</div>
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons}
							imageUrl={value.imageUrl} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons, imageUrl }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "30rem" }}>
			<h4 className="text-primary">{title}</h4>
			{/* Render description as list items if description is an array */}
			{Array.isArray(description) ? (
				<ul className="custom-bullet">
					{description.map((detail, index) => (
						<li key={index}>{detail}</li>
					))}
				</ul>
			) : (
				// Fallback to a paragraph if description is not an array (for backwards compatibility)
				<p className="text-dark">{description}</p>
			)}
			<div className="text-end">
				{imageUrl && (
					<div className="mb-3"> {/* Margin bottom added here */}
						<img src={imageUrl} alt="Descriptive Alt Text" className="img-fluid" />
					</div>
				)}
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};



export const Skill_bar = ({ title, skills }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "60rem" }}>
			<h4 className="text-primary fw-bold">{title}</h4>
			<div className="d-flex flex-wrap justify-content-center">
				{skills.map((skill, index) => (
					<div key={index} className="d-flex flex-column align-items-center mx-3 my-2">
						<img src={skill.picture} alt={skill.s} style={{ width: 'auto', height: '100px' }} />
						<span className="badge bg-primary mt-2">{skill.s}</span>
					</div>
				))}
			</div>
		</div>

	);
}

