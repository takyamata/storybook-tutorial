import Task from './Task.jsx'
export default {
	component: Task,
	title: 'Task',
}

export const Default = {
	args: {
		task: {
			id:"1",
			title: "Task Task",
			state: "TASK_INBOX",
		}
	}
}
