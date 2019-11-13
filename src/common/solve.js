function crpr(timeout, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2) {
        resolve('OK')
      } else {
        reject(new Error('ERR'));
      }
    }, timeout);
  })
}

const when = (promises) => {
  return new Promise((resolve, reject) => {
    let count = 0;
    const errors = [];
    const results = [];
    promises.map((prm, idx) => {
      prm.catch(err => {
        return err;
      }).then(errOrValue => {
        if (errOrValue instanceof Error) {
          errors.push(errOrValue)
        } else {
          results.push(errOrValue);
        }
        count++;
        if (count == promises.length) {
          resolve({
            errors,
            results
          })
        }
      })
    })
  })
}
async function run() {
  let promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(crpr(1000, i));
  }

  let res = await when(promises)
  console.log(res);

  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }
}
run();