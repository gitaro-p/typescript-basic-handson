import World from './world'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello World!!!')
world.sayHello(root)

//基本の型定義
//import { anySample, notExist, primitiveSample, unknownSample } from './basic'
//anySample()
//notExist()
//primitiveSample()
//unknownSample()