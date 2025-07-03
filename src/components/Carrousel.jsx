import { useState } from "react"

const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideWidth = 400

    const newImages = []
    newImages.push(images)
    // imagesValue.map(car =>
    //     newImages.push(car)
    // )
    console.log(newImages)

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const prevNext = () => {
        if (currentIndex < newImages.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }

        if (currentIndex === newImages.length - 1) {
            setCurrentIndex(0)
        }
    }

    const translateX = -currentIndex * slideWidth

    return (
        <div>
            <div className="carousel">
                <button onClick={prevCard} className="nav-button left"></button>
                <div className="carousel-track-container">
                    <ul
                        className="carousel-track"
                        style={{ transform: `translateX(${translateX}px)` }}
                    >
                        {/* {newImages.map((src, index) => (
                            <li className="carousel-slide" key={index}>
                                <img src={src} alt={`Slide ${index + 1}`} />
                            </li>
                        ))} */}

                    </ul>
                </div>
                <button onClick={prevNext} className="nav-button right"></button>
            </div>
        </div>
    )
}

export default Carrousel
