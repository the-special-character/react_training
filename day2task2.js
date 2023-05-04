const url =
  "https://f462-2405-201-2032-c826-7cb0-ab82-69c1-fee6.ngrok-free.app";

const loadData = async () => {
  try {
    const res = await Promise.all([
      fetch(`${url}/products`),
      fetch(`${url}/cart`),
    ]);
    const productsData = await res[0].json();
    console.log(productsData);
    const cartRes = await res[1].json();
    console.log(cartRes);
  } catch (error) {}
};

loadData();
