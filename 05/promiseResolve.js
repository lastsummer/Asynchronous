function logToConsole(somePromise){
  somePromise.then(value=> console.log(value))
}
const somePromise = new Promise(
  (resolve, reject) => resolve('Hello')
)
logToConsole(somePromise)

const value = 'string'

const resolvedPromise = Promise.resolve(value)
logToConsole(resolvedPromise)

const rejectedPromise = Promise.reject(new Error('some error'))
