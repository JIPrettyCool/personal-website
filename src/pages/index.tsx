import { Icon } from '@iconify/react';

import { Animate, Button, Status } from '~/components';
import { NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

import type { NavigationItem } from '~/types';

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <Icon className="mr-3" icon="feather:copy" />,
		text: 'Projects',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://github.com/jiprettycool',
		icon: <Icon className="mr-3" icon="feather:github" />,
		text: 'GitHub',
	},
];

export default function IndexP(): JSX.Element {

	return (
		<Layout.Default>
			<div className="flex flex-grow min-h-screen pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-sm sm:max-w-lg w-full mx-auto px-0 sm:px-16">
					<Status.Widget />
					<Animate
						as="p"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-500 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold"
						transition={{
							delay: 0.5,
						}}>
						Hey <span className="text-gray-500 dark:text-white tracking-tight font-extrabold inline-block origin-70 hover:(animate-wave)">👋</span>
						<br />
						It's Meriç
					</Animate>
					<div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Animate
									animation={{
										y: [50, 0],
										opacity: [0, 1],
									}}
									className="w-full sm:w-auto"
									key={index}
									transition={{
										delay: 0.1 * (index + 2) + 0.5,
									}}>
									<Button.Outline href={action.href}>
										{action.icon}
										<span>{action.text}</span>
									</Button.Outline>
								</Animate>
							);
						})}
							</div>
						</div>
					</div>
		</Layout.Default>
	);
}
