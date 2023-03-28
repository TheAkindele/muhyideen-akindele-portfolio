import {useState, useEffect, useRef, LegacyRef, RefObject} from 'react'

// interface Props {
//   showElement: () => void
// }


// export const useIntersectionObserver = () => {
//   const [targetRef, setTargetRef] = useState<LegacyRef<HTMLDivElement> | undefined>(null);
//   const [visible, setVisible] = useState(false)

//   // console.log("target ref-- ", targetRef)
  

//   const containerRef = useRef<HTMLDivElement>(null)

//   // const options = {
//   //   // root: null,
//   //   rootMargin: "0px",
//   //   threshold: 1
//   // }

//   // const projectCards = document.querySelectorAll(".project_card-container")

//   const observer = new IntersectionObserver((entries) => {
// 			const entry = entries[0];
// 			if (entry.isIntersecting) {
//         console.log("elemnent is intersecting")
//         return setVisible(true)
// 			}
// 		}, {
//       threshold: 1
//   })
	

//   useEffect(() => {
//     const currentElement = targetRef;
// 		const currentObserver = observer?.current;

// 		if (currentElement) {
// 			currentObserver.observe(currentElement);
// 		}
// 		return () => {
// 			if (currentElement) {
// 				currentObserver.unobserve(currentElement);
// 			}
// 		};
// 	}, [targetRef]);

//   return { setTargetRef, visible };
// }

export const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>{
      setIsOnScreen(entry.isIntersecting)
      // console.log("element is showing== ", isOnScreen)
    }, {
      threshold: 1
    });
  }, []);

  useEffect(() => {
    observerRef.current!.observe(ref.current!);

    return () => {
      observerRef.current!.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}