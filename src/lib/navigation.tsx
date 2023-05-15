import { useTheme } from 'next-themes';

import { Status } from '~/components';
import { usePersistantState, useStatus } from '~/lib';

import { NavigationItemType, Theme } from '~/types';

import type { NavigationItem, NavigationItems } from '~/types';

const staticMenuItems: Array<Array<NavigationItem>> = [
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:home',
			text: 'Home',
			href: '/',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:award',
			text: 'Projects',
			href: '/projects',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:briefcase',
			text: 'About Me (WIP)',
			href: '/about',
		},
	],
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:twitter',
			text: 'Twitter',
			href: 'https://twitter.com/iamrealji',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:github',
			text: 'GitHub',
			href: 'https://github.com/jiprettycool',
			external: true,
		},
	],
];

export function useNavigation(): {
	menu: NavigationItems;
	settings: NavigationItems;
} {
	const { theme, setTheme } = useTheme();

	const menuItems: NavigationItems = [
		...staticMenuItems,
	];

	const settingsItems: NavigationItems = [
		[
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:moon',
				endIcon: theme === Theme.DARK ? 'feather:check-circle' : undefined,
				text: 'Dark',
				onClick: () => setTheme(Theme.DARK),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:sun',
				endIcon: theme === Theme.LIGHT ? 'feather:check-circle' : undefined,
				text: 'Light',
				onClick: () => setTheme(Theme.LIGHT),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:monitor',
				endIcon: theme === Theme.SYSTEM ? 'feather:check-circle' : undefined,
				text: 'System',
				onClick: () => setTheme(Theme.SYSTEM),
			},
		],
	];

	return {
		menu: menuItems,
		settings: settingsItems,
	};
}
