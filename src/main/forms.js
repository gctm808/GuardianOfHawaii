import React from 'react';
import FormEngine from './products/formEngine';
import FormEngine3 from './products/formEngine3';
import '../../css/styles.css';


const Forms = () => {
    return (
        <div className='l extraPadding'>
            <h2>Form Engine</h2>
            <link href="https://forms.ixn.tech/css/reset.css" rel="stylesheet" type="text/css"></link>
            <FormEngine3 />
            <div id="ixn-forms-engine" class='bottomBorder'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '300px', marginRight: '20px', flexShrink: 0}}>
                    <div style={{border: '1px solid rgb(229, 229, 229)', borderRadius: '4px', background: 'rgb(255, 255, 255)', marginBottom: '20px'}}>
                    <div style={{padding: '20px'}}>
                        <div style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)', fontSize: '14px', position: 'relative', height: '40px', lineHeight: '20px', padding: '10px'}}><input placeholder="Search by name or number..." type="text" defaultValue style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px', backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', padding: '0px', margin: '0px', textIndent: '0px', boxShadow: 'none', outline: 'none', width: '100%', height: '20px', fontStyle: 'normal', appearance: 'none'}} /></div>
                    </div>
                    </div>
                    <div style={{border: '1px solid rgb(229, 229, 229)', borderRadius: '4px', background: 'rgb(255, 255, 255)', marginBottom: '20px'}}>
                    <div style={{padding: '12px', fontSize: '13px', fontWeight: 500, display: 'flex', justifyContent: 'space-between', position: 'relative', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                        <div>Product</div>
                        <div style={{color: 'rgb(82, 173, 255)', cursor: 'pointer'}} />
                    </div>
                    <div style={{padding: '20px'}}>
                        <div style={{marginBottom: '0px'}}>
                        <div style={{marginBottom: '6px', lineHeight: 1, display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{fontSize: '12px', lineHeight: '16px', color: 'rgb(119, 119, 119)', display: 'flex'}}>Carrier</div>
                        </div>
                        <div style={{width: '100%', appearance: 'none', boxShadow: 'none', outline: 'none', borderRadius: '2px', color: 'rgb(47, 59, 68)', fontSize: '14px', fontWeight: 400, lineHeight: '40px', height: '40px', background: 'none rgb(255, 255, 255)', position: 'relative', cursor: 'pointer', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)'}}><select placeholder="-- Select A Carrier --" style={{backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', fontSize: '13px', padding: '9px 28px 8px 10px', position: 'relative', appearance: 'none', width: '100%', cursor: 'pointer', zIndex: 1, height: '38px', lineHeight: 1}}>
                            <option disabled value>-- Select A Carrier --</option>
                            <option value={1448}>AAA Life Insurance Company</option>
                            <option value={1679}>Allstate Life Insurance Co of New York</option>
                            <option value={1680}>American-Amicable Life Insurance Company of Texas</option>
                            <option value={1681}>American Continental Insurance Company</option>
                            <option value={1806}>American Farmers &amp; Rancher Life Ins. Co</option>
                            <option value={1458}>American Fidelity Assurance Company</option>
                            <option value={1796}>American General - Final Expense</option>
                            <option value={140}>American General Life Insurance</option>
                            <option value={1682}>American Home Life Insurance Company</option>
                            <option value={10}>American Memorial Life Insurance Company</option>
                            <option value={36}>American National Insurance Company</option>
                            <option value={1684}>American Progressive Life &amp; Health of New York</option>
                            <option value={154}>American United Life Insurance Company</option>
                            <option value={1674}>Americo Financial Life and Annuity Insurance Company</option>
                            <option value={1793}>Ameritas (Alliance Group)</option>
                            <option value={163}>Ameritas Life Insurance Corp.</option>
                            <option value={1474}>Assurity Life Insurance Company</option>
                            <option value={11}>Aurora National Life Assurance Company</option>
                            <option value={185}>AXA Equitable Life Insurance Company</option>
                            <option value={58}>Baltimore Life Insurance Company, The</option>
                            <option value={1778}>Bankers Fidelity Life Insurance Company</option>
                            <option value={1489}>Boston Mutual Life Insurance Company</option>
                            <option value={1791}>Brighthouse Life Insurance Company</option>
                            <option value={1792}>Brighthouse Life Insurance Company (NY)</option>
                            <option value={112}>Capitol Life Insurance Company</option>
                            <option value={186}>Centrian Life Insurance </option>
                            <option value={1772}>Christian Fidelity Life Insurance Company</option>
                            <option value={1500}>Cincinnati Life Insurance Company</option>
                            <option value={1676}>Columbian Life Insurance Company</option>
                            <option value={1687}>Columbian Mutual Life Insurance Company</option>
                            <option value={1505}>Columbus Life Insurance Company</option>
                            <option value={1798}>Demo Carrier</option>
                            <option value={1520}>EMC National Life Company</option>
                            <option value={102}>Equitable Life and Casualty Insurance Company</option>
                            <option value={1801}>Family Benefit Life Insurance</option>
                            <option value={1526}>Farmers New World Life Insurance Company</option>
                            <option value={1764}>Federal Life Insurance Company</option>
                            <option value={63}>Fidelity Life Association</option>
                            <option value={1675}>Foresters Financial</option>
                            <option value={1805}>Foresters Financial (Strong Foundation)</option>
                            <option value={1773}>GBU Financial Life</option>
                            <option value={1541}>Gleaner Life Insurance Society</option>
                            <option value={1770}>Global Atlantic</option>
                            <option value={1542}>Government Personnel Mutual Life Insurance Company</option>
                            <option value={1761}>Government Personnel Mutual Life Insurance Company (Alliance Group)</option>
                            <option value={1543}>Grange Life Insurance Company</option>
                            <option value={39}>Guardian Life Insurance Company of America, The</option>
                            <option value={1558}>Illinois Mutual Life Insurance Company</option>
                            <option value={49}>John Hancock Life Insurance Company</option>
                            <option value={1795}>John Hancock Life Insurance Company (AIN)</option>
                            <option value={1803}>Kansas City Life Insurance Company</option>
                            <option value={1574}>Lafayette Life Insurance Company</option>
                            <option value={111}>Legal and General Life Insurance (Banner Life)</option>
                            <option value={1673}>Liberty Bankers Life Insurance Company</option>
                            <option value={1804}>Liberty Mutual Insurance</option>
                            <option value={32}>Life Insurance Company of The Southwest</option>
                            <option value={189}>Lincoln Life &amp; Annuity Company of NY</option>
                            <option value={106}>Lincoln National Life Insurance Company</option>
                            <option value={1696}>Madison National Life Insurance Company</option>
                            <option value={1779}>Massachusetts Mutual Life Ins (Haven)</option>
                            <option value={76}>Massachusetts Mutual Life Insurance Company</option>
                            <option value={65}>Metropolitan Life Insurance Company (MetLife)</option>
                            <option value={138}>Midland National Life Insurance Company</option>
                            <option value={1588}>Motorists Life Insurance Company</option>
                            <option value={1799}>Mutual of Omaha (Final Expense)</option>
                            <option value={92}>Mutual of Omaha Life Insurance Company</option>
                            <option value={1589}>Mutual Trust Life Insurance Company</option>
                            <option value={43}>Nassau Re</option>
                            <option value={1774}>National Benefit Life Insurance Company</option>
                            <option value={1594}>National Life Group</option>
                            <option value={1800}>National Mutual Benefit</option>
                            <option value={1726}>National Western Life Insurance Company</option>
                            <option value={176}>Nationwide Life and Annuity Insurance Co</option>
                            <option value={1771}>Nationwide Life Insurance Company (NY)</option>
                            <option value={27}>New York Life Insurance Company</option>
                            <option value={139}>North American Co for Life and Health</option>
                            <option value={91}>Northwestern Mutual Life Insurance Company</option>
                            <option value={1698}>Occidental Life Ins Co of North Carolina</option>
                            <option value={17}>Ohio National Life Insurance Company</option>
                            <option value={1598}>OneAmerica Financial Partners, Inc.</option>
                            <option value={1602}>Oxford Life Insurance Company</option>
                            <option value={1699}>Pacific Guardian Life Insurance Co, Ltd.</option>
                            <option value={1700}>Pacific Life &amp; Annuity Company (NY)</option>
                            <option value={99}>Pacific Life Insurance Company</option>
                            <option value={149}>Paul Revere Life Insurance Company</option>
                            <option value={109}>Penn Mutual Life Insurance Company</option>
                            <option value={1775}>Polish Roman Catholic Union of America</option>
                            <option value={1608}>Primerica Life Insurance Company</option>
                            <option value={1701}>Principal Life Insurance Company (NY)</option>
                            <option value={121}>Principal National Life Insurance Company</option>
                            <option value={1623}>Prosperity Life Group</option>
                            <option value={69}>Protective Life Insurance Company</option>
                            <option value={29}>Provident Life and Accident Assurance</option>
                            <option value={28}>Prudential Financial</option>
                            <option value={1619}>Royal Neighbors of America</option>
                            <option value={1621}>Sagicor Life Insurance Company</option>
                            <option value={193}>Savings Bank Life Insurance Company (SBLI)</option>
                            <option value={71}>Securian Financial Group</option>
                            <option value={1627}>Security Mutual Life Insurance Company of New York</option>
                            <option value={1786}>Security National Life Insurance Company</option>
                            <option value={1785}>Sentinel Security Life Insurance Company</option>
                            <option value={1628}>Sentry Life Insurance Company</option>
                            <option value={1797}>Sons of Norway</option>
                            <option value={1727}>Standard Life and Accident Insurance Company</option>
                            <option value={1629}>Starmount Life Insurance Company</option>
                            <option value={1703}>Sunset Life Insurance Company of America</option>
                            <option value={1634}>Symetra Life Insurance Company</option>
                            <option value={1641}>Thrivent Financial for Lutherans</option>
                            <option value={1704}>TIAA-CREF Life Insurance Company</option>
                            <option value={93}>Transamerica Life Insurance Company</option>
                            <option value={1802}>Trinity Life Insurance Company</option>
                            <option value={1705}>Union Labor Life Insurance Company</option>
                            <option value={1742}>United Farm Family Life Insurance Co</option>
                            <option value={1706}>United Heritage Life Insurance Company</option>
                            <option value={1677}>United Home Life Insurance Company</option>
                            <option value={194}>United States Life Ins in the City of NY</option>
                            <option value={195}>William Penn Life Insurance Company of NY</option>
                            <option value={1707}>Woman's Life Insurance Society</option>
                            <option value={1768}>Zurich American Life Insurance Company</option>
                            </select><i className="mdi mdi-chevron-down" style={{position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', fill: 'rgb(47, 59, 68)', zIndex: 0}} /></div>
                        </div>
                    </div>
                    </div>
                    <div style={{border: '1px solid rgb(229, 229, 229)', borderRadius: '4px', background: 'rgb(255, 255, 255)', marginBottom: '0px'}}>
                    <div style={{padding: '12px', fontSize: '13px', fontWeight: 500, display: 'flex', justifyContent: 'space-between', position: 'relative', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                        <div>Categories</div>
                        <div style={{color: 'rgb(82, 173, 255)', cursor: 'pointer'}} />
                    </div>
                    <div style={{padding: '20px'}}>
                        <div style={{margin: '-10px 0px'}}>
                        <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Agent</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                        </div>
                        <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Agent Contracting</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                        </div>
                        <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Agent Use</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                        </div>
                        <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Consumer Marketing</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                        </div>
                        <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Customer Service</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                        </div>
                        <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Required New Business</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                        </div>
                        <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Supplemental New Business</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                        </div>
                        <div style={{padding: '4px 0px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{fontSize: '13px', fontWeight: 400, lineHeight: '1.3em', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Underwriting</div><input type="checkbox" style={{fontSize: '20px', marginLeft: '10px'}} />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div style={{padding: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', fontSize: '12px'}}>
                    <div><a href="https://ixn.tech/terms-of-service/" target="_blank" style={{color: 'rgb(82, 173, 255)', textDecoration: 'none', fontSize: '12px', lineHeight: '24px', cursor: 'pointer', marginRight: '15px'}}>Terms of Service</a><a href="https://ixn.tech/privacy-policy/" target="_blank" style={{color: 'rgb(82, 173, 255)', textDecoration: 'none', fontSize: '12px', lineHeight: '24px', cursor: 'pointer', marginRight: '15px'}}>Privacy Policy</a></div>
                    <div>powered by <a href="https://ixn.tech" target="_blank" style={{color: 'rgb(82, 173, 255)', textDecoration: 'none', fontSize: '12px', lineHeight: '24px', cursor: 'pointer', marginRight: '15px'}}>IXN</a></div>
                    </div>
                </div>
                <div style={{flex: '1 1 0%', position: 'relative', minWidth: '0px'}}>
                    <div style={{position: 'absolute', inset: '0px', zIndex: 2, background: 'rgba(255, 255, 255, 0.95)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width: '300px', textAlign: 'center', position: 'sticky', top: '200px', left: '50%'}}>
                        <div style={{fontSize: '20px', fontFamily: 'Quicksand, Roboto, Helvetica, Arial, sans-serif', fontWeight: 500, marginBottom: '15px'}}>Select Forms Criteria</div>
                        <div style={{marginBottom: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div style={{fontSize: '14px', fontWeight: 400, lineHeight: '36px', display: 'flex', alignItems: 'center', width: '142px', textAlign: 'left'}}><i className="mdi mdi-checkbox-marked-outline" style={{color: 'rgb(229, 229, 229)', fontSize: '20px', marginRight: '8px'}} />Carrier</div>
                        <div style={{fontSize: '14px', fontWeight: 400, lineHeight: '36px', display: 'flex', alignItems: 'center', width: '142px', textAlign: 'left'}}><i className="mdi mdi-checkbox-marked-outline" style={{color: 'rgb(229, 229, 229)', fontSize: '20px', marginRight: '8px'}} />Product Line</div>
                        <div style={{fontSize: '14px', fontWeight: 400, lineHeight: '36px', display: 'flex', alignItems: 'center', width: '142px', textAlign: 'left'}}><i className="mdi mdi-checkbox-marked-outline" style={{color: 'rgb(229, 229, 229)', fontSize: '20px', marginRight: '8px'}} />State</div>
                        </div>
                        <div>
                        <div style={{height: '40px', lineHeight: '38px', textAlign: 'center', borderRadius: '4px', border: '1px solid rgb(82, 173, 255)', fontSize: '14px', fontWeight: 500, color: 'rgb(255, 255, 255)', background: 'rgb(82, 173, 255)', cursor: 'default', padding: '0px 30px', display: 'inline-block', alignItems: 'center', justifyContent: 'center', opacity: '0.5'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>View Forms</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div style={{background: 'rgb(255, 255, 255)', borderRadius: '4px', border: '1px solid rgb(229, 229, 229)'}}>
                    <div style={{background: 'rgb(249, 249, 249)', padding: '15px', borderBottom: '1px solid rgb(229, 229, 229)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{height: '40px', lineHeight: '38px', textAlign: 'center', borderRadius: '4px', border: '1px solid rgb(82, 173, 255)', fontSize: '14px', fontWeight: 500, color: 'rgb(255, 255, 255)', background: 'rgb(82, 173, 255)', cursor: 'pointer', padding: '0px 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="mdi mdi-checkbox-marked-outline" style={{fontSize: '18px', verticalAlign: 'top', marginLeft: '-3px'}} /> Unselect All 0 Forms</div>
                        </div>
                        <div style={{display: 'flex'}}>
                        <div style={{width: '100%', appearance: 'none', boxShadow: 'none', outline: 'none', borderRadius: '2px', color: 'rgb(47, 59, 68)', fontSize: '14px', fontWeight: 400, lineHeight: '40px', height: '40px', background: 'none rgb(255, 255, 255)', position: 'relative', cursor: 'pointer', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(229, 229, 229)'}}><select style={{backgroundColor: 'transparent', border: 'none', color: 'rgb(47, 59, 68)', fontSize: '13px', padding: '9px 28px 8px 10px', position: 'relative', appearance: 'none', width: '100%', cursor: 'pointer', zIndex: 1, height: '38px', lineHeight: 1}}>
                            <option value="form_name,asc">Name (A-Z)</option>
                            <option value="form_name,desc">Name (Z-A)</option>
                            <option value="form_number,asc">Number (A-Z)</option>
                            <option value="form_number,desc">Number (Z-A)</option>
                            </select><i className="mdi mdi-chevron-down" style={{position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', fill: 'rgb(47, 59, 68)', zIndex: 0}} /></div>
                        <div style={{height: '40px', lineHeight: '38px', textAlign: 'center', borderRadius: '4px 0px 0px 4px', border: '1px solid rgb(82, 173, 255)', fontSize: '14px', fontWeight: 500, color: 'rgb(255, 255, 255)', background: 'rgb(82, 173, 255)', cursor: 'pointer', padding: '0px 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1, marginLeft: '10px'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="mdi mdi-view-grid" style={{fontSize: '18px', verticalAlign: 'top'}} /></div>
                        </div>
                        <div style={{height: '40px', lineHeight: '38px', textAlign: 'center', borderRadius: '0px 4px 4px 0px', border: '1px solid rgb(255, 255, 255)', fontSize: '14px', fontWeight: 500, color: 'rgb(82, 173, 255)', background: 'rgb(255, 255, 255)', cursor: 'pointer', padding: '0px 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="mdi mdi-menu" style={{fontSize: '18px', verticalAlign: 'top'}} /></div>
                        </div>
                        </div>
                    </div>
                    <div style={{maxHeight: '700px', overflow: 'auto'}}>
                        <div style={{textAlign: 'center', padding: '60px 0px 100px', width: '100%', fontSize: '14px', color: 'rgb(187, 187, 187)', fontStyle: 'italic'}}><i className="mdi mdi-file-pdf" style={{display: 'block', fontSize: '60px', marginBottom: '6px', color: 'rgb(229, 229, 229)'}} />
                        <div>No forms found.</div>
                        </div>
                    </div>
                    <div style={{background: 'rgb(249, 249, 249)', padding: '15px', borderRadius: '0px 0px 4px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgb(229, 229, 229)'}}>
                        <div style={{fontWeight: 500}}>0 Results</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <FormEngine />
        </div>
    );
};

export default Forms;