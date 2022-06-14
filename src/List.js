import React from 'react';

const List = ({people}) => {
  return (
   <>
   {people.map((person)=>{
     const {id,name,age,image}= person;
     return <article key={id} className="people">
     
      <img src={image}  alt="name" height="100px" width="150px"/>
     <div className='ro'>
        <h4>{name}</h4>
        <br></br>
        <p>{age}</p>
        </div> 
      </article>
   })}
   </>
  );
}

export default List;
