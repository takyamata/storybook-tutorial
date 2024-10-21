export default function Task({
	task: {
		id,
		title,
		state
	}
})
{
	return (
		<div className="list-item">
			<label htmlFor="title" className="title">
				<input
					type="text"
					value={title}
					readOnly={true}
					placeholder="Input title"
				/>
			</label>
		</div>
	);
}