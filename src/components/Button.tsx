import React, { ReactNode } from 'react'

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | ReactNode
  btnType: string
  onClick?: () => void
  prefix?: string
  suffix?: string
}

export const Button = ({btnType, prefix, suffix, text, onClick}: IButton) => {
  return (
    <button className={btnType === "primary" ? "button" : "sec-btn"} onClick={() => onClick && onClick()}>
      {prefix && (
        <img src={prefix} alt="" />
      )}
      <span className=''>{text}</span>
      {suffix && (
        <img src={suffix} alt="" />
      )}
    </button>
  )
}

// export const SecondaryButton = ({image, text, onClick}: IButton) => {
//   return (
//     <button className={`sec-btn`}
//       onClick={() => onClick && onClick()}
//     >
//       {image && (
//         <img src={image} alt="" />
//       )}
//       <span className='text-secondary'>{text}</span>
//     </button>
//   )
// } 