'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden p-4">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			{/* Main Content Box */}
			<div className="relative z-10 max-w-5xl w-full">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-xl border border-gray-800 p-8"
				>
					<div className="flex flex-col md:flex-row items-center justify-between gap-8">
						{/* --- Left Column: Text Content --- */}
						<div className="flex-1">
							<div className="flex items-center gap-2 mb-4">
								<div className="w-3 h-3 rounded-full bg-red-500" />
								<div className="w-3 h-3 rounded-full bg-yellow-500" />
								<div className="w-3 h-3 rounded-full bg-green-500" />
							</div>
							<div className="font-mono">
								<p className="text-green-500">$ whoami</p>
								<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-100">Vasudev Srivastava</h1>
								<p className="text-gray-400 mb-6">Software Engineer</p>
								<p className="text-green-500">$ skills --query=all</p>
								<div className="flex flex-wrap gap-2 mt-2">
									<span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-md border border-green-500/20">Java</span>
									<span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-md border border-green-500/20">Spring Boot</span>
									<span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-md border border-green-500/20">Python</span>
									<span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-md border border-green-500/20">Django</span>
									<span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-md border border-green-500/20">SQL</span>
									<span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-md border border-green-500/20">AI</span>
								</div>
							</div>
						</div>

						{/* --- Right Column: Image --- */}
						{/* Added md:mr-12 to move the image left on medium screens and up */}
						<div className="shrink-0 mt-6 md:mt-0 md:mr-12">
							<motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
								className="relative w-48 h-48"
                            >
								<div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-blue-500 blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
								<div className="relative rounded-full p-1 bg-gradient-to-br from-green-500 to-blue-500">
                                    {/* IMPORTANT: Replace this src with the path to your image */}
									<Image
										src="/profile_pic.jpg"
										alt="Vasudev Srivastava"
										width={192}  // Add this (w-48 = 192px)
										height={192} // Add this (h-48 = 192px)
										className="w-full h-full rounded-full object-cover bg-black"
									/>
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
