import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.circle} />
      <h1 className={styles.title}>roundu</h1>
      <p>
        Home is more than four walls—it’s the streets you walk, the spaces you
        gather in, and the places that shape your daily life. When these spaces
        feel neglected or uninspired, it affects everyone who moves through
        them. But with the right people and ideas, they can become something
        more.
      </p>
      <p>
        <strong>roundu</strong> is a platform for bringing local ideas to life.
        It connects people who want to improve their surroundings with others
        who have the skills, time, or resources to help. Whether you have a
        vision for your neighborhood or want to support someone else’s,{" "}
        <strong>roundu</strong>
        makes collaboration easy.
      </p>
      <p>
        A blank wall could turn into a mural, an empty lot into a pop-up market,
        a forgotten corner into a community garden. Whether it’s setting up
        public grill areas, adding street art, or building birdhouses, small
        changes can bring life to shared spaces and make them feel like home.
      </p>
      <p>
        Find others who share your vision, offer your skills, or pitch in with
        resources to bring ideas to life. Every contribution, big or small,
        helps shape the places we all call home.
      </p>
    </main>
  );
}
