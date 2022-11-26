import React from 'react'
import AccountDetails from './account-details'
import Attachment from './attachment'
import BasicInfo from './basic-info'
import EducationInfo from './education-info'

type Props = {}

const OtherInfo = (props: Props) => {
  return (
    <div>
        <BasicInfo/>
        <EducationInfo/>
        <AccountDetails/>  
        <Attachment/> 
        
    </div>
  )
}

export default OtherInfo