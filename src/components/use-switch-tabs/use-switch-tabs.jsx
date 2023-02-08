import { useEffect, useRef } from 'react';
import { useSwitchTabsPropTypes } from '../../utils/components-prop-types';


const useSwitchTabs = (rootRef, currentRef, switchTab) => {

  const observer = useRef(null)
  useEffect(
    () => {

      const options = {
        root: rootRef.current,
        rootMargin: '0px',
        threshold: [0, 1.0]
      }

      const callbackFunctions = (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && entry.boundingClientRect.top < entry.intersectionRect.top) {
          switchTab()
        }
      }

      const current = currentRef.current

      observer.current = new IntersectionObserver(callbackFunctions, options)


      observer.current.observe(current)


      return () => {
        observer.current.unobserve(current)
      }
    }, [switchTab])
}

useSwitchTabs.propTypes = useSwitchTabsPropTypes.isRequired

export default useSwitchTabs
