import React, { useState } from "react";

export function Home() {
	const [inputValue, setInputValue] = useState("");
	const [toDoList, setToDoList] = useState([]);

	const addToDo = input => {
		if (input) {
			setToDoList([...toDoList, input]);
		} else {
			alert("Add a Task");
		}
	};

	const deleteToDo = indexToRemove => {
		let alteredList = toDoList.filter((value, i) => i != indexToRemove);
		setToDoList(alteredList);
	};

	// const handleKeypress = e => {
	// 	//it triggers by pressing the enter key
	// 	if (e.keyCode === 13) {
	// 		addToDo();
	// 	}
	// };

	return (
		<div className="container">
			<div className="text-center mt-5 alert alert-secondary">
				<h1>
					My List <i class="fas fa-clipboard-list"></i>
				</h1>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="add task"
						aria-label="add task"
						aria-describedby="basic-addon2"
						onChange={e => setInputValue(e.target.value)}
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-secondary"
							type="button"
							id="button-addon2"
							onClick={() => addToDo(inputValue)}
							// onKeyPress={() => handleKeypress(inputValue)}
						>
							Add
						</button>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<ul className="col-12 ">
					{toDoList.map((value, index) => {
						return (
							<React.Fragment key={index}>
								<li className="d-flex justify-content-between alert alert-info">
									{value}
									<span>
										<i
											onClick={() => deleteToDo(index)}
											className="fas fa-trash"></i>
									</span>
								</li>
							</React.Fragment>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
