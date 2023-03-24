import React, {useState, useEffect, useRef} from 'react'

interface Props {
  showElement: () => void
}


export const useIntersectionObserver = () => {
  const [targetRef, setTargetRef] = useState(null);
  const [visible, setVisible] = useState(false)

  // console.log("target ref-- ", targetRef)
  

  const containerRef = useRef(null)

  const options = {
    // root: null,
    rootMargin: "0px",
    threshold: 1
  }

  // const projectCards = document.querySelectorAll(".project_card-container")

  const observer = useRef(
		new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
        console.log("elemnent is intersecting")
        return setVisible(true)
			}
		}, {
      threshold: 1
    })
	);

  useEffect(() => {
		// const currentObserver = observer.current;

    const currentElement = targetRef;
		const currentObserver = observer?.current;

		if (currentElement) {
			currentObserver.observe(currentElement);
		}
		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [targetRef]);

  return { setTargetRef, visible };
}