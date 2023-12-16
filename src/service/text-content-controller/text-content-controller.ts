import { atom } from 'recoil';

interface textContentTypes {
    short:string;
    long:string;
}

export const textState = atom<textContentTypes>({
    key: 'textStyle',
    default: {
        short:'단답형 텍스트',
        long:'장문형 텍스트',
    }
});
export const textContentState = atom<any[]>({
    key: 'textContent',
    default: []
});

