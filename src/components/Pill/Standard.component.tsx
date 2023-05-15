import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';

interface StandardPillProps extends AnchorHTMLAttributes<HTMLDivElement> {}

export function Standard({ children, className, ...rest }: StandardPillProps): JSX.Element {
	return (
		<div
			className={clsx(
				'inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-pink-300 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-pink-300 rounded-2xl default-transition default-focus',
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}>
			{children}
		</div>
	);
}
