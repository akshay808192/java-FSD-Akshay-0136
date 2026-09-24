import React from 'react'
import ICard from './ICard'
import cat from "../image/mypic.jpg";
function ICardGallery() {

    const student=
    [
        {
        pic:cat,
        name:"Akshay",
        roll:"0136",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:cat,
        name:"Pranshu",
        roll:"0138",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:cat,
        name:"Paras",
        roll:"0137",
        branch:"CSE-AIML",
        college:"ABES Engineering College"
    },
    {
        pic:cat,
        name:"Amit",
        roll:"906464",
        branch:"CSE-DS",
        college:"ABES Engineering College"
    }

]
  return (
    <div style={{display:'flex'}}>
    {/* <ICard name="Rahul" roll="35464" branch="CSE" college="ABES Engineering College" />
    <ICard name="Ajay" roll="898989" barnch="CSE" college="ABES Engineering College" />
    <ICard />
    <ICard /> */}

    {/* <ICard data={student[1]} /> */}

    {
        student.map(ele=>(
             <ICard data={ele} />        
        ))
    }

    </div>
  )
}

export default ICardGallery