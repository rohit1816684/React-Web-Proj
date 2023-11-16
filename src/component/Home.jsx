import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>Techantra</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are Your one and only solution to the tech problems
                        you face every day.
                        We are leading tech company whose aim is to increase the problems solving ability in chidren.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus veniam ullam quam accusantium earum nisi. Nemo reprehenderit repudiandae quis vel quae aut. Incidunt, illum dolorem commodi odio quisquam rerum quo.
                        Quasi ipsum autem minus atque fugit ipsa aliquam dolore modi, non placeat iusto nobis pariatur ullam optio temporibus dolor excepturi,quis vel quae aut. Incidunt, illum dolorem commodi odio quisquam rerum quo.
                        totam ipsam nemo? Reiciendis laboriosam minus placeat aut dicta unde perspiciatis, sit libero illum mollitia deleniti maiores incidunt consectetur autem, molestiae earum, architecto commodi tempore temporibus iusto 
                        quae officia. Beatae fuga, voluptates quos assumenda aspernatur neque non in, ipsum atque tempore rerum mollitia unde fugit iusto quo nesciunt dolorem cupiditate corporis asperiores officiis maxime odio, 
                        consequuntur impedit culpa? Alias, cum fugit molestiae voluptatibus perspiciatis laudantium magni facere inventore a ipsam. Quisquam vitae quia soluta voluptatem sequi ex repudiandae natus enim repellendus, eligendi 
                        excepturi est quo consequatur suscipit ratione modi quos dolore consequuntur! Consectetur tempore optio atque,
                        quam autem quis incidunt perspiciatis itaque.</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brand</h1>
                    <article>
                        <div>
                            <div style={{
                                animationDelay:"0.3s"
                            }}></div>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>

                        <div>
                            <div style={{
                                animationDelay:"0.5s"
                            }}></div>
                            <AiFillAmazonCircle/>
                            <p>Amazaon</p>
                        </div>

                        <div>
                            <div style={{
                                animationDelay:"0.7s"
                            }}></div>
                            <AiFillYoutube/>
                            <p>YouTube</p>
                        </div>

                        <div>
                            <div style={{
                                animationDelay:"1s"
                            }}></div>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>

        </>
    )
}

export default Home
