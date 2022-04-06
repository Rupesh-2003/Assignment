import React from "react"
import { 
    Flex1,
    Flex2,
    Flex3,
    Flex4,
    Flex5,
    Flex6,
    Flex7,
    CandidateName, 
    Card,
    Status,
    ClientSubmitted,
    UnlockProfile,
    Flex3Item,
    Circle,
    Skill,
    UniversityName,
    WorkedAs,
    AppliedFor,
    Match,
    MatchedPercentage, 
} from "./Candidate.styled"
import profilePhoto from "./rupesh.jpg"
import lockIcon from './lock.svg'
import hatIcon from './hat.svg'
import LinkedInIcon from './LinkedIn.svg'

const Candidate = (props) => {
   return(
    <Card>
        <Flex1>
            <CandidateName>{props.candidate.name}</CandidateName>
            <Status>{props.candidate.status}</Status>
            <ClientSubmitted>client submitted</ClientSubmitted>
            <UnlockProfile>
                <img style={{height: "15px", width: "15px", borderRadius: "50%", marginRight: '8px'}} src={lockIcon}/>
                Unlock Profile
            </UnlockProfile>
            <img style={{height: "60px", width: "60px", borderRadius: "50%"}} src={profilePhoto}/>
        </Flex1>
        <Flex2>
            {props.candidate.position}
        </Flex2>
        <Flex3>
            <Flex3Item>{props.candidate.employeeId}</Flex3Item>
            <Circle/>
            <Flex3Item>{props.candidate.currentCompany}</Flex3Item>
            <Circle/>
            <Flex3Item>INR {props.candidate.currentCTC}</Flex3Item>
            <Circle/>
            <Flex3Item>{props.candidate.location}</Flex3Item>
            <Circle/>
            <Flex3Item>{props.candidate.experience}</Flex3Item>
        </Flex3>
        <Flex4>
            {props.candidate.skills.map(data => {
                return (
                    <Skill>{data}</Skill>
                )
            })}
        </Flex4>
        <Flex5>
            <img style={{height: "25px", width: "25px"}} src={hatIcon}/>
            <UniversityName>{props.candidate.university}</UniversityName>
            <img style={{height: "25px", width: "25px", marginLeft: 'auto'}} src={hatIcon}/>
            <WorkedAs>worked as {props.candidate.workedAs}</WorkedAs>
        </Flex5>
        <Flex6>
            <AppliedFor>
                Applied for: 
                <select style={{
                    paddingLeft: '10px', 
                    paddingRight: '10px', 
                    height: '25px', 
                    borderRadius: '20px', 
                    fontFamily: 'Inter', 
                    fontSize: '16px',
                    color: "#606060",
                    fontWeight: '500',
                    marginLeft: '15px', 
                }}>
                    {props.candidate.appliedFor.map(data => {
                        return (
                            <option>{data}</option>
                        )
                    })}
                </select>
            </AppliedFor>
            <Match>Matched %: </Match>
            <MatchedPercentage>88</MatchedPercentage>
        </Flex6>
        <Flex7>
            last active on 14th july, 11 am . Last modified on 5th march 2021
            <img style={{height: "25px", width: "25px", marginLeft: 'auto'}} src={LinkedInIcon}/>
        </Flex7>
    </Card>
   ) 
}

export default Candidate