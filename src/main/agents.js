import React from 'react';
import '../css/styles.css';
import Button from '../components/molecules/button';

const Agents = () => {
    return (
        <div className='l agents'>
            <h2>NEW TO ALLEGIS?</h2>
            <div className='intro'>
                <p>Allegis is not just an office or agency. Allegis is integrity, teamwork, honesty, family. They have experts in each life insurance discipline to support us and will even help you make the sale to your client with you on the phone. They've got us covered providing seminar training, incentive trips, workshops, and even run illustrations for you. They are cordial, professional, driven, and their enthusiasm for our industry is positively contagious! They have made us a part of their family, and I want to welcome you to ours.</p>
                <p>First, let's get registered with Allegis to unlock more tools to help grow your business:</p>
                <Button name="I'M NEW TO ALLEGIS" />
            </div>
            <div className='quickLinks'>
                <div className='links'>
                    <h2>AGENT QUICK LINKS</h2>
                    <p>Already an agent and registered with Allegis? Use the links below for quick access to agent tools.</p>
                    <div className='buttonContainer'>
                        <div className='buttons'>
                            <Button name="CONTRACTING RESOURCES" />
                            <Button name="RUN MY TERM & GUL QUOTE" />
                            <Button name="CARRIER FORMS" />
                        </div>
                        <div className='buttons'>
                            <Button name="WINFLEX WEB" />
                            <Button name="UNDERWRITING GUIDELINES" />
                            <Button name="I'M NEW TO ALLEGIS" />
                        </div>
                    </div>
                </div>
                <div className='pic'>
                    <img src={require('../images/handshake.jpg')} alt='handshake' />
                </div>
            </div>
        </div>
    );
};

export default Agents;