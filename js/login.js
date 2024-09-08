async function login() {
  const username = document.getElementById("studentID").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(
      "https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/minhduc/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );

    const data = await response.json();
    const userId = data.id;

    // Handle successful login
    console.log(`Logged in successfully! User ID: ${userId}`);

    window.location('main.html'); 

  } catch (error) {
    console.error(`Error logging in: ${error.message}`);

  }
}