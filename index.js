console.log('[line 1] Start point (1) sync');

new Promise((res) => {
    console.log('[line 4] Promise executor (2) async');
    setTimeout(() => {
        console.log('[line 6] SetTimeout call in promiseExecutor (6) webAPI');
        res();
    });
}).then(() => {
    console.log('[line 10] Promise.then call (7) async');
});

setTimeout(() => {
    console.log('[line 14] SetTimeout in global scope (9) webAPI');
}, 1000);

setImmediate(() => {
    console.log('[line 18] setImmediate in global scope (8) NodeAPI');
});

process.nextTick(() => {
    console.log('[line 22] process.nextTick (4) NodeAPI');
});

queueMicrotask(() => {
    console.log('[line 26] queueMicrotask (5) NodeAPI');
});

console.log('[line 25] End point (3) sync');

//line 1, так как это начало скрипта
// line 4, так как это продолжение скрипта
//line 25, так как это завершение скрипта
//line 22, так как после завершения скрипта вызывается nextTick
//line 26, так как после завершения тиков вызываются microTasks
//line 6, так как вызывается после завершения всего скрипта и это первый setTimeout без времени
//line 10, так как продолжается выполнение promiss'а
//line 18, так как продолжение скрипта и вызывается немедленно после завершения предыдущего скрипта
//line 14, так как установлен Timeout 1000, если было бы 0, то вызвался бы до setImmediate