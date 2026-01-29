* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Georgia", serif;
}

html, body {
  width: 100%;
  height: 100%;
}

/* Background image */
.bg {
  position: fixed;
  inset: 0;
  background: url("mahadev.jpeg") center / cover no-repeat;
  z-index: 0;
}

/* Dark overlay */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1;
}

/* Main container */
.container {
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

/* Main quote */
.text h1 {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: #ffffff;
  margin-bottom: 15px;
}

.text p {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 10px;
}

.text span {
  color: #ff6b6b;
  font-size: 1.1rem;
  font-style: italic;
}

/* Choices */
.choices {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.choices button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 12px 22px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.choices button:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Result text */
.result {
  color: white;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  max-width: 600px;
  line-height: 1.6;
  animation: fadeIn 1s ease forwards;
}

/* Hidden */
.hidden {
  display: none;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile spacing */
@media (max-width: 600px) {
  .choices {
    flex-direction: column;
  }
}
