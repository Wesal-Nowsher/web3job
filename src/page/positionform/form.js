import React from "react";


 function formcomp(){
    return(
        <>
                <div className="row formcompo d-flex flex-column justify-content-center align-items-center"  >
                    <div className="col-6   d-flex flex-column ">
                           <h3 className="form-header">Tell us about the position</h3>
                           <label>Company Name</label>
                           <input type="text" placeholder="Enter your company name" />
                           <label>Job Title</label>
                           <input type="text" placeholder="Front-End Developer, Back-End Developer, Blockchain Engineer" />
                           <label>Job Position</label>
                           <select>
                               <option className="" value="software-engineering">software engineering</option>
                               <option className="" value="other-engineering">other engineering</option>
                           </select>
                           <label>Job Application url/Email Address</label>
                           <input type="text" placeholder="Enter the link to the job application" />
                           <label>Earning Range <span className="less-opc">(Optional)</span></label>
                           <div className="d-flex salary-range">
                               <select>
                               <option className="" value="USD">USD</option>
                               <option className="" value="GBP">GBP</option>
                                </select>
                                <input type="number" placeholder="Min"/>
                                <input type="number" placeholder="Max"/>
                           </div>
                           <label className="mt-4 mb-2">Job Type</label>
                           <label class="main1 mt-3">Full-Time
                                <input type="checkbox" />
                                <span class="geekmark"></span>
                            </label>
                            <label class="main1">Part-Time
                                <input type="checkbox" />
                                <span class="geekmark"></span>
                            </label>
                            <label class="main1">Contract
                                <input type="checkbox" />
                                <span class="geekmark"></span>
                            </label>
                            <label class="main1">Freelance
                                <input type="checkbox" />
                                <span class="geekmark"></span>
                            </label>
                            <label class="main1">internship
                                <input type="checkbox" />
                                <span class="geekmark"></span>
                            </label>
                           <label className="mt-4 mb-2">Job Type</label>
                           <div class="roles">
                                <input type="radio" name="ONE" value="On-site" id="On-site" />
                                <label class="role" for="On-site">On-site</label>
                           </div>
                           <div class="roles">
                                <input type="radio" name="ONE" value="On-site and Remote both" id="On-site and Remote both" />
                                <label class="role" for="On-site and Remote both">On-site and Remote both</label>
                           </div>
                           <div class="roles">
                                <input type="radio" name="ONE" value="Remote" id="Remote" />
                                <label class="role" for="Remote">On-site</label>
                           </div>
                          
                           <label className="mt-4 mb-2">Job Description</label>
                           <textarea placeholder="Tell us everything about your the job" className="texarea-postjob"></textarea>
                           <button className="post-job-btn">Post job</button>
                           <div className="copyright-section  extra-margins">
                                <p>©2022 DAOvelopers</p>
                            </div>

                            
                    </div>
                </div>
           
        
        </>
    )
}

export default formcomp;

