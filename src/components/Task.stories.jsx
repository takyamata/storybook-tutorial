import Task from "./Task";

export default {
	component: Task,
	title: "Task",
	tags: ["autodocs"],
};

export const Default = {
	args: {
		task: {
			id: "1",
			title: "Test Task",
			state: "TASK_INBOX",
		},
	},
};

export const Pinned = {
	args: {
		task: {
			...Default.args.task,
			state: "TASK_PINNED",
		},
	},
};

export const Archived = {
	args: {
		task: {
			...Default.args.task,
			state: "TASK_ARCHIVED",
		},
	},
};

export const LongTitle = {
	args: {
		task: {
			...Default.args.task,
			title: "ロングタイトルのエッジケース対応ロングタイトルのエッジケース対応ロングタイトルのエッジケース対応ロングタイトルのエッジケース対応ロングタイトルのエッジケース対応ロングタイトルのエッジケース対応ロングタイトルのエッジケース対応ロングタイトルのエッジケース対応ロングタイトルのエッジケース対応ロングタイトルのエッジケース対応",
		},
	},
};

