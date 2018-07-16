
import shuffle from 'lodash.shuffle';
import customers from '../mock/customer.json';

export const fetchCustomers = makeError => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (makeError) {
      reject(new Error('Unexpected error has been occured'));
    } else {
      resolve({ status: 200, data: shuffle(customers), meta: { } });
    }
  }, 2000);
});

export default {
  fetchCustomers,
};
