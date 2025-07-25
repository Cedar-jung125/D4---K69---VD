import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

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
  const loginBtn = document.getElementById("login-btn");
  const protectedContent = document.querySelector("[data-auth-guard]");

  if (!user) {
    // Hiện nút login, ẩn nội dung chính
    loginBtn.style.display = "block";
    protectedContent.style.display = "none";

    loginBtn.onclick = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("✅ Logged in:", result.user.displayName);
        })
        .catch((err) => {
          console.error("❌ Login failed:", err.message);
        });
    };
  } else {
    // Ẩn nút login, hiện nội dung chính
    loginBtn.style.display = "none";
    protectedContent.style.display = "block";
    console.log("✅ Logged in as:", user.email);
  }
});

