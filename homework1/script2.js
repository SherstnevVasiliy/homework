console.log('Задача 2')

function summ(a, b) {
    return a + b;
  }
function memoize(func,timer) {
    let result
    let map = new Map();

    return (value1, value2) => {
        if (map.has(`${value1},${value2}`)) {
            console.log('Значение взято из кеша', map.get(`${value1},${value2}`))
            return map.get(`${value1},${value2}`);
        }
        result = func(value1, value2);
        map.set(`${value1},${value2}`, result)
        console.log('Вычисляем новое значение', result)
        console.log('Сохраняем кеш', map)
        if (timer) {
            setTimeout(() => {
                console.log(`Кеш для значений ${value1},${value2} очищен `)
                map.delete(`${value1},${value2}`)
            }, timer);
        }
        return result;
    };
}
  
const memoizeSumm = memoize(summ, 10000);
  
memoizeSumm(1, 3);
memoizeSumm(1, 3);

setTimeout(() => {
        memoizeSumm(1, 3);
    }, 5000);
  
setTimeout(() => {
        memoizeSumm(3, 5);
    }, 5000);

setTimeout(() => {
        memoizeSumm(3, 5);
    }, 8000);

setTimeout(() => {
        memoizeSumm(1, 3);
    }, 9000);