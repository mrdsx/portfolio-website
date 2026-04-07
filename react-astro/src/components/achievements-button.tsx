import { useEffect, useState } from "react";

import { getCompletedAchievementsCount } from "@/store/achievements";

const AchievementsButton = () => {
	const [isClient, setIsClient] = useState<boolean>(false);
	const completedCount = getCompletedAchievementsCount();

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient || completedCount === 0) {
		return null;
	}

	return (
		<a
			className="absolute right-5 bottom-0 h-10 w-8 bg-black outline outline-gray-500"
			href="/achievements"
		/>
	);
};

export default AchievementsButton;
