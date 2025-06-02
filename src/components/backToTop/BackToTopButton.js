import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";


// BackToTop Button
const BackToTopButton = () => {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect (() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        }, [])
    })

    // backToTopButton handler
    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div className="flex justify-center w-10 h-10 bottom-20 z-20 right-10 fixed ">
      {BackToTopButton && (
        <button className="text-4xl  text-blue-400" title='Scroll up' onClick={scrollup}>
            <FontAwesomeIcon icon={faAngleDoubleUp}/>
        </button>
        )
      }
    </div>
  )
}

export default BackToTopButton