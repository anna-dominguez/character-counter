'use client';

import { useEffect, useState } from 'react';

import CardInfo from '@/components/CardInfo';
import Header from '@/components/Header';
import Title from '@/components/Title';
import Textarea from '@/components/Textarea';
import CheckBoxs from '@/components/CheckBoxs';
import Image from 'next/image';
import LetterDensity from '@/components/LetterDensity';

export default function Home() {
	const [nbCharacters, setNbCharacters] = useState(0);
	const [nbWords, setNbWords] = useState(0);
	const [nbSentences, setNbSentences] = useState(0);
	const [excludeChecked, setExcludeChecked] = useState(false);
	const [limitChecked, setLimitChecked] = useState(false);
	const [limit, setLimit] = useState(300);
	const [error, setError] = useState(false);
	const [text, setText] = useState('');
	const [readingTime, setReadingTime] = useState(0);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		const words = text.split(' ');
		const sentences = text.split(/[.!?]+/);
		setReadingTime(Math.ceil(text.trim().split(/\s+/).length / 200));
		setNbCharacters(excludeChecked ? words.join('').length : text.length);
		setNbWords(!words[0] ? 0 : words.filter((str) => str.trim() !== '').length);
		setNbSentences(sentences.filter((str) => str.trim() !== '').length);
		setError(limitChecked ? text.length > limit : false);
	}, [text, limitChecked, limit, excludeChecked]);

	const calculateLetterFrequency = (
		text: string
	): [string, number, number][] => {
		const lettersOnly = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
		const totalLetters = lettersOnly.length;

		if (totalLetters === 0) return [];

		const frequencyMap: Record<string, number> = {};

		for (const letter of lettersOnly) {
			frequencyMap[letter] = (frequencyMap[letter] || 0) + 1;
		}

		return Object.entries(frequencyMap)
			.map(([letter, count]): [string, number, number] => [
				letter,
				count,
				Number.parseFloat(((count / totalLetters) * 100).toFixed(2)),
			])
			.sort((a, b) => b[1] - a[1]);
	};

	const data = calculateLetterFrequency(text);
	const visibleData = showAll ? data : data.slice(0, 5);

	return (
		<main className="min-h-screen max-w-[990px] mx-auto flex flex-col gap-10 px-4 sm:px-8">
			<Header />
			<Title />
			<section className="flex flex-col gap-4">
				<Textarea text={text} setText={setText} error={error} />
				{error && (
					<div className="flex gap-2 text-[#DA3701] dark:text-[#FE8159]">
						<Image
							src="/images/icon-info.svg"
							alt="warning"
							width={14}
							height={18}
						/>
						<p>Limit reached! Your text exceeds {limit} characters.</p>
					</div>
				)}
				<div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-center">
					<CheckBoxs
						excludeChecked={excludeChecked}
						setExcludeChecked={setExcludeChecked}
						limitChecked={limitChecked}
						setLimitChecked={setLimitChecked}
						limit={limit}
						setLimit={setLimit}
					/>
					<p>Approx. reading time: {readingTime} minutes</p>
				</div>
			</section>
			<section className="flex flex-col gap-6">
				<div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
					<CardInfo
						bgColor="bg-[#D3A0FA]"
						imageUrl="/images/pattern-character-count.svg"
						title={nbCharacters.toString()}
						description="Total Characters"
					/>
					<CardInfo
						bgColor="bg-[#FF9F00]"
						imageUrl="/images/pattern-word-count.svg"
						title={nbWords.toString()}
						description="Word Count"
					/>
					<CardInfo
						bgColor="bg-[#FE8159]"
						imageUrl="/images/pattern-sentence-count.svg"
						title={nbSentences.toString()}
						description="Sentence Count"
					/>
				</div>
				<LetterDensity
					showAll={showAll}
					setShowAll={setShowAll}
					data={data}
					visibleData={visibleData}
					text={text}
				/>
			</section>
		</main>
	);
}
