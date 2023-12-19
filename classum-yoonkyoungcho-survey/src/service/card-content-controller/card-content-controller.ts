import { atom, selector, useRecoilState, useSetRecoilState } from 'recoil';

interface cardContentTypes {
    type:string;
    index:number;
    title:string;
    desc:string;
    essential:boolean;
    radio?:"1"|"2";
    radioContent?:string[];
    checked?:string[];
    checkContent?:string[];
    text?:string;
}

export const contentState = atom<cardContentTypes>({
    key: 'cardContent',
    default: {
        type:'radio',
        index:0,
        title:'질문',
        desc:'설명을 쓰시오',
        essential:false, 
        radio:"1",
        radioContent:['',''],
        checked:['unchecked','unchecked'],
        checkContent:['',''],
    }
});


export const currentCard = atom<number>({
    key: 'cardIndex',
    default:-1
});

export const cardsState = atom<any[]>({
    key: 'cardList',
    default:[]
});


export const contentSelector = selector({
    key:'setType',
    get: ({ get }) => {
        // const list = get(cardsState).map((item:any)=>item.index == get(currentCard)?{...item,type:"long"}:item)
        return get(cardsState);
    },
    set: ({ set,get }, newValue:any) => {
        let list: any[];
        list = get(cardsState).map((item:any)=>item.index == newValue.id?{...item,[newValue.key]:newValue.val}:item)
        set(cardsState, list);
    },

})

