'use client';

import { motion } from 'framer-motion';

// --- Self-contained SVG Icons ---
// const LocationIcon = () => <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const EmailIcon = () => <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
const ResumeIcon = () => <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
const GithubIcon = () => <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>;
const LinkedInIcon = () => <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>;
const XIcon = () => <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.2 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
	return (
		<section className="py-20 px-4 font-mono bg-black text-gray-300">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="max-w-4xl mx-auto flex flex-col items-center text-center"
			>
				{/* Header */}
				<motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-100">
					<span className="text-green-500">$</span> Let&apos;s Connect
				</motion.h2>

				<motion.p variants={itemVariants} className="mt-4 max-w-xl text-gray-400">
					I&apos;m currently based in Noida, UP. Open to collaborations, freelance projects, or a friendly chat about technology.
				</motion.p>

				{/* Primary Links */}
				<motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-lg">
					<a href="mailto:vasudev@vasudevsrivastava.com" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors">
						<EmailIcon />
						<span>vasudev@vasudevsrivastava.com</span>
					</a>
					<a href="/VasudevResume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors">
						<ResumeIcon />
						<span>Download Resume</span>
					</a>
				</motion.div>

				{/* Divider & Social Links */}
				<motion.div variants={itemVariants} className="mt-12 w-full flex flex-col items-center">
					<div className="w-24 h-px bg-gray-800"></div>
					<div className="mt-8 flex items-center gap-6">
						<a href="https://github.com/VasudevSrivastava" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-500 hover:text-green-400 transition-colors">
							<GithubIcon />
						</a>
						<a href="https://www.linkedin.com/in/vsdvsrivastava/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-500 hover:text-green-400 transition-colors">
							<LinkedInIcon />
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="text-gray-500 hover:text-green-400 transition-colors">
							<XIcon />
						</a>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}