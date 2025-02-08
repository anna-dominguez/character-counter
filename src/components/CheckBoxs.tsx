const CheckBoxs = ({
	excludeChecked,
	setExcludeChecked,
	limitChecked,
	setLimitChecked,
	limit,
	setLimit,
}: {
	excludeChecked: boolean;
	setExcludeChecked: React.Dispatch<React.SetStateAction<boolean>>;
	limitChecked: boolean;
	setLimitChecked: React.Dispatch<React.SetStateAction<boolean>>;
	limit: number;
	setLimit: React.Dispatch<React.SetStateAction<number>>;
}) => {
	return (
		<div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
			<div className="flex gap-2.5 items-center">
				<label
					htmlFor="exclude"
					className="relative flex items-center cursor-pointer"
				>
					<input
						id="exclude"
						type="checkbox"
						checked={excludeChecked}
						onChange={() => setExcludeChecked((checked) => !checked)}
						className="hidden"
					/>
					<div
						className={`w-4 h-4 flex items-center justify-center transition-all
                    border border-neutral-600 rounded-[4px]
        ${excludeChecked ? 'bg-[#C27CF8]' : ''}`}
					>
						{excludeChecked && (
							<img src="/images/icon-check.svg" alt="Check icon" />
						)}
					</div>
				</label>
				<label htmlFor="spaces">Exclude Spaces</label>
			</div>
			<div className="flex gap-2.5 items-center">
				<label
					htmlFor="limit"
					className="relative flex items-center cursor-pointer"
				>
					<input
						id="limit"
						type="checkbox"
						checked={limitChecked}
						onChange={() => setLimitChecked((checked) => !checked)}
						className="hidden"
					/>
					<div
						className={`w-4 h-4 flex items-center justify-center transition-all
                    border border-neutral-600 rounded-[4px]
        ${limitChecked ? 'bg-[#C27CF8]' : ''}`}
					>
						{limitChecked && (
							<img src="/images/icon-check.svg" alt="Check icon" />
						)}
					</div>
				</label>
				<label htmlFor="limit">Set Character Limit</label>
				{limitChecked && (
					<input
						type="number"
						value={limit}
						onChange={(e) => setLimit(Number.parseInt(e.target.value, 10))}
						className="appearance-none px-3 py-1 border w-[55px] border-neutral-600 rounded-md text-center
             focus:outline-none focus:ring-2 focus:ring-purple-500 [&::-webkit-inner-spin-button]:appearance-none
             [&::-webkit-outer-spin-button]:appearance-none"
					/>
				)}
			</div>
		</div>
	);
};

export default CheckBoxs;
