import './Projects.css'
import Heading from '../../components/Heading/Heading.js'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Projects(){
	return (
		<div className='projects-container'>
			<Heading>Projects</Heading>
			<div className='projects-content'>
					<Project
						title='File Storage'
						img='/filestorage.gif'
						tech={["Go","REST API","Redis","Cockroach","React","docker"]}
						url='https://github.com/noisersup/file-storage'>
							An encrypted file storage made in <b>Go</b> with user
							authentication system based on <b>Redis</b> cache.
							Implemented memory optimized <b>multipart
							</b> upload allowing to handle large files.
							Conceptualized and realized a system where all
							encrypted files are stored in one directory and
							whole filetree is recreated and stored in <b>
							Cockroachdb</b>
							<br/><b>React.js</b> frontend
					</Project>
					<Project
						title='Ledyt'
						left
						tech={["Go","API","Reverse-engineering","bubbletea"]}
						img='/ledyt.gif'
						url='https://github.com/noisersup/ledyt'>
						Minimalist CLI youtube client written in <b>Go</b> for
						efficient and lightweight content playback in MPV.<br/>
						Powered by <b>bubbletea</b> framework
					</Project>
					<Project
						title='CHIP-8'
						tech={["Go","Emulation","Binary","OpenGL"]}
						img='/chip8.gif'
						url='https://github.com/noisersup/file-storage'>

						An emulator of the CHIP-8 platform made in <b>Go
						</b> with display in <b>OpenGL</b>
					</Project>
					<div className='projects-more-container'>
							<button onClick={()=>{
								window.open("https://github.com/noisersup")
							}}>and more...</button>
					</div>
			</div>
			<div class="custom-shape-divider-bottom-1648840681">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
				</svg>
			</div>
		</div>
	);
}

export function Project(props){
	return (
		<div className={"project-container"+ (props.left ? '' : ' left')}>
			<img src={props.img}></img>
			<div className='project-content'>
				<div className='project-title-container'>
					<h2 className="project-title">{props.title}</h2>
					<a href={props.url}><FontAwesomeIcon icon={'fab fa-github'} /></a>
				</div>
				<div className='desc-container'>
					<p>{props.children}</p>
				</div>
				<div className='projects-techstack'>
					{props.tech.map(function(tech){
						return (
							<div className='projects-tech'>{tech}</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
