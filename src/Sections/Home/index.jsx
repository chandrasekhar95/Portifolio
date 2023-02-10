import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>VALLURU CHANDRA SEKHAR</h1>
			<h1 className={styles.heading_2}>I build things for the web.</h1>
			<p className={styles.desc}>
				I'm completed the quiz web page on react js that works with help of React,Javascript,css etc.
				It works like quiz app in this page we have to reset the game and if you feel exit 
				that option also there.I inserted such a feel good questions in this project i built such a amazing things users are feel
				like real quiz app i also added some bootstrap,mongodb etc.
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;