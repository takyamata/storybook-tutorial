import { useEffect } from 'react';
import TaskList from './TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../lib/store';

export default function InboxScreen() {

	const {error} = useSelector((state) => state.taskbox)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTasks())
	}, [])

	// エンドポイントが違った場合表示されるデザイン
	if (error) {
		return (
			<div className='page lists-show'>
				<div className='wrapper-message'>
					<span className='icon-face-sad'></span>
					<p className='title-message'>Oh no!</p>
					<p className='subtitle-message'>Something went wrong</p>
				</div>
			</div>
		)
	}

	return (
		<div className='page lists-show'>
			<nav>
				<h1 className='title-page'>Taskbox</h1>
			</nav>
			<TaskList/>
		</div>
	);
}