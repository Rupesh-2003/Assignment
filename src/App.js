import React from "react";
import styled from 'styled-components'
import Candidate from "./Candidate";

const CANDIDATE = [
  {
    name: "Rupesh R",
    status: 'Active',
    position: "Automation Testing Analyst",
    employeeId: "#JC-00150",
    currentCompany: "Soyient Corp",
    currentCTC: "3,60,000",
    location: "Gurugram",
    experience: "3.8 Years",
    skills: [
      "Java",
      "Automated Testing",
      "Regression Testing",
      "Python",
      "Maven"
    ],
    university: "University of Melbourne (Bcs)",
    workedAs: "Senior Analyst",
    appliedFor: [
      "Senior Analyst",
      "Junior Analyst"
    ]
  },
  {
    name: "R R",
    status: 'Active',
    position: "Automation Testing Analyst",
    employeeId: "#JC-00150",
    currentCompany: "Soyient Corp",
    currentCTC: "3,60,000",
    location: "Gurugram",
    experience: "3.8 Years",
    skills: [
      "Java",
      "Automated Testing",
      "Regression Testing",
      "Python",
      "Maven"
    ],
    university: "University of Melbourne (Bcs)",
    workedAs: "Senior Analyst",
    appliedFor: [
      "Senior Analyst",
      "Junior Analyst"
    ]
  },
  {
    name: "R R",
    status: 'Active',
    position: "Automation Testing Analyst",
    employeeId: "#JC-00150",
    currentCompany: "Soyient Corp",
    currentCTC: "3,60,000",
    location: "Gurugram",
    experience: "3.8 Years",
    skills: [
      "Java",
      "Automated Testing",
      "Regression Testing",
      "Python",
      "Maven"
    ],
    university: "University of Melbourne (Bcs)",
    workedAs: "Senior Analyst",
    appliedFor: [
      "Senior Analyst",
      "Junior Analyst"
    ]
  }
]
const Container = styled.div`
    height: 100vh;
    background-color: #E5E4E2;
    overflow: auto;
`
const CardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 1260px;
  column-gap: 40px;
  row-gap: 30px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    width: 610px;
  }
`
const App = () => {
  return (
    <Container>
      <CardContainer>
        {CANDIDATE.map(data => {
          return (
            <Candidate candidate={data}/>
          )
        })}
      </CardContainer>
    </Container>
  );
}

export default App;
