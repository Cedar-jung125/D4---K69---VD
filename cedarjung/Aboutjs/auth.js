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
  
  if (!user) {
    const loginBtn = document.getElementById("login-btn");
    loginBtn.style.display = "block"; // hiện nút nếu chưa đăng nhập
    loginBtn.onclick = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("✅ Logged in:", result.user.displayName);
          loginBtn.style.display = "none"; // ẩn nút sau khi đăng nhập
        })
        .catch((err) => {
          console.error("❌ Login failed:", err.message);
        });
    };
  } else {
    console.log("✅ Already logged in:", user.email);
  }
});
