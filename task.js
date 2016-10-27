// ----1----
// create tasks that will
// generate such files from src files

// dist/bar.js
console.log('barA');
console.log('barB');
console.log('bazB');
console.log('bazC');

// dist/foobar.js
console.log('fooA');
console.log('fooB');
console.log('fooC');
console.log('barA');
console.log('barB');

// dist/all.js
console.log('fooA');
console.log('fooC');
console.log('barA');
console.log('barB');
console.log('bazB');
console.log('bazC');

// ----2----
// update previous tasks to uglify results

// ----3----
// create task "default" that will 1st jshint
// then run all previous tasks

// ----4----
// configure "default" task to run all previous tasks,
// order of tasks matters!

// ----5----
// write watch task that will rerun "default" task

