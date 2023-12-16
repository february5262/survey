import { atom, useRecoilState, useSetRecoilState } from 'recoil';

interface cardContentTypes {
    type:string;
    index:number;
    title:string;
    desc:string;
    essential:boolean;
}

export const contentState = atom<cardContentTypes>({
    key: 'cardContent',
    default: {
        type:'short',
        index:0,
        title:'질문',
        desc:'설명을 쓰시오',
        essential:false, 
    }
});


export const currentCard = atom<number>({
    key: 'indexNum',
    default:0
});

export const cardsState = atom<any[]>({
    key: 'cardList',
    default:[]
});

