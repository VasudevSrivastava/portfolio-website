'use client';

import { motion } from 'framer-motion';

// --- Self-contained SVG Icons for Links ---
const GithubIcon = () => (
	<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
			fill="currentColor"
		/>
	</svg>
);
const KaggleIcon = () => (
	<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M19.33,3.12l-6.1,6.12l-2.66-2.66L4.1,13.06,2.28,11.2l6.44-6.6,2.62,2.62,6-6Z"
			fill="currentColor"
		/>
		<path
			d="M21.72,13.1l-2.23,2.33-3.66-3.66-2.3,2.23L17.19,21H4.1l-2-2.06.15-.14Z"
			fill="currentColor"
		/>
	</svg>
);
const LiveLinkIcon = () => (
	<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M14 4h6v6m-6.5 3.5L20 4M4 14v6h6m-6.5-6.5L4 20"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default function SystemArchitecture() {
	const projects = [
		{
			title: 'Contest Platform for MBA Students',
			description: 'Architected a scalable microservices platform using Spring Boot, Django REST, and React for topic-wise contests with JWT auth and analytics.',
			details: [
				'Microservices with Spring Boot & Django REST',
				'JWT authentication for secure, timed assessments',
				'React frontend for dynamic UI and analytics dashboard',
				'Containerized via Docker for isolated deployment',
			],
			tech: ['Spring Boot', 'Django REST', 'React', 'JWT', 'Docker', 'Microservices'],
			repo: 'https://github.com/VasudevSrivastava/mba-platform',
		},
		{
			title: 'SkillSync – Project Discovery Platform',
			description: 'A full-stack platform using Django and PostgreSQL that recommends projects to users based on cosine similarity and rating heuristics.',
			details: [
				'Content-based filtering with Python & cosine similarity',
				'Full user authentication, profiles, & threaded discussions',
				'Optimized PostgreSQL queries for fast retrieval',
				'Live deployment hosted on Render',
			],
			tech: ['Django', 'PostgreSQL', 'Python', 'Cosine Similarity', 'Render'],
			repo: 'https://github.com/VasudevSrivastava/project-recommendation-system',
			live: 'https://project-recommendation-system.onrender.com/',
		},
		{
			title: 'Automated Receipt Data Entry',
			description: 'A CLI tool to batch-extract data from PDF receipts using OCR and export it to Excel, built for a retail startup to automate manual work.',
			details: [
				'Automated data extraction using Tesseract OCR',
				'PDF-to-image conversion and regex-based parsing',
				'Batch execution for processing multiple files',
				'Structured Excel report generation with Pandas',
			],
			tech: ['Python', 'Tesseract OCR', 'Regex', 'Pandas'],
		},
		{
			title: 'Yuktikula Club Website – Backend',
			description: 'Developed and deployed scalable backend services using Django for a college club website, managing the database and API endpoints.',
			details: [
				'RESTful APIs using Django REST Framework',
				'PostgreSQL database management and optimization',
				'Role-based access for member & event management',
				'CI/CD pipeline for seamless deployment on Render',
			],
			tech: ['Django', 'DRF', 'PostgreSQL', 'Render'],
			repo: 'https://github.com/VasudevSrivastava/Yuktikula-Website',
			live: 'https://yuktikula-website.onrender.com/',
		},
		{
			title: 'Kaggle Competitor – Predictive Analytics',
			description: 'Secured medals in multiple Kaggle competitions by applying machine learning for classification and regression tasks with comprehensive notebooks.',
			details: [
				'Medal-winning results in official competitions',
				'Advanced feature engineering and model tuning',
				'Built robust ML pipelines with scikit-learn & XGBoost',
				'Comprehensive EDA and documented insights',
			],
			tech: ['Python', 'Kaggle', 'scikit-learn', 'XGBoost', 'Pandas'],
			repo: 'https://www.kaggle.com/vasudevsrivastava',
		},
	];

	return (
		<section className="font-mono text-gray-300 bg-black relative py-20 px-4">
			{/* Background Glow */}
			<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
			
			<div className="max-w-6xl mx-auto relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="relative text-center mb-16 border border-gray-800 bg-black/50 rounded-lg p-4"
				>
					{/* Window Controls */}
					<div className="absolute left-4 top-1/2 -translate-y-1/2 flex space-x-2">
						<div className="w-3 h-3 rounded-full bg-red-500"></div>
						<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
						<div className="w-3 h-3 rounded-full bg-green-500"></div>
					</div>
					
					{/* Title */}
					<h2 className="text-3xl md:text-4xl font-bold text-gray-100">
						System Architecture & Projects
					</h2>
					<p className="text-gray-500 mt-2 text-lg">
						~/<span className="text-green-500">root</span>/projects
					</p>
				</motion.div>

				{/* Grid for Project Panes */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
							className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 flex flex-col group hover:border-green-500/80 transition-all duration-300"
						>
							{/* Pane Header */}
							<div className="flex justify-between items-start gap-4 mb-4">
								<h3 className="text-xl font-bold text-gray-100 group-hover:text-green-400 transition-colors duration-300">{project.title}</h3>
								<div className="flex items-center gap-3 text-gray-500 shrink-0">
									{project.repo && (
										<a href={project.repo} target="_blank" rel="noopener noreferrer" title={project.title.includes('Kaggle') ? 'Kaggle Profile' : 'GitHub Repository'} className="hover:text-blue-400 transition-colors">
											{project.title.includes('Kaggle') ? <KaggleIcon /> : <GithubIcon />}
										</a>
									)}
									{project.live && (
										<a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo" className="hover:text-blue-400 transition-colors">
											<LiveLinkIcon />
										</a>
									)}
								</div>
							</div>

							{/* Description */}
							<p className="text-gray-400 text-sm mb-5 leading-relaxed flex-grow">{project.description}</p>

							{/* Key Features List */}
							<div className="mb-6">
								<ul className="space-y-1.5 text-sm">
									{project.details.map((detail) => (
										<li key={detail} className="flex items-start">
											<span className="text-green-500 mr-3 mt-1 shrink-0">↳</span>
											<span>{detail}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Tech Stack Footer */}
							<div className="mt-auto border-t border-gray-800/50 pt-4">
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span key={tech} className="text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
