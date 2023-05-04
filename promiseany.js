const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p1 reject");
    }, 2000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p2 reject");
    }, 3000);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p3 reject");
    }, 5000);
  });
};

const p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p4 reject");
    }, 2000);
  });
};

const loadData = async () => {
  try {
    console.time("promise");
    const res = await Promise.any([p1(), p2(), p3(), p4()]);
    console.log(res);
    console.timeEnd("promise");
  } catch (error) {
    console.log(error);
  }
};

loadData();

//   all
//  allSettled
//  race
//  any
