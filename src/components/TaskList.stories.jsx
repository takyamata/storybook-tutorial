import TaskList from "./TaskList";
import * as TaskStories from "./Task.stories";
import { configureStore } from '@reduxjs/toolkit';
import { TasksSlice } from '../lib/store';
import { Provider } from 'react-redux';

export default {
	component: TaskList,
	title: 'TaskList',
	decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
	tags: ['autodocs'],
};

export const MockState = {
	tasks: [
		{...TaskStories.Default.args.task, id: '1', title: 'Task 1'},
		{...TaskStories.Default.args.task, id: '2', title: 'Task 2'},
		{...TaskStories.Default.args.task, id: '3', title: 'Task 3'},
		{...TaskStories.Default.args.task, id: '4', title: 'Task 4'},
		{...TaskStories.Default.args.task, id: '5', title: 'Task 5'},
		{...TaskStories.Default.args.task, id: '6', title: 'Task 6'},
	],
	status: 'idle',
	error: null
}

const Mockstore = ({taskboxState, children}) => (
	<Provider
		store={configureStore({
			reducer: {
				taskbox: TasksSlice.reducer
			},
			preloadedState: {
				taskbox: taskboxState,
			}
		})}
	>
		{children}
	</Provider>
)

export const Default = {
	args: {
		tasks: MockState.tasks
	},
	decorators: [(story) => 
		<Mockstore taskboxState={MockState}>
			{story()}
		</Mockstore>
	],
};
export const WithPinnedTasks = {
	decorators: [
		(story) => {
			const pinnedTasks = [
				...MockState.tasks.slice(0, 5),
				{id: 'id', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
			];
			return (
				<Mockstore taskboxState={{...MockState, tasks: pinnedTasks}}>
					{story()}
				</Mockstore>
			)
		}
	]
}
export const Loading = {
	decorators: [
		(story) => (
			<Mockstore taskboxState={{...MockState, status: 'loading'}}>
				{story()}
			</Mockstore>
		)
	]
}
export const Empty = {
	decorators: [
		(story) => (
			<Mockstore taskboxState={{...MockState, tasks: []}}>
				{story()}
			</Mockstore>
		)
	]
}