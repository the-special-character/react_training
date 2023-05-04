const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P1 resolved");
      // reject("p1 rejected")
    }, 5000);
  });
};

// p1()
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("finally");
// })

const leftSection = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("leftSection resolve");
    }, 2000);
  });
};

const feedSection = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("feedSection resolve");
    }, 3000);
  });
};

const rightSection1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rightSection1 reject");
    }, 1000);
  });
};

const rightSection2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("rightSection2 resolve");
    }, 1000);
  });
};

const loadData = async () => {
  try {
    console.time("promise");

    const res = await Promise.allSettled([
      feedSection(),
      leftSection(),
      rightSection1(),
      rightSection2(),
    ]);

    console.log(res);
    // const leftRes = await leftSection();
    // console.log(leftRes);
    // const feedRes = await feedSection();
    // console.log(feedRes);
    // const rightRes1 = await rightSection1();
    // console.log(rightRes1);
    // const rightRes2 = await rightSection1();
    // console.log(rightRes2);
    console.timeEnd("promise");
  } catch (error) {}
};

loadData();

// const url =
//   "https://f462-2405-201-2032-c826-7cb0-ab82-69c1-fee6.ngrok-free.app";

// const loadData = async () => {
//   try {
//     const loginRes = await fetch(`${url}/login`, {
//       method: "POST",
//       body: JSON.stringify({
//         email: "yagnesh.modh@gmail.com",
//         password: "abcd",
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     }); // 5min
//     const loginData = await loginRes.json();
//     if(!loginRes.ok) {
//         throw new Error(loginData)
//     }
//     console.log(loginData);

//     const res = await Promise.all([
//         fetch(`${url}/660/products`, {
//             headers: {
//                 Authorization: `Bearer ${loginData.accessToken}`,
//             }
//         }),
//         fetch(`${url}/660/cart`, {
//             headers: {
//                 Authorization: `Bearer ${loginData.accessToken}`,
//             }
//         })
//     ])

//     // console.log(res);

//     const productsJson = await res[0].json();

//     console.log(productsJson);

//     const cartJSON = await res[1].json();

//     console.log(cartJSON);

//     // const jsonRes =

//     // const productsData = await productsRes.json();
//     // if(!productsRes.ok) {
//     //     throw new Error(productsData)
//     // }
//     // console.log(productsData);
//   } catch (error) {
//     console.log(error);
//   }
// };

// loadData();

// fetch(`${url}/login`, {
//   method: "POST",
//   body: JSON.stringify({
//     email: "yagnesh.modh@gmail.com",
//     password: "abcd",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// })
// .then(res => {
//     const data = res.json();
//     return data;
// })
// .then(json => {
//     console.log(json);
//     fetch(`${url}/660/products`, {
//         headers: {
//             Authorization: `Bearer ${json.accessToken}`,
//         }
//     })
//     .then(res => {
//         if(!res.ok){
//             throw new Error("Something went wrong....")
//         }
//         return res.json();
//     })
//     .then(json => {
//         console.log(json);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {
//     console.log(err);
// })
// .finally(() => {

// });
