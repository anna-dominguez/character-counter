import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const LetterDensity = ({
	visibleData,
	data,
	setShowAll,
	showAll,
	text,
}: {
	visibleData: [string, number, number][];
	data: [string, number, number][];
	setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
	showAll: boolean;
	text: string;
}) => {
	return (
		<article className="flex flex-col gap-5 mb-16">
			<h2 className="text-2xl tracking-[-1px] font-semibold leading-[130%]">
				Letter Density
			</h2>
			<div className="flex flex-col gap-3">
				{text.length ? (
					visibleData.map(([letter, frequency, percentage]) => (
						<div
							key={letter}
							className="grid grid-cols-[16px_1fr_90px] gap-[14px] items-center"
						>
							<p>{letter.toUpperCase()}</p>
							<div className="relative h-4 w-full bg-neutral-100 dark:bg-neutral-800 rounded-lg">
								<div
									className="absolute top-0 left-0 h-full bg-[#D3A0FA] rounded-lg"
									style={{ width: `${percentage}%` }}
								/>
							</div>
							<p className="text-end">
								{frequency} ({percentage}%)
							</p>
						</div>
					))
				) : (
					<p className="text-base leading-[130%] tracking-[0.6px]">
						No characters found. Start typing to see letter density.
					</p>
				)}
				{data.length > 5 && (
					<button
						type="button"
						onClick={() => setShowAll(!showAll)}
						className="mt-2 text-[20px] leading-[140%] text-start flex items-center gap-2"
					>
						{showAll ? 'See Less' : 'See More'}
						{showAll ? <FaAngleUp /> : <FaAngleDown />}
					</button>
				)}
			</div>
		</article>
	);
};

export default LetterDensity;
