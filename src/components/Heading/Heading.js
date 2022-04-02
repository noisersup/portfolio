import './Heading.css';

export default function Heading(props){
	return(
		<div className="heading-container">
			<h1>{props.children}</h1>
			<div className="header-seperator">
				<div className="seperator-line"></div>
				<div className="seperator-blob"><div></div></div>
			</div>
		</div>
	)
}
