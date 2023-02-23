import React from 'react'
import CourseHeading from './CourseHeading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PaperText from './PaperText';
import GoToTop from './GoToTop';
function SeniorSubjects(props) {

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


<title>{"Best Learning Platform Study Buddy - " + props.title}</title>
<link rel="canonical" href={"https://www.studybuddy.store/" + props.title} />
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
<meta property="og:url" content={"https://www.studybuddy.store/" + props.title} />



</Helmet>
    <section className='parts'>
        <CourseHeading heading={props.stream+" " + props.subsubject} subheading="All Classes"/>
        <div className="container py-5">
        <div className="title mb-3">{props.stream} {props.class}</div>
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
                                        <img src="/assets/images/academic/paper.png" alt=""/>
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
                                        <img src="/assets/images/academic/paper.png" alt=""/>
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
                                        <img src="/assets/images/academic/paper.png" alt=""/>
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
                                        <img src="/assets/images/academic/paper.png" alt=""/>
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
                                        <img src="/assets/images/academic/paper.png" alt=""/>
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
                                        <img src="/assets/images/academic/paper.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                   
                </div>
                <div className="col-lg-4 col-md-6 col-12 p-4">
                    <Link to={props.sub7}>
                    <div className="card">
                        <div className="card-body shadow">
                            <div className="row">
                                <div className="col-lg-8 col-8">
                                    <h3>{props.subject7}</h3>
                                    <p>{props.subsubject}</p>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="icon-box">
                                        <img src="/assets/images/academic/paper.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                   
                </div>
                <div className="col-lg-4 col-md-6 col-12 p-4">
                    <Link to={props.sub8}>
                    <div className="card">
                        <div className="card-body shadow">
                            <div className="row">
                                <div className="col-lg-8 col-8">
                                    <h3>{props.subject8}</h3>
                                    <p>{props.subsubject}</p>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="icon-box">
                                        <img src="/assets/images/academic/paper.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                   
                </div>
            </div>
        </div>
        <PaperText/>
    </section>
    <GoToTop/>
    </div>
  )
}
export default SeniorSubjects;