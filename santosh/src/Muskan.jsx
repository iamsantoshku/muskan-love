import React, { useState } from "react";
import { motion } from "framer-motion";
import santosh from "./assets/santosh.jpg";
import muskanImg from "./assets/muskan.jpg";

const Muskan = () => {

  const [accepted, setAccepted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });


const moveNoButton = (e) => {

  const isMobile = window.innerWidth < 768;

  // Bigger movement on mobile
  const moveRangeX = isMobile
    ? window.innerWidth * 0.8
    : window.innerWidth * 0.4;

  const moveRangeY = isMobile
    ? window.innerHeight * 0.6
    : window.innerHeight * 0.3;

  const x = Math.random() * moveRangeX - moveRangeX / 2;
  const y = Math.random() * moveRangeY - moveRangeY / 2;

  setPosition({ x, y });
};
  



if (accepted) {

return (
      <div style={styles.container}>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            color: "#00ff88",
            textShadow: "0 0 20px #00ff88"
          }}
        >
          💍 She Said YES ❤️
        </motion.h1>

        {/* Couple Images */}
        <div style={styles.imageContainer}>

          <motion.img
            src={santosh}
            alt="Santosh"
            style={styles.image}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={styles.heart}
          >
            ❤️
          </motion.div>

          <motion.img
            src={muskanImg}
            alt="Muskan"
            style={styles.image}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

        </div>

        <motion.p
          style={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          दो दिल ❤️ एक जान ✨ <br/>
          आज से नहीं... हमेशा से तुम मेरी हो 💕 <br/>
          अब हमारी कहानी नहीं, हमारी जिंदगी शुरू हो रही है 💍
        <br/> i Love you Muskan 🌹🌹🌹</motion.p>

      </div>
    );
}
  /* ================= PROPOSAL PAGE ================= */

  return (
    <div style={styles.container}>

      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        💖 Will You Be My Wife Muskan? 💖
      </motion.h1>

      <p style={styles.text}>
        From the moment I met you,<br/>
        my world became beautiful 🌸<br/>
        My happiness begins with you ❤️💖
      </p>

      <div style={styles.buttons}>

        <motion.button
          whileHover={{ scale: 1.2 }}
          style={styles.yes}
          onClick={() => setAccepted(true)}
        >
          YES ❤️
        </motion.button>


<motion.button
  animate={{ x: position.x, y: position.y }}
  transition={{ type: "spring", stiffness: 300 }}
  onMouseEnter={moveNoButton}
  onTouchStart={moveNoButton}  
  onClick={(e) => {
    e.preventDefault();
    moveNoButton();
  }}
  style={styles.no}
>
  NO 😅
</motion.button>
      </div>

    </div>
  );
};

export default Muskan;


/* ================= STYLES ================= */

const styles = {

  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#ff758c,#ff7eb3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    padding: "20px",
    overflowX: "hidden",
  },

  text: {
    fontSize: "clamp(16px, 3vw, 24px)",
    marginTop: "20px",
    lineHeight: "1.6",
    maxWidth: "600px",
  },

  buttons: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },

  yes: {
    padding: "14px 30px",
    fontSize: "18px",
    borderRadius: "30px",
    border: "none",
    background: "#ff1744",
    color: "white",
    cursor: "pointer",
  },

  no: {
    padding: "14px 30px",
    fontSize: "18px",
    borderRadius: "30px",
    border: "none",
    background: "white",
    cursor: "pointer",
  },

  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    marginTop: "40px",
  },

  image: {
    width: "clamp(150px, 30vw, 220px)",
    height: "clamp(150px, 30vw, 220px)",
    objectFit: "cover",
    borderRadius: "50%",
    border: "5px solid white",
    boxShadow: "0 0 25px rgba(255,255,255,0.8)",
  },

  heart: {
    fontSize: "clamp(40px, 8vw, 70px)",
  },
};

