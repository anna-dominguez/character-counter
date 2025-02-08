const Textarea = ({
	text,
	setText,
	error,
}: {
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
	error: boolean;
}) => {
	return (
		<textarea
			className={`dark:bg-neutral-800 dark:hover:bg-neutral-700 border-2 dark:border-neutral-700
          dark:hover:border-neutral-600 focus:border-purple-500 dark:focus:border-purple-500 outline-none rounded-xl p-5
          dark:placeholder-neutral-100 bg-neutral-100 border-neutral-200 hover:bg-neutral-200
          placeholder-neutral-900 h-[200px] resize-none ${
						error ? 'border-[#FE8159] dark:border-[#FE8159]' : ''
					}`}
			placeholder="Start typing here... (or paste your text)"
			onChange={(e) => setText(e.target.value)}
			value={text}
		/>
	);
};

export default Textarea;
