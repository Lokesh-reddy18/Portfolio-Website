import { SiLeetcode, SiGeeksforgeeks, SiCodeforces, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";

const codingProfiles = [
	{
		name: "LeetCode",
		icon: SiLeetcode,
		url: "https://leetcode.com/lokesh-reddy18/",
		color: "text-yellow-500",
		rating: "Max Rating: 1938",
	},
	{
		name: "GeeksforGeeks",
		icon: SiGeeksforgeeks,
		url: "https://www.geeksforgeeks.org/user/lokesh_reddy18/",
		color: "text-green-600",
		rating: "Max Rating: 1806",
	},
	{
		name: "Codeforces",
		icon: SiCodeforces,
		url: "https://codeforces.com/profile/lokeshreddy18",
		color: "text-blue-500",
		rating: "Max Rating: 1231",
	},
	{
		name: "CodeChef",
		icon: SiCodechef,
		url: "https://www.codechef.com/users/loki_1805",
		color: "text-brown-700",
		rating: "Max Rating: 1665",
	},
	{
		name: "AtCoder",
		icon: null,
		url: "https://atcoder.jp/users/LokeshReddy",
		color: "text-gray-700",
		logoLight:
			"https://img.atcoder.jp/logo/atcoder/logo_transparent.png?_gl=1*57fjlc*_ga*NjYwODI1NDk1LjE3NTAxNzAyMzc.*_ga_RC512FD18N*czE3NTA4NDE0MTUkbzkkZzEkdDE3NTA4NDE3NDUkajU3JGwwJGgw",
		logoDark:
			"https://img.atcoder.jp/logo/atcoder/logo_white.png?_gl=1*1o5l9k8*_ga*NjYwODI1NDk1LjE3NTAxNzAyMzc.*_ga_RC512FD18N*czE3NTA4NDE0MTUkbzkkZzEkdDE3NTA4NDE2NDIkajMwJGwwJGgw",
		rating: "Max Rating: 1117",
	},
];

const CodingProfiles = () => (
	<section id="coding-profiles" className="py-20 bg-white dark:bg-black">
		<div className="text-center mb-12">
			<h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
				Coding Profiles
			</h2>
			<p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
				Connect with me on coding platforms
			</p>
		</div>
		<div className="flex flex-wrap justify-center gap-8">
			{codingProfiles.map((profile, idx) => (
				<motion.a
					key={idx}
					href={profile.url}
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ scale: 1.1, y: -5 }}
					whileTap={{ scale: 0.95 }}
					className="flex flex-col items-center gap-2 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-lg transition-all w-40"
				>
					{profile.icon ? (
						<profile.icon className={`text-5xl ${profile.color}`} />
					) : (
						<>
							<img
								src={profile.logoLight}
								alt={profile.name + " logo"}
								className="h-12 w-12 object-contain block dark:hidden"
							/>
							<img
								src={profile.logoDark}
								alt={profile.name + " logo"}
								className="h-12 w-12 object-contain hidden dark:block"
							/>
						</>
					)}
					<span className="font-semibold text-gray-800 dark:text-white mt-2">
						{profile.name}
					</span>
					{profile.rating && (
						<span className="text-sm text-gray-600 dark:text-gray-300 mt-1">
							{profile.rating}
						</span>
					)}
				</motion.a>
			))}
		</div>
	</section>
);

export default CodingProfiles;
