import style from './index.module.scss';
import './index.scss';
import './assets/images/dog.jpg';

console.log(style); //использование объекта style важно для попадания стилей в css-бандл

const numbers: number[] = [2, 3, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // 4, 6, 10
