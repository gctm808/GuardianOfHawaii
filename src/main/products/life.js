import React from 'react';
import Alq from './alq';
import Alq3 from './alq3';
import FormEngine from './formEngine';
import FormEngine3 from './formEngine3';
import '../../css/styles.css';
import TextButton from '../../components/molecules/textButton';


const Life = () => {
    return (
        <div className='l extraPadding'>
            <div>
                <h2>Establishing a Solid Simple Foundation</h2>
                <div className='lifeList'>
                    <div className='left'>
                        <p>Our life-long passion has been to help families establish solid financial foundations, starting with life insurance and offering long-term and personalized answers. Therefore, we unceasingly explore options that will complete our reputable life insurance portfolio, which include but are not limited to:</p>
                    </div>
                    <ul className='right'>
                        <li><i class="fas fa-check"></i>Universal Life</li>
                        <li><i class="fas fa-check"></i>Whole Life</li>
                        <li><i class="fas fa-check"></i>Term Life</li>
                        <li><i class="fas fa-check"></i>Survivorship Life</li>
                        <li><i class="fas fa-check"></i>Indexed Life</li>
                        <li><i class="fas fa-check"></i>Impaired Life</li>
                        <li><i class="fas fa-check"></i>Guarantee and simplified issue</li>
                        <li><i class="fas fa-check"></i>Small group life</li>
                    </ul>  
                </div>   
            </div>
            <div className='video-responsive'>
                <iframe title='lifeVid' src="//lifehappenspro.org/resources/embeded?userId=27409&videoId=5834859709001" width="360" height="371" scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
            </div>
            <h3>Life Insurance Calculators:</h3>
            <p>These life insurance calculators that will help to determine your life insurance needs:</p>
            <p>Agency Life Quote</p>
            <link href="https://alq.ixn.tech/css/reset.css" rel="stylesheet" type="text/css"></link>
            <Alq3 />
            <div id="ixn-agency-quoter">
                <div className="ixn-agency-quoter">
                    <div style={{position: 'relative'}}>
                    <div style={{background: 'rgb(249, 249, 249)', border: '1px solid rgb(229, 229, 229)', borderRadius: '4px', overflow: 'hidden'}}>
                        <div style={{padding: '30px', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '31%'}}>
                            <div style={{fontSize: '13px', fontWeight: 500, color: 'rgb(47, 59, 68)', marginBottom: '20px', display: 'flex', justifyContent: 'space-between'}}>Proposed Insured</div>
                            <div style={{marginLeft: '10px'}}>
                            <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>First Name</div>
                                </div>
                                <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)', fontSize: '14px', position: 'relative', height: '40px', lineHeight: '20px', padding: '10px'}}><input type="text" defaultValue style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px', backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', padding: '0px', margin: '0px', textIndent: '0px', boxShadow: 'none', outline: 'none', width: '100%', height: '20px', fontStyle: 'normal', appearance: 'none'}} /></div>
                            </div>
                            <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Last Name</div>
                                </div>
                                <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)', fontSize: '14px', position: 'relative', height: '40px', lineHeight: '20px', padding: '10px'}}><input type="text" defaultValue style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px', backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', padding: '0px', margin: '0px', textIndent: '0px', boxShadow: 'none', outline: 'none', width: '100%', height: '20px', fontStyle: 'normal', appearance: 'none'}} /></div>
                            </div>
                            <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Date of Birth</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}}>Enter Age</span>
                                </div>
                                <div className="react-datepicker-wrapper">
                                <div className="react-datepicker__input-container"><input type="text" className defaultValue="12/26/1980" /></div>
                                </div>
                            </div>
                            <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Gender</div>
                                </div>
                                <div style={{width: '100%', appearance: 'none', boxShadow: 'none', outline: 'none', borderRadius: '2px', color: 'rgb(47, 59, 68)', fontSize: '14px', fontWeight: 400, lineHeight: '40px', height: '40px', background: 'none rgb(255, 255, 255)', position: 'relative', cursor: 'pointer', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)'}}><select style={{backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', fontSize: '13px', padding: '9px 28px 8px 10px', position: 'relative', appearance: 'none', width: '100%', cursor: 'pointer', zIndex: 1, height: '38px', lineHeight: 1}}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select><i className="mdi mdi-chevron-down" style={{position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', fill: 'rgb(47, 59, 68)', zIndex: 0}} /></div>
                            </div>
                            <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Tobacco Use</div>
                                </div>
                                <div style={{width: '100%', appearance: 'none', boxShadow: 'none', outline: 'none', borderRadius: '2px', color: 'rgb(47, 59, 68)', fontSize: '14px', fontWeight: 400, lineHeight: '40px', height: '40px', background: 'none rgb(255, 255, 255)', position: 'relative', cursor: 'pointer', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)'}}><select style={{backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', fontSize: '13px', padding: '9px 28px 8px 10px', position: 'relative', appearance: 'none', width: '100%', cursor: 'pointer', zIndex: 1, height: '38px', lineHeight: 1}}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select><i className="mdi mdi-chevron-down" style={{position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', fill: 'rgb(47, 59, 68)', zIndex: 0}} /></div>
                            </div>
                            <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>State</div>
                                </div>
                                <div style={{width: '100%', appearance: 'none', boxShadow: 'none', outline: 'none', borderRadius: '2px', color: 'rgb(47, 59, 68)', fontSize: '14px', fontWeight: 400, lineHeight: '40px', height: '40px', background: 'none rgb(255, 255, 255)', position: 'relative', cursor: 'pointer', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)'}}><select style={{backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', fontSize: '13px', padding: '9px 28px 8px 10px', position: 'relative', appearance: 'none', width: '100%', cursor: 'pointer', zIndex: 1, height: '38px', lineHeight: 1}}>
                                    <option value="GU">Guam</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MH">Marshal Islands</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PW">Palau</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VI">Virgin Islands</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District of Columbia</option>
                                    <option value="FM">Federated States of Micronesia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                </select><i className="mdi mdi-chevron-down" style={{position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', fill: 'rgb(47, 59, 68)', zIndex: 0}} /></div>
                            </div>
                            <div id="ixn-tour-data-backed-criteria">
                                <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Health (0 Selected)</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}}>
                                    <div style={{fontSize: '12px', color: 'rgb(223, 75, 75)', position: 'relative', paddingLeft: '18px', fontWeight: 500}}>At least 1 required <i className="mdi mdi-alert" style={{fontSize: '16px', position: 'absolute', left: '-1px', top: '-2px'}} /></div>
                                    </span>
                                </div>
                                <div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Preferred Plus</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Preferred</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Standard Plus</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Standard</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Table A</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Table B</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Table C</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Table D</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                </div>
                                <div style={{height: '30px', lineHeight: '28px', textAlign: 'center', borderRadius: '4px', border: '1px solid rgb(82, 173, 255)', fontSize: '13px', fontWeight: 500, color: 'rgb(82, 173, 255)', background: 'transparent', cursor: 'pointer', padding: '0px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1, marginTop: '6px'}}>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>View All Health Options</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div style={{width: '31%'}}>
                            <div style={{fontSize: '13px', fontWeight: 500, color: 'rgb(47, 59, 68)', marginBottom: '20px', display: 'flex', justifyContent: 'space-between'}}>Product</div>
                            <div style={{marginLeft: '10px'}}>
                            <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Types (0 Selected)</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}}>
                                    <div style={{fontSize: '12px', color: 'rgb(223, 75, 75)', position: 'relative', paddingLeft: '18px', fontWeight: 500}}>At least 1 required <i className="mdi mdi-alert" style={{fontSize: '16px', position: 'absolute', left: '-1px', top: '-2px'}} /></div>
                                </span>
                                </div>
                                <div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>1 Year Term</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>5 Year Term</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>10 Year Term</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>15 Year Term</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>20 Year Term</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>25 Year Term</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>30 Year Term</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>35 Year Term</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                </div>
                                <div style={{height: '30px', lineHeight: '28px', textAlign: 'center', borderRadius: '4px', border: '1px solid rgb(82, 173, 255)', fontSize: '13px', fontWeight: 500, color: 'rgb(82, 173, 255)', background: 'transparent', cursor: 'pointer', padding: '0px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1, margin: '6px 0px 20px'}}>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>View All Types</div>
                                </div>
                            </div>
                            <div id="ixn-tour-pre-filled-criteria">
                                <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Carriers (0 Selected)</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}}>
                                    <div style={{fontSize: '12px', color: 'rgb(223, 75, 75)', position: 'relative', paddingLeft: '18px', fontWeight: 500}}>At least 1 required <i className="mdi mdi-alert" style={{fontSize: '16px', position: 'absolute', left: '-1px', top: '-2px'}} /></div>
                                    </span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0px', cursor: 'pointer'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em'}}>Select All</div><input type="checkbox" defaultChecked style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                <div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>American General Life Insurance</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>American National Insurance Company</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Ameritas Life Insurance Corp.</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Assurity Life Insurance Company</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>AXA Equitable Life Insurance Company</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Cincinnati Life Insurance Company</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Columbus Life Insurance Company</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Foresters Financial</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>John Hancock Life Insurance Company</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Legal and General Life Insurance (Banner Life)</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Life Insurance Company of The Southwest</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Lincoln National Life Insurance Company</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Mutual of Omaha Life Insurance Company</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                    <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>National Life Group</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                    </div>
                                </div>
                                <div style={{height: '30px', lineHeight: '28px', textAlign: 'center', borderRadius: '4px', border: '1px solid rgb(82, 173, 255)', fontSize: '13px', fontWeight: 500, color: 'rgb(82, 173, 255)', background: 'transparent', cursor: 'pointer', padding: '0px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1, marginTop: '6px'}}>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>View All Carriers</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div style={{width: '31%'}}>
                            <div>
                            <div style={{fontSize: '13px', fontWeight: 500, color: 'rgb(47, 59, 68)', marginBottom: '20px', display: 'flex', justifyContent: 'space-between'}}>Coverage</div>
                            <div style={{marginLeft: '10px'}}>
                                <div id="ixn-tour-multiple-face-amounts">
                                <div style={{marginBottom: '15px'}}>
                                    <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Face Amount(s)</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}}>
                                        <div><span style={{fontSize: '12px', cursor: 'pointer', color: 'rgb(82, 173, 255)'}}> Calculate Needs</span></div>
                                    </span>
                                    </div>
                                    <div className="power-select" style={{position: 'relative'}}>
                                    <div className=" css-2b097c-container">
                                        <div className=" css-mwdoh5">
                                        <div className=" css-1hwfws3">
                                            <div className="css-1pru5jh-multiValue">
                                            <div className="css-1brkpar">$100,000</div>
                                            <div className="css-1thhqve"><svg height={14} width={14} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-19bqh2r">
                                                <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
                                                </svg></div>
                                            </div>
                                            <div className="css-1g6gooi">
                                            <div className style={{display: 'inline-block'}}><input autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-2-input" spellCheck="false" tabIndex={0} type="text" aria-autocomplete="list" defaultValue style={{boxSizing: 'content-box', width: '2px', background: '0px center', border: '0px', fontSize: 'inherit', opacity: 1, outline: '0px', padding: '0px', color: 'inherit'}} />
                                                <div style={{position: 'absolute', top: '0px', left: '0px', visibility: 'hidden', height: '0px', overflow: 'scroll', whiteSpace: 'pre', fontSize: '13px', fontFamily: 'Roboto, Helvetic, Arial, sans-serif', fontWeight: 400, fontStyle: 'normal', letterSpacing: 'normal', textTransform: 'none'}} />
                                            </div>
                                            </div>
                                        </div>
                                        <div className=" css-1wy0on6" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Flat Extra (per thousand)</div>
                                </div>
                                <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)', fontSize: '14px', position: 'relative', height: '40px', lineHeight: '20px', padding: '10px'}}><input type="text" defaultValue="$0.00" style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px', backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', padding: '0px', margin: '0px', textIndent: '0px', boxShadow: 'none', outline: 'none', width: '100%', height: '20px', fontStyle: 'normal', appearance: 'none'}} /></div>
                                </div>
                                <div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Accidental Death Benefit</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Wavier of Premium</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                                </div>
                                </div>
                                <div style={{marginBottom: '15px', marginTop: '20px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Child Rider Units</div>
                                </div>
                                <div style={{width: '100%', appearance: 'none', boxShadow: 'none', outline: 'none', borderRadius: '2px', color: 'rgb(47, 59, 68)', fontSize: '14px', fontWeight: 400, lineHeight: '40px', height: '40px', background: 'none rgb(255, 255, 255)', position: 'relative', cursor: 'pointer', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)'}}><select style={{backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', fontSize: '13px', padding: '9px 28px 8px 10px', position: 'relative', appearance: 'none', width: '100%', cursor: 'pointer', zIndex: 1, height: '38px', lineHeight: 1}}>
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                    <option value={13}>13</option>
                                    <option value={14}>14</option>
                                    <option value={15}>15</option>
                                    <option value={16}>16</option>
                                    <option value={17}>17</option>
                                    <option value={18}>18</option>
                                    <option value={19}>19</option>
                                    <option value={20}>20</option>
                                    <option value={21}>21</option>
                                    <option value={22}>22</option>
                                    <option value={23}>23</option>
                                    <option value={24}>24</option>
                                    <option value={25}>25</option>
                                    </select><i className="mdi mdi-chevron-down" style={{position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', fill: 'rgb(47, 59, 68)', zIndex: 0}} /></div>
                                </div>
                            </div>
                            </div>
                            <div style={{marginTop: '30px'}}>
                            <div style={{fontSize: '13px', fontWeight: 500, color: 'rgb(47, 59, 68)', marginBottom: '20px', display: 'flex', justifyContent: 'space-between'}}>Agent<div id="ixn-tour-ixn-account-login" style={{textAlign: 'center', fontSize: '12px', cursor: 'pointer'}}>Have an IXN Account? <span style={{fontSize: '12px', cursor: 'pointer', color: 'rgb(82, 173, 255)'}}>Login</span></div>
                            </div>
                            <div style={{marginLeft: '10px'}}>
                                <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>First Name</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}}>
                                    <div style={{fontSize: '12px', color: 'rgb(223, 75, 75)', position: 'relative', paddingLeft: '18px', fontWeight: 500}}>Required <i className="mdi mdi-alert" style={{fontSize: '16px', position: 'absolute', left: '-1px', top: '-2px'}} /></div>
                                    </span>
                                </div>
                                <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(223, 75, 75)', fontSize: '14px', position: 'relative', height: '40px', lineHeight: '20px', padding: '10px'}}><input type="text" defaultValue style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px', backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', padding: '0px', margin: '0px', textIndent: '0px', boxShadow: 'none', outline: 'none', width: '100%', height: '20px', fontStyle: 'normal', appearance: 'none'}} /><span style={{color: 'rgb(223, 75, 75)', position: 'absolute', right: '5px', top: '5px', lineHeight: 1, fontSize: '16px'}}>*</span></div>
                                </div>
                                <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Last Name</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}}>
                                    <div style={{fontSize: '12px', color: 'rgb(223, 75, 75)', position: 'relative', paddingLeft: '18px', fontWeight: 500}}>Required <i className="mdi mdi-alert" style={{fontSize: '16px', position: 'absolute', left: '-1px', top: '-2px'}} /></div>
                                    </span>
                                </div>
                                <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(223, 75, 75)', fontSize: '14px', position: 'relative', height: '40px', lineHeight: '20px', padding: '10px'}}><input type="text" defaultValue style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px', backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', padding: '0px', margin: '0px', textIndent: '0px', boxShadow: 'none', outline: 'none', width: '100%', height: '20px', fontStyle: 'normal', appearance: 'none'}} /><span style={{color: 'rgb(223, 75, 75)', position: 'absolute', right: '5px', top: '5px', lineHeight: 1, fontSize: '16px'}}>*</span></div>
                                </div>
                                <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Email</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}}>
                                    <div style={{fontSize: '12px', color: 'rgb(223, 75, 75)', position: 'relative', paddingLeft: '18px', fontWeight: 500}}>Required <i className="mdi mdi-alert" style={{fontSize: '16px', position: 'absolute', left: '-1px', top: '-2px'}} /></div>
                                    </span>
                                </div>
                                <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(223, 75, 75)', fontSize: '14px', position: 'relative', height: '40px', lineHeight: '20px', padding: '10px'}}><input type="text" defaultValue style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px', backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', padding: '0px', margin: '0px', textIndent: '0px', boxShadow: 'none', outline: 'none', width: '100%', height: '20px', fontStyle: 'normal', appearance: 'none'}} /><span style={{color: 'rgb(223, 75, 75)', position: 'absolute', right: '5px', top: '5px', lineHeight: 1, fontSize: '16px'}}>*</span></div>
                                </div>
                                <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Phone</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}}>
                                    <div style={{fontSize: '12px', color: 'rgb(223, 75, 75)', position: 'relative', paddingLeft: '18px', fontWeight: 500}}>Required <i className="mdi mdi-alert" style={{fontSize: '16px', position: 'absolute', left: '-1px', top: '-2px'}} /></div>
                                    </span>
                                </div>
                                <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(223, 75, 75)', fontSize: '14px', position: 'relative', height: '40px', lineHeight: '20px', padding: '10px'}}><input type="text" defaultValue style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px', backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', padding: '0px', margin: '0px', textIndent: '0px', boxShadow: 'none', outline: 'none', width: '100%', height: '20px', fontStyle: 'normal', appearance: 'none'}} /><span style={{color: 'rgb(223, 75, 75)', position: 'absolute', right: '5px', top: '5px', lineHeight: 1, fontSize: '16px'}}>*</span></div>
                                </div>
                                <div style={{marginBottom: '15px'}}>
                                <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>License Number</div><span style={{fontSize: '12px', fontWeight: 500, color: 'rgb(82, 173, 255)', cursor: 'pointer', marginTop: '-2px'}} />
                                </div>
                                <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)', fontSize: '14px', position: 'relative', height: '40px', lineHeight: '20px', padding: '10px'}}><input type="text" defaultValue style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px', backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', padding: '0px', margin: '0px', textIndent: '0px', boxShadow: 'none', outline: 'none', width: '100%', height: '20px', fontStyle: 'normal', appearance: 'none'}} /></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div style={{padding: '20px', background: 'rgb(245, 245, 245)', borderTop: '1px solid rgb(229, 229, 229)', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div id="ixn-tour-toolbox" style={{height: '40px', lineHeight: '38px', textAlign: 'center', borderRadius: '4px', border: '1px solid rgb(229, 229, 229)', fontSize: '14px', fontWeight: 500, color: 'rgb(68, 68, 68)', background: 'rgb(229, 229, 229)', cursor: 'pointer', padding: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1, width: '42px', marginRight: '5px', position: 'relative'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="mdi mdi-tools" style={{fontSize: '20px'}} />
                                <div style={{position: 'absolute', top: '-3px', right: '-3px', height: '10px', width: '10px', borderRadius: '10px', background: 'rgb(223, 75, 75)', boxShadow: 'rgba(223, 75, 75, 0.2) 0px 0px 0px 4px'}} />
                            </div>
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div id="ixn-tour-disabled-button" style={{height: '40px', lineHeight: '38px', textAlign: 'center', borderRadius: '4px', border: '1px solid rgb(82, 173, 255)', fontSize: '14px', fontWeight: 500, color: 'rgb(255, 255, 255)', background: 'rgb(82, 173, 255)', cursor: 'default', padding: '0px 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0.5', marginLeft: '15px'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Run Quote</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div style={{marginTop: '20px'}}>
                    <div style={{padding: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', fontSize: '12px'}}>
                        <div><a href="https://ixn.tech/terms-of-service/" target="_blank" style={{color: 'rgb(82, 173, 255)', textDecoration: 'none', fontSize: '12px', lineHeight: '24px', cursor: 'pointer', marginRight: '15px'}}>Terms of Service</a><a href="https://ixn.tech/privacy-policy/" target="_blank" style={{color: 'rgb(82, 173, 255)', textDecoration: 'none', fontSize: '12px', lineHeight: '24px', cursor: 'pointer', marginRight: '15px'}}>Privacy Policy</a></div>
                        <div>powered by <a href="https://ixn.tech" target="_blank" style={{color: 'rgb(82, 173, 255)', textDecoration: 'none', fontSize: '12px', lineHeight: '24px', cursor: 'pointer', marginRight: '15px'}}>IXN</a></div>
                    </div>
                    </div>
                </div>
            </div>
            <Alq />
            <p>Forms Engine</p>
            <link href="https://forms.ixn.tech/css/reset.css" rel="stylesheet" type="text/css"></link>
            <FormEngine3 />

            <FormEngine />
            <div className='calculators'>
                <iframe title='calc1' src="https://widgets.memberedge.io/planner/?cHJpbWFyeT04RkJDOEYmc2Vjb25kYXJ5PWZmYmEwMCZ0ZXh0PWZmZmZmZiZoaWdobGlnaHQ9ZmZiYTAwJmxpZmU9aHR0cDovL3d3dy5saWZlaGFwcGVucy5vcmcvaW5zdXJhbmNlLW92ZXJ2aWV3L2xpZmUtaW5zdXJhbmNlLyZkaXNhYmlsaXR5PWh0dHA6Ly93d3cubGlmZWhhcHBlbnMub3JnL2luc3VyYW5jZS1vdmVydmlldy9kaXNhYmlsaXR5LWluc3VyYW5jZS8mbG9uZ3Rlcm09aHR0cDovL3d3dy5saWZlaGFwcGVucy5vcmcvaW5zdXJhbmNlLW92ZXJ2aWV3L2Rpc2FiaWxpdHktaW5zdXJhbmNlLyZ1c2VyPTI3NDA5JnR5cGU9cGxhbm5lcg==" border="0" scrolling="no"></iframe>
            </div>
            <div className='calculators'>
            <iframe title='calc2' src="https://widgets.memberedge.io/calculators/?cHJpbWFyeT1mZmJhMDAmc2Vjb25kYXJ5PThGQkM4RiZ0ZXh0PWZmZmZmZiZoaWdobGlnaHQ9ZmZiYTAwJmxpZmU9aHR0cDovL3d3dy5saWZlaGFwcGVucy5vcmcvaW5zdXJhbmNlLW92ZXJ2aWV3L2xpZmUtaW5zdXJhbmNlLyZkaXNhYmlsaXR5PWh0dHA6Ly93d3cubGlmZWhhcHBlbnMub3JnL2luc3VyYW5jZS1vdmVydmlldy9kaXNhYmlsaXR5LWluc3VyYW5jZS8mbG9uZ3Rlcm09aHR0cDovL3d3dy5saWZlaGFwcGVucy5vcmcvaW5zdXJhbmNlLW92ZXJ2aWV3L2Rpc2FiaWxpdHktaW5zdXJhbmNlLyZ1c2VyPTI3NDA5JnR5cGU9Y2FsY3VsYXRvcg==" border="0" scrolling="no"></iframe>
            </div>
            <div className='productLinks'>
                <p>For agents seeking a quote, click below</p>
                <TextButton link="http://advisor.allegisag.com/forms/life-insurance-illustration-request" name='Life Insurance Quote' />    
            </div>
        </div>
    );
};

export default Life;