import React from 'react'
import CourseHeading from './CourseHeading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PaperText from './PaperText';
import GoToTop from './GoToTop';
function ScienceSubject(props) {
    return (

        <div>
            <Helmet>


                <link rel="icon" type="image/ico" href="assets/images/favicon.ico" />
                <meta name="google-site-verification" content="6bVqd2PDS4-volB7T2OiGPkTY-oE8z68EPmYLquGkBE" />



                <meta name="author" content="Tushar Gupta - BCA Student" />



                <meta name="CountryCode" content="IN" />
                <meta name="Country" content="India" />
                <meta name="geo.region" content="IN-DL" />
                <meta name="robot" content="ALL" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="yahoobot" content="index, follow" />
                <meta http-equiv="Content-Language" content="en-us" />
                <meta name="expires" content="never" />
                <meta name="language" content="English" />
                <meta name="geo.placename" content="New Delhi, India" />
                <meta property="og:type" content="Website" />

                <meta property="og:image"
                    content="https://www.studybuddy./assets/images/studybuddylogo.png" />
                <meta property="og:site_name" content="Study Buddy" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:card" content="summary_large_image" />


                <title>{"Best Learning Platform Study Buddy - " + props.stream + props.class}</title>
                <link rel="canonical" href={"https://www.studybuddy.store/" + props.stream + props.class} />
                <meta name="description" content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

                {/* <title>Best Learning Platform Study Buddy - Science Subject Page</title> */}
                <meta name="title" content="Best Learning Platform Study Buddy - Science Subject Page" />
                <meta name="keywords" content="NCERT Book and Solution, , NCERT Notes, NCERT Exempler Books, NCERT Exempler Solutions, CBSE Syllabus, Book and Solutions, CBSE Revision Notes, Solutions, CBSE Question Papers, CBSE Latest Updates, CBSE Exam News, Previous Years Question Papers, Free Mock Test, Online Mock Test" />
                <meta property="og:title" content="Best Learning Platform Study Buddy - Science Subject Page" />

                <meta property="og:description"
                    content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />

                <meta name="twitter:title" content="Best Learning Platform Study Buddy - Science Subject Page" />
                <meta name="twitter:description"
                    content="Studybuddy is a platform for students to access their notes, syllabus, deleted syllabus, answers solutions, sample paper and previous year papers in pdf form." />
                <meta property="og:url" content={"https://www.studybuddy.store/" + props.stream + props.class} />



            </Helmet>
            <section className='parts'>
                <CourseHeading heading={props.stream + " " + props.class + " Notes"} subheading="All Classes" />
                <div className="container py-5">
                    <div className="title mb-3">{props.stream} {props.class} Notes</div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.sub1}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.subject1}</h3>
                                                <p>{props.subsubject}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="/assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.sub2}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.subject2}</h3>
                                                <p>{props.subsubject}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="/assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.sub3}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.subject3}</h3>
                                                <p>{props.subsubject}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="/assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.sub4}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.subject4}</h3>
                                                <p>{props.subsubject}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="/assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.sub5}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.subject5}</h3>
                                                <p>{props.subsubject}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="/assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 p-4">
                            <Link to={props.sub6}>
                                <div className="card">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-lg-8 col-8">
                                                <h3>{props.subject6}</h3>
                                                <p>{props.subsubject}</p>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <div className="icon-box">
                                                    <img src="/assets/images/academic/paper.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="text-title">
                                <h2>Revision Notes for CBSE {props.class} -  PDF Download</h2>
                            </div>
                            <div className="text">
                                <p className='mb-2'><span className='font-weight-bold text-danger h6 '>{props.subject1}, {props.subject2}, {props.subject3}, {props.subject4}, {props.subject5}, {props.subject6} </span>and other {props.class} subjects CBSE rapid revision notes are very beneficial for reviewing the entire syllabus on exam days. All key formulas and ideas from the chapter are included in the revision notes. Even if you want a chapter overview, fast revision notes might provide it for you. Having these notes on hand will definitely save you time on test day.


                                </p>
                                <p className='mb-2'>Students can study for the exam in a well-structured and organised way by using CBSE Notes. Because they don't have to read the full textbook during revision, students who take notes save time. Students summarise the entire chapters in their notes in a succinct and clear manner. Simply reading through these notes will help students rapidly memorise all the fundamentals. Students can use the NCERT Solutions to find the answers to the exercise problems. The NCERT textbook's end-of-chapter questions are completely answered in NCERT Solutions.
                                </p>
                                <p className='mb-2'>Students might greatly benefit from using CBSE Quick Notes to help them remember what they have learned. It is crucial for students to acquire new material, understand it thoroughly, and remember it for a long period. The human brain, however, has a propensity to progressively forget information. As a result, the rapid revision note enters the picture. It helps students retain information rapidly, no matter what they have learned.</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <PaperText /> */}
            </section>
            <GoToTop />
        </div>
    )
}
export default ScienceSubject;