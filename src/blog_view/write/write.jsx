import React, { useState, useEffect } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "../styles/write/write.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../profile/navbar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const editorConfiguration = {
	toolbar: {
		items: [
			"heading",
			"|",
			"undo",
			"redo",
			"bold",
			"italic",
			"underline",
			"highlight",
			"|",
			"todoList",
			"bulletedList",
			"numberedList",
			"alignment",
			"horizontalLine",
			"|",
			"fontColor",
			"fontSize",
			"fontFamily",
			"fontBackgroundColor",
			"|",
			"subscript",
			"superscript",
			"|",
			"outdent",
			"indent",
			"findAndReplace",
			"|",
			"link",
			"blockQuote",
			"insertTable",
			"mediaEmbed",
			"codeBlock",
			"pageBreak",
			"sourceEditing",
		],
	},
	language: "en",
	image: {
		toolbar: [
			"imageTextAlternative",
			"imageStyle:inline",
			"imageStyle:block",
			"imageStyle:side",
			"linkImage",
		],
	},
	table: {
		contentToolbar: [
			"tableColumn",
			"tableRow",
			"mergeTableCells",
			"tableCellProperties",
			"tableProperties",
		],
	},
	licenseKey: "",
	placeholder: "Type or past your content here...",
};

function Write(props) {
	const [title, setTitle] = useState("");
	const [excerpt, setExcerpt] = useState("");
	const [content, setContent] = useState("");
	const [file, setFile] = useState(null);
	const [cats, setCats] = useState(["old"]);
	const [categs, setCategs] = useState([]);
	const [length, setLength] = useState(0);

	const lengthList = Array.from(Array(60).keys());

	useEffect(() => {
		const getCats = async () => {
			let catss = await axios.get("http://bloghub-1.herokuapp.com/api/categories");
			setCats(Array.from(catss.data));
		};
		getCats();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			category: categs,
			title: title,
			subtitle: excerpt,
			length: length,
			content: content,
			author: {
				name: props.user.username,
				id: props.user._id,
				profilePic: props.user.ProfilePic,
			},
		};
		try {
			newPost.Img = "https://cdn.wallpapersafari.com/4/72/Kajk73.jpg";
			const res = await axios.post("http://bloghub-1.herokuapp.com/api/posts", newPost);

			if (file) {
				const data = new FormData();
				const filename = Date.now() + file.name;
				data.append("name", filename);
				data.append("file", file);
				try {
					await axios.post(`http://bloghub-1.herokuapp.com/${res.data._id}/upload`, data);
				} catch (err) {
					console.log(err);
				}
			}
			window.location.replace("/post/" + res.data._id);
		} catch (err) {
			console.log(err);
		}
	};

	function handleSelectTag(e) {
		if (categs.length < 3) {
			setCategs([...categs, e.target.value]);
		} else {
			alert("You can't choose more than 3 categories");
		}
	}

	function handleSelectLength(e) {
		setLength(e.target.value);
	}

	function deleteCateg(e) {
		let name = e.target.attributes.name.value;
		const newList = categs.filter((item) => item !== name);
		setCategs(newList);
	}

	return (
		<>
			<Navbar user={props.user} />
			<form
				action=""
				id="write__container"
				method="post"
				className="write__container"
				onSubmit={handleSubmit}
			>
				<div
					contentEditable
					className="write__title"
					name="title"
					data-ph="Enter your title..."
					onInput={(e) => setTitle(e.target.textContent)}
				></div>
				<div
					contentEditable
					className="write__excerpt"
					name="excerpt"
					data-ph="Enter your subtitle..."
					onInput={(e) => setExcerpt(e.target.textContent)}
				></div>
				<div className="write__image" name="excerpt">
					{file ? (
						<img className="cover__img" src={URL.createObjectURL(file)} alt="" />
					) : (
						<label htmlFor="upload__image" className="label">
							<FontAwesomeIcon icon={faImage} className="upload" />
							Upload your cover image...
						</label>
					)}

					<input onChange={(e) => setFile(e.target.files[0])} type="file" id="upload__image" />
				</div>

				<div className="editor__container">
					<CKEditor
						className="ckeditor"
						editor={Editor}
						config={editorConfiguration}
						data=""
						onReady={(editor) => {
							// You can store the "editor" and use when it is needed.
						}}
						onChange={(event, editor) => {
							const data = editor.getData("text/html");
							setContent(data);
						}}
						onBlur={(event, editor) => {}}
						onFocus={(event, editor) => {}}
					/>
				</div>
				<div className="select__con">
					<label htmlFor="cat-select">Standard at most 3 categories</label>
					<div className="select">
						<select onChange={handleSelectTag} name="cats" id="cat-select" form="write__container">
							{cats.map((cat, index) => {
								return (
									<option key={index} value={cat.name}>
										{cat.name}
									</option>
								);
							})}
						</select>
						<span className="focus"></span>
					</div>
				</div>

				<div className="cat__buttons">
					{categs.map((categ, index) => {
						return (
							<p type="text" onClick={deleteCateg} key={index} name={categ}>
								{categ.charAt(0).toUpperCase() + categ.slice(1)}
							</p>
						);
					})}
				</div>

				<div className="select__con second">
					<label htmlFor="cat-select">What is the average reading time ?</label>
					<div className="select">
						<select
							onChange={handleSelectLength}
							name="cats"
							id="cat-select"
							required
							form="write__container"
						>
							{lengthList.map((num, index) => {
								return (
									<option key={index} value={num}>
										{num}
									</option>
								);
							})}
						</select>
						<span className="focus"></span>
					</div>
				</div>

				<div className="form__buttons">
					<button>Save as draft</button>
					<button type="submit">Publish</button>
				</div>
			</form>

			<div className="footer">
				<Link to="/">
					<h1 id="blogHub">BlogHub</h1>
				</Link>
				<div className="footer__links">
					<p>About</p>
					<p>Help</p>
				</div>
			</div>
		</>
	);
}

export default Write;
