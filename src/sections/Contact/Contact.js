import './Contact.css'
import Heading from '../../components/Heading/Heading.js'
import fontawesome  from '@fortawesome/fontawesome'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'


fontawesome.library.add(faTwitter, faEnvelope);

export default function Contact(){
	return (
		<div className='contact-container' id='contact'>
				<div className='contact-content'>
					<Heading inv>Contact</Heading>
					<div className='contact-horizontal'>
						<div className='contact-note'>
							<h3>You can find me here:</h3>
						</div>
						<div className='contact-info'>
							<Social icon={
								<FontAwesomeIcon icon={'fas fa-envelope'} />
							} text="patryk@kwiatek.xyz" url="mailto:patryk@kwiatek.xyz"/>

							<Social icon={
								<FontAwesomeIcon icon={'fab fa-github'} />
							} text="noisersup" url="https://github.com/noisersup"/>

							<Social icon={
								<FontAwesomeIcon icon={'fab fa-linkedin'} />
							} text="Patryk Kwiatek" url="https://linkedin.com/in/noisersup"/>

							<Social icon={
								<FontAwesomeIcon icon={'fab fa-twitter'} />
							} text="@noisersup" url="https://twitter.com/noisersup"/>

						</div>
					</div>
				</div>
		</div>
	)
}

export function ContactForm(){
	return (
		<div>
			<form>
				<input type="text"/>
				<input type="email"/>
				<input type="text"/>
				<input type="submit"/>
			</form>
	</div>
	)
}
export function Social(props){
	return(
		<div className='contact-social'>
			<div className='social-icon'>{props.icon}</div>
			<a href={props.url}>{props.text}</a>
		</div>
	)
}
