import React from 'react'
import '../sass/app.scss';
import Avatar from '../assets/avataaars.png'
import Image_simple from '../assets/Game Club B2yas.jpg'

const SocialCard = () => {
    return (
        <div className='social_card'>
            <img src={Image_simple} alt='Sample_image' />
            <div className='social_card_body'>
                <div>
                    <p>
                        @some_lego_guy
                        <br />
                        <span>Mar 14</span>
                    </p>
                    <img src={Avatar} alt='@some_lego_guy' /> 
                </div>
                <p>Here is a custom status with some text and stuff...</p>
                <div className='social_interactions'>
                    <p>
                        {/* <img src={Share} alt='Shares' /> 492 */}
                    </p>
                    <p>
                        {/* <img src={Retweet} alt='Retweets' /> 3,843 */}
                    </p>
                    <p>
                        {/* <img src={Heart} alt='Likes' /> 1,336 */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SocialCard