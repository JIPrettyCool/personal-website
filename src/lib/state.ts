import { createState, useState } from '@hookstate/core';
import { Persistence } from '@hookstate/persistence';
import { useEffect } from 'react';
import { useMedia } from 'react-use';

import type { State } from '@hookstate/core';

import type { Settings } from '~/types';

const DEFAULT_STATE = createState<Settings>({
	animations: null,
	sound: true,
});

export const STATE_KEY = 'settings';

export function usePersistantState(): State<Settings> {
	const noMotionPreference = useMedia('(prefers-reduced-motion: no-preference)', true);

	const persistance = Persistence(STATE_KEY);
	const state = useState<Settings>(DEFAULT_STATE);

	return state;
}
