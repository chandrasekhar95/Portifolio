import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					 I'am V Chandra Sekhar i am from Andhra Pradesh.My 10th and inter graduated in my state.Currently i'am pursuing my B.TECH in Lovely Professional University(Punjab) 
					 Currently i'm in third year . i learnt lot of things in my university like some in education side other is how to survive life lonely to achieve goals.
					</p>
					<p className={styles.desc}>
						First oof all about my education is very good . i'm frontend web developer designed so many web pages like quiz web page,Shyariblog,contactform,lpu blog etc.
						and also learnt backend server side things and github project pull,push etc learnt.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="./images/profile.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;