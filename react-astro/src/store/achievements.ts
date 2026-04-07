import { persistentAtom } from "@nanostores/persistent";

type AchievementId = "click-all-skills" | "visit-achievements-page";

const achievements: Record<
	AchievementId,
	{ title: string; description: string }
> = {
	"click-all-skills": {
		title: "Infinity Gauntlet",
		description: "Click all skills on home page",
	},
	"visit-achievements-page": {
		title: "What is this place?",
		description: "Visit achievements page",
	},
};

const $completedAchievements = persistentAtom<AchievementId[]>(
	"completed-achievements",
	[],
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	},
);

const finishAchievement = (
	id: AchievementId,
	onAchievementFinish?: () => void,
): void => {
	const achievementExists = $completedAchievements.get().includes(id);
	if (!achievementExists) {
		onAchievementFinish?.();
		$completedAchievements.set([...$completedAchievements.get(), id]);
	}
};

const isAchievementCompleted = (id: AchievementId): boolean => {
	return $completedAchievements.get().includes(id);
};

const getCompletedAchievementsCount = (): number => {
	return $completedAchievements.get().length;
};

const resetCompletedAchievements = (): void => {
	$completedAchievements.set([]);
};

export {
	$completedAchievements,
	achievements,
	finishAchievement,
	getCompletedAchievementsCount,
	isAchievementCompleted,
	resetCompletedAchievements,
	type AchievementId,
};
