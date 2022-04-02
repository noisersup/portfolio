import './Title.css'
import Typewriter from 'typewriter-effect';

export default function Title () {
	return (
		<div className="title-container">
			<div className='title-nav'>
				<nav></nav>
			</div>
			<div className='title-content'>
				<div className='cli-container'>
					<Typewriter
						options={{delay: 50}}
						onInit={(w)=>{
							w.typeString("Hello, I'm<br>noisers").changeDeleteSpeed(10).deleteChars(7)
							.typeString("<span class='cli-firstname'>Patryk</span>").pauseFor(800)
							.typeString("<br><span class='cli-comment'>#also known as noisersup</span>").start();
						}}
					/>
				</div>
				<div className='title-btns'>
					<button className="btn" onClick={()=>{
						document.getElementById('contact').scrollIntoView();
					}}>Hire Me</button>
				</div>
			</div>
			<div class="custom-shape-divider-bottom-1648840680">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
				</svg>
			</div>
		</div>
	)
}
