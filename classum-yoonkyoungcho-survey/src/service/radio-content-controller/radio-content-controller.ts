import { atom } from 'recoil';

interface radioContentTypes {
    count:number;
    content:string[];
}

export const radioState = atom<radioContentTypes>({
    key: 'radioContent',
    default: {
        count:2,
        content:[]
    }
});

