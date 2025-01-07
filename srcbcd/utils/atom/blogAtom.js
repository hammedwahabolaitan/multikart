import {atom} from 'recoil'
import {recoilPersist} from 'recoil-persist'

const {persisAtom} = recoilPersist({
key: 'recoil-persist',
storage:sessionStorage

})

export const blogState =atom({
    key:'blog',
    default: [],
    effects_UNSTABLE: [persisAtom]

})