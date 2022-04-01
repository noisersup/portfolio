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
					<button className="btn">Hire Me</button>
				</div>
			</div>
			<div className='title-footer'>
			</div>
		</div>
	)
}
