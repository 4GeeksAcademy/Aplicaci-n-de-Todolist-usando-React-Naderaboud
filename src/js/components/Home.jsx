import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { render } from "react-dom";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState([])
	const [inputValue, setInputValue] = useState("")
	const [hoveredIndex, setHoveredIndex] = useState(null);


	const onInputChange = (event) => {
		console.log(event.target.value)
		setInputValue(event.target.value)
	}

	const onEnterPress = (event) => {

		if (event.key === "Enter" && inputValue != "") {
			const newTask = [...tasks, inputValue]
			setTasks(newTask)
			setInputValue("")
			console.log(newTask)
		}
	}

	const handleDeleteTask = (taskIndex) => {
		const newTasks = tasks.filter((_, index) => index !== taskIndex);
		setTasks(newTasks);
	};
	return (
		<>
			<div className="container-fluid d-flex justify-self-center row">

				<div className="header col-12">
					<p className="text-center fs-1 mt-3 mb-3 text-secondary">
						TO DO
					</p>
				</div>

				<div className="container">
					<div className="row justify-content-center">
						<div className="col-sm-12 col-md-8">
							<div className="position-relative">
								<input
									type="text"
									className="form-control"
									placeholder="What needs to be done?"
									autoComplete="off"
									onChange={onInputChange}
									onKeyDown={onEnterPress}
									value={inputValue}
								/>
								<ul className="dropdown-menu w-100 show">
									{
										tasks.length > 0 ?
											tasks.map((task, index) => {
												return (
													<li key={`task-${index}`}
														className="d-flex align-items-center justify-content-between dropdown-item text-secondary"
														onMouseEnter={() => setHoveredIndex(index)}
														onMouseLeave={() => setHoveredIndex(null)}>

														<a key={"task-" + task[index]} className="text-secondary">{task}</a>

														{hoveredIndex === index && (
															<button className="btn btn-sm square btn-light" onClick={() => handleDeleteTask(index)}>X</button>

														)}

													</li>

												)
											}) :
											(
												<li><a key={"task-placeholder"} className="dropdown-item text-secondary">No hay tareas, añadir tareas</a></li>
											)
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;