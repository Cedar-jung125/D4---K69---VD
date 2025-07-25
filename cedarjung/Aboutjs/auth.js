import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD5Z6vQeAHQy4vP0tkTt-YiZ-aiFz0IHOs",
  authDomain: "class-d4---k69---vd.firebaseapp.com",
  projectId: "class-d4---k69---vd",
  storageBucket: "class-d4---k69---vd.appspot.com",
  messagingSenderId: "97705944134",
  appId: "1:97705944134:web:9f3b244ffe668dac5d9647",
  measurementId: "G-EJCD5PGHG1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
  const isIndex =
    window.location.pathname.includes("index.html") ||
    window.location.pathname.endsWith("/");

  if (user) {
    if (isIndex) {
      window.location.href = "cedarjung/home.html";
    }
  } else {
    if (!isIndex) {
      window.location.href = "index.html";
    }
  }
});

const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        window.location.href = "home.html";
      })
      .catch((error) => {
        alert("Đăng nhập thất bại: " + error.message);
      });
  });
}


