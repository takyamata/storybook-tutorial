import {createSlice, configureStore, createAsyncThunk} from '@reduxjs/toolkit'
import { act } from 'react';

const defaultTask = [
	{
		id: '1',
		title: 'Something 1',
		state: 'TASK_INBOX'
	},
	{
		id: '2',
		title: 'Something 2',
		state: 'TASK_INBOX'
	},
	{
		id: '3',
		title: 'Something 3',
		state: 'TASK_INBOX'
	},
	{
		id: '4',
		title: 'Something 4',
		state: 'TASK_INBOX'
	}
]

export const fetchTasks = createAsyncThunk('todos/fetchTasks', async () => {
	const response = await fetch(
		// エンドポイント間違うとエラーのデザイン表示される
		'https://jsonplaceholder.typicode.com/todos?userId=1'
	);
	const data = await response.json();

	const result = data.map((task) => ({
		id: `${task.id}`,
		title: task.title,
		state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX'
	}))

	return result;
})

const TaskBoxData = {
	tasks: defaultTask,
	status: 'idle',
	eorror: null
}

// slise
export const TasksSlice = createSlice({
	name: 'taskbox',
	initialState: TaskBoxData,
	reducers: {
		updateTaskState: (
			state, 
			action
		) => {
			const {id, newTaskState} = action.payload;
			const task = state.tasks.findIndex((task) => task.id === id)
			if(task >= 0) {
				state.tasks[task].state = newTaskState;
			}
		}
	},
	extraReducers(builder) {
		builder.addCase(fetchTasks.pending, (state) => {
			state.status = 'loading';
			state.error = null;
			state.tasks = [];
		})
		builder.addCase(fetchTasks.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.error = null;
			state.tasks = action.payload;
		})
		builder.addCase(fetchTasks.rejected, (state) => {
			state.status = 'failed';
			state.error = 'something went wrong';
			state.tasks = [];
		})
	}
})

export const {updateTaskState} = TasksSlice.actions;

// store
export const store = configureStore ({
	reducer: {
		taskbox: TasksSlice.reducer
	}
})

export default store;