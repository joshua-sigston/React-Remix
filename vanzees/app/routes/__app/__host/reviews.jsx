import { useOutletContext } from "@remix-run/react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ReviewsPage({ review }) {
    const { reviewScore } = useOutletContext();
    
    const fillOne = Math.floor((Math.random() * 100));
    const fillTwo = Math.floor((Math.random() * 100));
    const fillThree = Math.floor((Math.random() * 100));
    const fillFour = Math.floor((Math.random() * 100));
    const fillFive = Math.floor((Math.random() * 100));
    return (
        <section className="reviews_container grid">
            <h2>Your Reviews</h2>
            <p className="score"><span>{reviewScore}</span>/5 overall rating</p> 
            <div className="chart_container grid">
                <div className="col_one">
                    <p>5 stars</p>
                    <p>4 stars</p>
                    <p>3 stars</p>
                    <p>2 stars</p>
                    <p>1 stars</p>
                </div>
                <div className="col_two flex_column">
                    <div className="bar one">
                        <div className="fill" style={{width: fillOne}}></div>
                    </div>
                    <div className="bar two">
                        <div className="fill" style={{width: fillTwo}}></div>
                    </div>
                    <div className="bar three">
                        <div className="fill" style={{width: fillThree}}></div>
                    </div>
                    <div className="bar four">
                        <div className="fill" style={{width: fillFour}}></div>
                    </div>
                    <div className="bar five">
                        <div className="fill" style={{width: fillFive}}></div>
                    </div>
                </div>
                <div className="col_three">
                    <p>{fillOne}%</p>
                    <p>{fillTwo}%</p>
                    <p>{fillThree}%</p>
                    <p>{fillFour}%</p>
                    <p>{fillFive}%</p>
                </div>
            </div> 
            <div className="reviews grid">
                <div className="stars_container flex_row">
                    <FontAwesomeIcon icon={faStar} className="star"/>
                    <FontAwesomeIcon icon={faStar} className="star"/>
                    <FontAwesomeIcon icon={faStar} className="star"/>
                </div>
                <div className="info_container flex_column">
                    <p><span>Sam</span>, October 13, 2021</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos alias commodi odit recusandae id maxime et laborum asperiores vitae ab?</p>
                </div>
            </div>
        </section>
    )
}