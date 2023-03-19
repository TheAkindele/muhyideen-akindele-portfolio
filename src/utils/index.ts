export * from "./interfaces";

export const darkThemeSwitch = "https://ipfs.io/ipfs/QmbWfqZhmajhpcJxxSvwqRC6kpfLbd87XHfPkXAyVGubT9"
export const lightThemeSwitch = "https://ipfs.io/ipfs/QmZzRSTjbDWkniJ5581aqkFQQAVqQXe5TgSrYa4jtjbQXx"

export const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

// export const anchor = (id: null | HTMLDivElement) => document.querySelector(id)


