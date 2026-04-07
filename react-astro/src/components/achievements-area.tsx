import { useEffect, useState } from "react";

import GlassButton from "@/components/glass-button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn, toastAchievement } from "@/lib/utils";
import {
	type AchievementId,
	achievements,
	finishAchievement,
	getCompletedAchievementsCount,
	isAchievementCompleted,
} from "@/store/achievements";

const AchievementsArea = () => {
	const [isClient, setIsClient] = useState<boolean>(false);
	const completedCount = getCompletedAchievementsCount();
	const totalCount = Object.keys(achievements).length;

	function onAchievementFinish(): void {
		setTimeout(() => toastAchievement("visit-achievements-page"), 500);
	}

	useEffect(() => {
		if (completedCount === 0) {
			document.location.href = "/";
		} else {
			setIsClient(true);
			finishAchievement("visit-achievements-page", onAchievementFinish);
		}
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<div className="space-y-2">
			<p>
				{completedCount}/{totalCount} completed
			</p>
			<ul className="flex flex-wrap gap-2">
				{Object.entries(achievements).map(([id, data]) => {
					const isCompleted = isAchievementCompleted(id as AchievementId);

					return (
						<li key={id}>
							<Tooltip>
								<TooltipTrigger asChild>
									<GlassButton
										className={cn(
											isCompleted
												? "border-green-600! text-green-400"
												: "text-muted-foreground",
										)}
										size="lg"
									>
										{data.title}
									</GlassButton>
								</TooltipTrigger>
								<TooltipContent>{data.description}</TooltipContent>
							</Tooltip>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AchievementsArea;
