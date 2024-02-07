import React from "react";
import NewTask from "./NewTask";

//TODO: add separated list of tasks for selectedProject !!!

const Tasks = ({ tasks, onAdd, onDelete }) => {
	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
			<NewTask onAdd={onAdd} />
			{tasks.length === 0 && (
				<p className="text-stone-800 mb-4">
					This project does not have any tasks yet
				</p>
			)}
			{tasks.length > 0 && (
				<ul className="p-4 mt-8 rounded-sm bg-stone-100">
					{tasks.map((task) => (
						<li key={task.id} className="flex justify-between my-4">
							<span>{task.text}</span>
							<button
								onClick={() => onDelete(task.id)}
								className="text-stone-700 hover:text-red-500 hover:scale-105"
							>
								Clear
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default Tasks;
