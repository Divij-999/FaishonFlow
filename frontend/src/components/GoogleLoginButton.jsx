// src/components/GoogleLoginButton.jsx
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // <-- FIXED import

export default function GoogleLoginButton() {
  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: "85697044950-oa9traj19e7fscno8ibsnblclbgskqsd.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("google-signin"),
        { theme: "outline", size: "large" }
      );
    }
  }, []);

  const handleCredentialResponse = (response) => {
    const token = response.credential;
    const userData = jwtDecode(token); // <-- FIXED

    console.log("User Info:", userData);
  };

  return <div id="google-signin"></div>;
}
