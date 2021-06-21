console.log('Задача 2')


function summ(a, b, c=0) {
    return a + b + c;
  }
function memoize(func,timer) {
    let clearSetTimeout
    let result
    let map = new Map();

    return (...args) => {
        const value = args.reduce((s,e) => s + `,${e}`, 'value')
        if (map.has(value)) {
            console.log('Значение взято из кеша', map.get(value).result)
            clearTimeout(map.get(value).clearSetTimeout)
            map.get(value).clearSetTimeout = setTimeout(() => {
                console.log(`double Кеш для значений ${value} очищен `)
                map.delete(value)
            }, timer);
            return map.get(value);
        }
        result = func(...args);
        map.set(value, {
            result,
            clearSetTimeout
            }
            )
        console.log('Вычисляем новое значение', result)
        console.log('Сохраняем кеш', map)
        if (timer) {
            map.get(value).clearSetTimeout = setTimeout(() => {
                console.log(`start Кеш для значений ${value} очищен `)
                map.delete(value)
            }, timer);
        }
        return result;
    };
}
  
const memoizeSumm = memoize(summ, 10000);
  
memoizeSumm(1, 3, 5);
memoizeSumm(1, 3, 5);

setTimeout(() => {
        memoizeSumm(1, 3, 5);
    }, 5000);
  
setTimeout(() => {
        memoizeSumm(3, 5);
    }, 5000);

setTimeout(() => {
        memoizeSumm(3, 5);
    }, 8000);

setTimeout(() => {
        memoizeSumm(1, 3, 5);
    }, 9000);