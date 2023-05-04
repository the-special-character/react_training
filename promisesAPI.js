fetch("http://localhost:3000/login", {
  method: "POST",
  body: JSON.stringify({
    email: "yagnesh.modh@gmail.com",
    password: "abcd",
  }),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(json);
    fetch("http://localhost:3000/660/products", {
      headers: {
        Authorization: `Bearer ${json.accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("something went wrong...");
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
