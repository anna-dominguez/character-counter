import React from 'react';

interface CardInfoProps {
	bgColor: string;
	imageUrl: string;
	title: string;
	description: string;
}

const CardInfo = ({ bgColor, imageUrl, title, description }: CardInfoProps) => {
	return (
		<div
			className={`p-5 sm:px-3 sm:py-4 lg:px-4 rounded-xl flex flex-col gap-2 ${bgColor} text-neutral-900 relative overflow-hidden`}
		>
			<img
				src={imageUrl}
				alt="total characters icon"
				className="absolute top-0 -right-6 h-full z-0"
			/>
			<p className="text-[40px] sm:text-[64px] font-bold leading-[100%] z-10 tracking-[-1px]">
				{title}
			</p>
			<p className="z-10 text-xl leading-[140%] tracking-[-0.6px]">
				{description}
			</p>
		</div>
	);
};

export default CardInfo;
