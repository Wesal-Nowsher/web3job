import React from "react";
import greenbg from '../../assets/Ellipse1.png';
import greendots from '../../assets/newbackgroundinform.png';

 function topmainsection(){
    return(
        <>
                <div className="row repeat-style-bg-of-inner jobdesc-details" >
                    <div className="col-6   d-flex flex-column padding-col-6-first " 
                    >
                        <label>Job details</label>
                        <p>
                        To take advantage of this momentum we are growing the team and are searching for a Senior Software
                         Engineer with a keen design experience and experience architecting complex applications built in
                          TypeScript and ReactJS. You will work with the backend team, product managers, and designers
                           to build beautiful user interfaces that bring blockchain products into the mainstream. You will 
                           report to the Engineering Manager.
                        </p>
                        <p className="mt-4 mb-4 text-uppercase">What You Will DO:</p>
                        <ul>
                            <li>Build with TypeScript + ReactJS to create responsive, performant user interfaces</li>
                            <li>Use Apollo + GraphQL Codegen to use our Golang GraphQL API</li>
                            <li>Create and own a reusable pattern library to accelerate building user experiences</li>
                            <li>Work with product managers to determine features that will be added to the platform</li>
                            <li>Work with product designers to produce a clean UX for our customers</li>
                            <li>Instrument our applications to find optimization opportunities with A/B tests</li>
                            <li>Mentor junior engineers through code reviews and guidance</li>
                            <li>Work with web3 libraries to facilitate blockchain transactions</li>
                        </ul> 
                        <p className="mt-4 mb-4 text-uppercase">Requirements:</p>
                        <ul>
                            <li>5+ years in a Fullstack or Frontend Engineering role</li>
                            <li>Familiar with ReactJS Hooks, Contexts, and other React patterns</li>
                            <li>Can’t imagine writing JS without TypeScript</li>
                            <li>Have worked with Styled Components or similar CSS-in-JS library</li>
                            <li>Passionate about code quality</li>
                            <li>Familiar with TDD and Jest unit testing</li>
                            <li>Have worked with product, design, and backend teams</li>
                            <li>Passionate about solving blockchain UX challenges (ex. wallets, gas)</li>
                        </ul>
                        <p className="mt-4 mb-4 text-uppercase">Bonuses:</p>
                        <ul>
                        <li>Experience with blockchain technologies, smart contracts, Ethereum</li>
                        <li>Familiarity with ethers.js or web3.js</li>
                        <li>Experience with blockchain development tools and frameworks (Truffle, Solidity, Web3, and Metamask)</li>
                        <li>Basic knowledge of Golang, gqlgen</li>
                        <li>Have worked with NATs or Kafka   </li>

                        </ul>
                        <button className="post-job-btn mt-5">Apply now</button>
                    </div>
                    <div className="col-6   d-flex flex-column padding-col-6" 
                    >
                        <label className="text-uppercase">company name</label> 
                        <p>Tesla</p>
                        <label>job Title</label>
                        <p>Web3 community & customer support specialist</p>
                        <label>job Position</label>
                        <p>Community manager</p>
                        <label>Job Type</label>
                        <p>Full Time</p>
                        <label>Job Location</label>
                        <p>Remote</p>
                        <label>Earing range</label>
                        <p>$80k -$150k</p>
                        <button className="post-job-btn mt-5">Apply now</button>
                    </div>
                    <div className="copyright-section  extra-margins">
                                <p>©2022 DAOvelopers</p>
                    </div>
                </div>
        </>
    )
}

export default topmainsection;

