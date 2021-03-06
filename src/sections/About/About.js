import './About.css'
import Heading from '../../components/Heading/Heading.js'
import Typical from 'react-typical';

export default function About () {
	return (
		<div className='about-container'>
			<Heading>About me</Heading>
			<div className='about-content h-wrapper'>
				<p>
				I am ambitious and passionate web developer, fascinated in <b>backend</b> technologies. Interested in
				software since the age of 13.<br/>
				On my daily basis, I spend 110% of my time on <span>
				<Typical
					className='about-interests'
					loop={Infinity}
					steps={["Backend development",1000,"Freelancing",1000,"Open source projects",1000,"Updating my dotfiles",1000,"IT Security",1000]}
				/>
				</span>
				<br/>and more...<br/>
				Located in <b>Warsaw, Poland</b> but also open for <b>remote work.</b><br/>
				Looking for collaboration? <a href="#contact">Contact me</a>! I usually reply within a few hours. 
				</p>
				<Techstack
					stack={[
						{name: 'Go'},
						{name: 'Linux'},
						{name: 'NixOS'},
						{name: 'React.js'},
						{name: 'Docker'},
						{name: 'Kubernetes'},
						{name: 'Version Control'},
						{name: 'Redis'},
						{name: 'RabbitMQ'},
						{name: 'MongoDB'},
						{name: 'CockroachDB'},
						{name: 'PostgreSQL'},
					]}
					more={["Python","Java","C#","Ansible","AWS","gRPC","Solidity", "Unity","C++","Vue.js"]}
				/>
			</div>
		</div>
	)
}

export function Techstack(props){
	let more = []
		more.push(800)
	props.more.forEach((name)=>{
		more.push(name)
		more.push(1000)
	})
	more.push("and more...")
	more.push(1200);
	return(
		<div className='techstack-container h-wrapper'>
			<h2>Technologies I used...</h2>
			<div className='techstack-content'>
				<div className='techstack-grid'>
					{props.stack.map(function(tech, i){
						return (
							<div className={'tech'+ (i%2==0 ? '' : ' left')}>
								<div className='tech-name'>{tech.name}</div>
							</div>
						);
					})}
				</div>
				<div className='techstack-more'>
					<h3>I also have experience with:</h3>
					<div className="techstack-more-content">
					  <Typical 
						  loop={Infinity}
						  steps={more}
					  />
					</div>
				</div>
			</div>
		</div>
	);
}

