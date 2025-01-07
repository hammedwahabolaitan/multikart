import {atom} from 'recoil'
import {recoilPersist} from 'recoil-persist'

const {persistAtom} = recoilPersist({
key: 'recoil-persist',
storage:sessionStorage

})

export const nblogState =atom({
    key:'nblog',
    default: {},
    effects_UNSTABLE: [persistAtom]

})