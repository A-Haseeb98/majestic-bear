import Men from '../../assets/men.PNG'

import './index.css'

function TeamPage() {
    return (
        <div id='artist' className="artist_container artist_container2">
            <div className='main_heading_wrapper'>
                <h1>PETER DENNELIS
                    <h2>PETER DENNELIS</h2>
                </h1>
            </div>
            <div className='about_sub_container artist_sub men_sub'>
                <div className='img_contaier'>
                    <img alt='bear' loading='lazy' src={Men} />
                </div>
                <div className='content_container'>
                    <p className='theme_text peter_text'>Peter worked for famous studios such as Disney, Warner Bros, Universal and other well-known studios. If you’ve seen Jurassic Word (2018), Suicide Squad (2016)

                    <br/>
                    <br/>

                        …You’ve seen the high quality animation and 3D character design Peter brings to the table under the direction of the biggest designer of the world.


                    <br/>
                        <br/>

                        Animation and 3D design is a real passion for him; and being able to create large pieces of content out of nothing that have so much life and energy to them that creates a story with feeling and brings people emotions is so exciting for him. He strives to inspire people and bring them as much joy as possible with his art.

                    <br/>
                        <br/>


                        After hearing Peter’s story, we knew he’s the best artist we could find to help bring Majestic Bears to life.
                        <br/>
                        <br/>



                        He quickly saw it’s a project worthy of his pursuit of excellence and cultural influence.

                        <br/>

                        <br/>

                        While they each differ in style, fashion and backgrounds… Every Bears is a massive success of his own making. They’re bursting full of energy, ready to charge upward and take over the world as well as the Metaverse at a moment’s notice.
                        <br/>
                        <br/>



                        Supported by our team of investors, entrepreneurs, Blockchain experts, and marketing wizards, there’s no obstacle stopping The Majestic Bears.</p>
                </div>

            </div>

        </div>
    )
}

export default TeamPage;