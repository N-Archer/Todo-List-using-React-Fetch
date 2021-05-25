import React, { useState } from "react";

export function Home() {
	const [inputValue, setInputValue] = useState("");
	const [toDoList, setToDoList] = useState([]);
	// useEffect(() => {
	// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/sofia")
	// 		.then(res => res.json())
	// 		.then(response => setToDoList(response))
	// 		.catch(error => console.error("Error:", error));
	// }, []);

	// const addToDo = input => {
	// 	if (input) {
	// 		setToDoList([...toDoList, input]);
	// 	} else {
	// 		alert("Add a Task");
	// 	}
	// };

	const deleteToDo = indexToRemove => {
		let alteredList = toDoList.filter((value, i) => i != indexToRemove);
		setToDoList(alteredList);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/sofia", {
			method: "PUT", // or 'POST'
			body: JSON.stringify(alteredList),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => console.log("Success:", response))
			.catch(error => console.error("Error:", error));
	};

	const addToDo = data => {
		setToDoList(
			toDoList.concat({
				label: data,
				done: false
			})
		);
		setInputValue("");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/sofia", {
			method: "PUT", // or 'POST'
			body: JSON.stringify(
				toDoList.concat({
					label: data,
					done: false
				})
			),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => console.log("Success:", response))
			.catch(error => console.error("Error:", error));
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
					My List <i className="fas fa-clipboard-list"></i>
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
									{value.label}
									<span>
										<i
											onClick={e => markDone(i)}
											className="fas fa-check"></i>
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
