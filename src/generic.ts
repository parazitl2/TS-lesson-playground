// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ['Ford', 'Audi']

// const promise: Promise<number> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(42);
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data);
// });

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b);
};

const merged = mergeObjects({ name: 'Vaso' }, { age: 26 });
const merged2 = mergeObjects({ model: 'Ford'}, { year: '2010' });

// const merged3 = mergeObjects({ a: 1 }, 'bbb');
// console.log(merged3);

// ================

interface ILength{
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `Here are ${value.length} symbols.`
  }
}

// console.log(withCount('Ghbdtn!'))

// ================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: "Valera",
  age: 26,
  job: 'JS'
};

// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));

// =================

class Collection<T> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item);
  }

  get items(): T[] {
    return this._items;
  }
}

const strings = new Collection<string>(['I', 'TO', 'YOU']);
strings.add('!');
strings.remove('TO');
console.log(strings.items);

const numbers = new Collection<number>([1, 2, 3]);
numbers.add(2);
numbers.remove(3);
console.log(numbers.items);