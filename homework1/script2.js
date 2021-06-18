console.log('Задача 2')

function summ(a, b) {
    return a + b;
  }
function memoize(func,timer) {
    let cache = {};
    let result

    return (value1, value2) => {
        if (value1 in cache && value2 in cache) {
            console.log('Значение взято из кеша', result)
            return cache['result'];
        }
        result = func(value1, value2);
        cache = {}
        cache[value1] = value1;
        cache[value2] = value2;
        cache['result'] = result;
        console.log('Вычисляем новое значение', result)
        console.log('Сохраняем кеш', cache)
        if (timer) {
            setTimeout(() => {
                cache = {}
                console.log('Кеш очищен')
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
    }, 11000);

setTimeout(() => {
        memoizeSumm(3, 5);
    }, 15000);

setTimeout(() => {
        memoizeSumm(3, 5);
    }, 22000);