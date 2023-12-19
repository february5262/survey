import { atom } from 'recoil';

interface checkContentTypes {
    count:number,
    content:string[];
}

export const checkState = atom<checkContentTypes>({
    key: 'checkContent',
    default: {
        count:2,
        content:[]
    }
});

