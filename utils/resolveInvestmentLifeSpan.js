
 const resolveInvestmentLifespan = (percentage, sec)=>{

    const lifeSpanInSecond = ()=>{
      return `${percentage}% in ${Math.floor(Number(sec))} Second${Math.floor(Number(sec)) > 1 ? 's' : ''}`
    }

    const lifeSpanInMinute = ()=>{
      return `${percentage}% in ${Math.floor(Number(sec) / 60)}  Minute${Math.floor(Number(sec) / 60) > 1 ? 's' : ''}`
    }

    const lifeSpanInHour = ()=>{
      return `${percentage}% in ${Math.floor(Number(sec) / (60 * 60))}  Hour${Math.floor(Number(sec) / (60 * 60)) > 1 ? 's' : ''}`
    }

    const lifeSpanInDay = ()=>{
      return `${percentage}% in ${Math.floor(Number(sec) / (60 * 60 * 60 * 24))}  Day${Math.floor(Number(sec) / (60 * 60 * 24)) > 1 ? 's' : ''}`
    }
  

    // returns seconds
    if(sec < 60){
      return lifeSpanInSecond()
    }

    // returns minutes
    if(sec >= 60 && sec < 60 * 60){
      return lifeSpanInMinute()
    }

    // returns hours
    if(sec >= 60 * 60 && sec < 60 * 60 * 24){
      return lifeSpanInHour()
    }

    // returns days
    if(sec >= 60 * 60 * 24){
      return lifeSpanInDay()
    }
 }


 export default resolveInvestmentLifespan;