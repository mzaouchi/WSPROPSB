import PropTypes from 'prop-types';
// const Italia=(props)=>{
    const Italia=({name,num,pays,user,handleHello,handleHi,show,children})=>{
    // console.log("Le contenu PROPS : ",props)
    var {userName,track} = user
    return(
        // <div>
        //     <h2>Italia Component</h2>
        //     <h3>My name is {props.name}</h3>
        //     <h4>My age is {props.num}</h4>
           
        //     <ul>
        //         {
        //             props.pays.map((el,i,t)=><li key={i}>{el}</li>)
        //         }
        //     </ul>

        //     <h1>Student Name : {props.user.userName}</h1>
        //     <h2>Track : {props.user.track}</h2>
        //     <h3>{props.user.city.town}</h3>
        // </div>
        <div>
            <h2>Italia Component</h2>
            <h3>My name is {name}</h3>
            <h4>My age is {num}</h4>
           
            <ul>
                {
                    pays.map((el,i,t)=><li key={i}>{el}</li>)
                }
            </ul>

            <h1>Student Name : {userName}</h1>
            <h2>Track : {track}</h2>
            <h3>{user.city.town}</h3>
            {children}
            {   
                // show === true ?
                show ? 
                <button onClick={handleHello}>Hello</button>
                :
                <button onClick={()=>handleHi(name)}>Hi</button>
            }

            

            
        </div>
    )
}

Italia.defaultProps ={
    name : "Fakhri",
    num : 10000000000
}

Italia.propTypes = {
   name : PropTypes.string,
}
export default Italia