import names from 'starwars-names';

const NamesResource = {
  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(names.all);
      }, 1234);
    });
  },
};

export default NamesResource;
